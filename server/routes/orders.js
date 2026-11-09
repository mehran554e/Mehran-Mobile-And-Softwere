
const express = require('express')
const crypto = require('crypto')

const Order = require('../models/Order')
const catalogue = require('../data/catalogue')
const { protect } = require('../middleware/auth')

const router = express.Router()

// Create a new customer order
router.post('/', protect, async (req, res) => {
  try {
    const { productId, quantity = 1, customerNote = '' } = req.body

    // Validate product
    const product = catalogue[productId]

    if (!product) {
      return res.status(400).json({
        success: false,
        message: 'Invalid product selected.',
      })
    }

    // Validate quantity
    if (
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 10
    ) {
      return res.status(400).json({
        success: false,
        message: 'Quantity must be between 1 and 10.',
      })
    }

    // Validate customer note
    if (
      typeof customerNote !== 'string' ||
      customerNote.length > 500
    ) {
      return res.status(400).json({
        success: false,
        message: 'Customer note must be 500 characters or fewer.',
      })
    }

    // Calculate price on the server
    const totalAmount = product.price * quantity

    // Generate a unique order number
    const orderNumber = `MM-${crypto.randomUUID()
      .replace(/-/g, '')
      .slice(0, 12)
      .toUpperCase()}`

    // Save order
    const order = await Order.create({
      user: req.user._id,
      orderNumber,
      serviceType: product.serviceType,
      serviceName: product.name,
      quantity,
      unitPrice: product.price,
      totalAmount,
      customerNote: customerNote.trim(),
    })

    return res.status(201).json({
      success: true,
      message: 'Your order has been created.',
      order: {
        id: order._id,
        orderNumber: order.orderNumber,
        serviceName: order.serviceName,
        quantity: order.quantity,
        unitPrice: order.unitPrice,
        totalAmount: order.totalAmount,
        currency: order.currency,
        status: order.status,
      },
    })
  } catch (error) {
    console.error('Create order error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to create your order.',
    })
  }
})

// Get logged-in customer's orders
router.get('/my-orders', protect, async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).sort({ createdAt: -1 })

    return res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    })
  } catch (error) {
    console.error('Fetch orders error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to fetch your orders.',
    })
  }
})

module.exports = router
