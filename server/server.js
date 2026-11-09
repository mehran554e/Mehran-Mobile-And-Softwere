const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const cookieParser = require('cookie-parser')

// Load environment variables
dotenv.config()

// Database
const connectDB = require('./config/db')

// Routes
const authRoutes = require('./routes/auth')
const orderRoutes = require('./routes/orders')
const paymentRoutes = require('./routes/payments')
const adminPaymentRoutes = require('./routes/adminPayments')
const adminSetupRoutes = require('./routes/adminSetup')

// Authentication middleware
const { protect } = require('./middleware/auth')

// Initialize Express
const app = express()
const PORT = process.env.PORT || 5000

// Security headers
app.use(helmet())

// Frontend connection
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
)

// Request parsing
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser())

// API rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
})

app.use('/api', apiLimiter)

// Authentication routes
app.use('/api/auth', authRoutes)

// Order routes
app.use('/api/orders', orderRoutes)

// Customer payment routes
app.use('/api/payments', paymentRoutes)

// Admin payment routes
app.use('/api/admin/payments', adminPaymentRoutes)
 
// Admin setup route
app.use('/api/admin/setup', adminSetupRoutes)

// Public health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'online',
    service: 'Mehran Mobile & Software Backend',
  })
})

// Protected customer profile
app.get('/api/auth/me', protect, (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      phone: req.user.phone,
      role: req.user.role,
    },
  })
})

// Start server after database connects
const startServer = async () => {
  try {
    await connectDB()

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Server startup failed:', error.message)
    process.exit(1)
  }
}

startServer()