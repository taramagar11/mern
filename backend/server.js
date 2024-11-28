const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRoutes'); // Import admin routes

// Initialize dotenv to access environment variables
dotenv.config();

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Database connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection failed:', err));

// Routes
app.use('/api/admin', adminRoutes); // Mount admin routes under "/api/admin"

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
