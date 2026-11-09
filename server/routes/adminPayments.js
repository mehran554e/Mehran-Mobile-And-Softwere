const express = require('express')

const Payment = require('../models/Payment')
const Order = require('../models/Order')
const { protect, adminOnly } = require('../middleware/auth')

const router = express.Router()

// All routes in this file require an authenticated admin
router.use(protect, adminOnly)

// Get payments waiting for verification
router.get('/pending', async (req, res) => {
  try {
    const payments = await Payment.find({
      status: 'pending',
    })
      .populate('user', 'name email phone')
      .populate('order', 'orderNumber serviceName totalAmount status')
      .sort({ createdAt: -1 })

    return res.status(200).json({
      success: true,
      count: payments.length,
      payments,
    })
  } catch (error) {
    console.error('Admin pending payments error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to fetch pending payments.',
    })
  }
})

// Approve a payment
router.patch('/:paymentId/approve', async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.paymentId)

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found.',
      })
    }

    if (payment.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: 'This payment has already been reviewed.',
      })
    }

    const order = await Order.findById(payment.order)

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Related order not found.',
      })
    }

    payment.status = 'approved'
    payment.verifiedAt = new Date()
    payment.adminNote = 'Payment approved by administrator.'

    order.status = 'confirmed'

    await payment.save()
    await order.save()

    return res.status(200).json({
      success: true,
      message: 'Payment approved successfully.',
      payment: {
        id: payment._id,
        status: payment.status,
        verifiedAt: payment.verifiedAt,
      },
      order: {
        id: order._id,
        orderNumber: order.orderNumber,
        status: order.status,
      },
    })
  } catch (error) {
    console.error('Approve payment error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to approve payment.',
    })
  }
})

// Reject a payment
router.patch('/:paymentId/reject', async (req, res) => {
  try {
    const { adminNote = '' } = req.body

    const payment = await Payment.findById(req.params.paymentId)

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found.',
      })
    }

    if (payment.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: 'This payment has already been reviewed.',
      })
    }

    const order = await Order.findById(payment.order)

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Related order not found.',
      })
    }

    if (
      typeof adminNote !== 'string' ||
      adminNote.trim().length > 500
    ) {
      return res.status(400).json({
        success: false,
        message: 'Admin note must be 500 characters or fewer.',
      })
    }

    payment.status = 'rejected'
    payment.verifiedAt = new Date()
    payment.adminNote =
      adminNote.trim() || 'Payment rejected by administrator.'

    order.status = 'pending'

    await payment.save()
    await order.save()

    return res.status(200).json({
      success: true,
      message: 'Payment rejected successfully.',
      payment: {
        id: payment._id,
        status: payment.status,
        adminNote: payment.adminNote,
        verifiedAt: payment.verifiedAt,
      },
      order: {
        id: order._id,
        orderNumber: order.orderNumber,
        status: order.status,
      },
    })
  } catch (error) {
    console.error('Reject payment error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to reject payment.',
    })
  }
})

module.exports = router