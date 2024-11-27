const User = require('../models/User');  // Import the User model

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();  // Fetch all users from the database
    res.json(users);  // Send users as JSON
  } catch (err) {
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);  // Find user by ID
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);  // Send the user data as JSON
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      req.body, // Data sent in the request body
      { new: true } // Return the updated user
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);  // Send the updated user data as JSON
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);  // Delete user by ID
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
