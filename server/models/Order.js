
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },

    orderNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    serviceType: {
      type: String,
      enum: [
        'mobile-service',
        'laptop-service',
        'gaming-topup',
        'software-rental',
      ],
      required: true,
    },

    serviceName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    quantity: {
      type: Number,
      default: 1,
      min: 1,
      max: 100,
    },

    unitPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      default: 'PKR',
    },

    status: {
      type: String,
      enum: [
        'pending',
        'payment-submitted',
        'confirmed',
        'processing',
        'completed',
        'cancelled',
      ],
      default: 'pending',
      index: true,
    },

    customerNote: {
      type: String,
      default: '',
      maxlength: 500,
    },
  },
  { timestamps: true }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
