
const express = require('express')

const Payment = require('../models/Payment')
const Order = require('../models/Order')
const { protect } = require('../middleware/auth')

const router = express.Router()

// Submit payment for an existing order
router.post('/submit', protect, async (req, res) => {
  try {
    const { orderId, paymentMethod, transactionId } = req.body

    // Validate required fields
    if (!orderId || !paymentMethod || !transactionId) {
      return res.status(400).json({
        success: false,
        message: 'Order ID, payment method and transaction ID are required.',
      })
    }

    // Validate payment method
    const allowedMethods = ['easypaisa', 'jazzcash', 'sadapay']

    if (!allowedMethods.includes(paymentMethod)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payment method.',
      })
    }

    // Validate transaction ID
    if (
      typeof transactionId !== 'string' ||
      transactionId.trim().length < 3 ||
      transactionId.trim().length > 100
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid transaction ID.',
      })
    }

    // Find order belonging to logged-in customer
    const order = await Order.findOne({
      _id: orderId,
      user: req.user._id,
    })

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found.',
      })
    }

    // Prevent payment for cancelled or already completed orders
    if (['cancelled', 'completed'].includes(order.status)) {
      return res.status(400).json({
        success: false,
        message: 'Payment cannot be submitted for this order.',
      })
    }

    // Prevent duplicate payment submissions
    const existingPayment = await Payment.findOne({
      order: order._id,
      status: { $in: ['pending', 'approved'] },
    })

    if (existingPayment) {
      return res.status(409).json({
        success: false,
        message: 'A payment has already been submitted for this order.',
      })
    }

    // Create payment using the saved order amount
    const payment = await Payment.create({
      user: req.user._id,
      order: order._id,
      paymentMethod,
      amount: order.totalAmount,
      currency: order.currency,
      transactionId: transactionId.trim(),
      status: 'pending',
    })

    // Update order status
    order.status = 'payment-submitted'
    await order.save()

    return res.status(201).json({
      success: true,
      message: 'Payment submitted successfully. Awaiting admin verification.',
      payment: {
        id: payment._id,
        orderNumber: order.orderNumber,
        paymentMethod: payment.paymentMethod,
        amount: payment.amount,
        currency: payment.currency,
        transactionId: payment.transactionId,
        status: payment.status,
      },
    })
  } catch (error) {
    console.error('Payment submission error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to submit payment.',
    })
  }
})

// View logged-in customer's payment history
router.get('/my-payments', protect, async (req, res) => {
  try {
    const payments = await Payment.find({
      user: req.user._id,
    })
      .populate('order', 'orderNumber serviceName totalAmount status')
      .sort({ createdAt: -1 })

    return res.status(200).json({
      success: true,
      count: payments.length,
      payments,
    })
  } catch (error) {
    console.error('Payment history error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to fetch payment history.',
    })
  }
})

module.exports = router
