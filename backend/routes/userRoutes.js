// Example of userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Your Mongoose model

// Fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id); // Delete user by ID
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});

// Accept or Reject club membership request
router.post('/users/:id/join-club', async (req, res) => {
  const { action } = req.body; // 'accept' or 'reject'
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (action === 'accept') {
      user.club = true;
    } else if (action === 'reject') {
      user.club = false;
    }

    await user.save();
    res.json({ message: `User's join club request has been ${action}ed` });
  } catch (err) {
    res.status(500).json({ message: 'Error processing join club request' });
  }
});

module.exports = router;
