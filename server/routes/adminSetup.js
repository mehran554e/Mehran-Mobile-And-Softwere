const express = require('express')
const bcrypt = require('bcryptjs')

const User = require('../models/User')

const router = express.Router()

router.post('/create-admin', async (req, res) => {
  try {
    const setupKey = req.headers['x-admin-setup-key']
    const configuredKey = process.env.ADMIN_SETUP_KEY

    if (!configuredKey) {
      return res.status(503).json({
        success: false,
        message: 'Admin setup is not configured.',
      })
    }

    if (!setupKey || setupKey !== configuredKey) {
      return res.status(403).json({
        success: false,
        message: 'Invalid admin setup key.',
      })
    }

    const { name, email, password, phone = '' } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and password are required.',
      })
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Admin password must contain at least 8 characters.',
      })
    }

    const normalizedEmail = email.trim().toLowerCase()

    const existingAdmin = await User.findOne({
      role: 'admin',
    })

    if (existingAdmin) {
      return res.status(409).json({
        success: false,
        message: 'An administrator already exists.',
      })
    }

    const existingUser = await User.findOne({
      email: normalizedEmail,
    })

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'A user with this email already exists.',
      })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const admin = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      password: hashedPassword,
      role: 'admin',
      isActive: true,
    })

    return res.status(201).json({
      success: true,
      message: 'Administrator account created successfully.',
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    })
  } catch (error) {
    console.error('Admin setup error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Unable to create administrator account.',
    })
  }
})

module.exports = router