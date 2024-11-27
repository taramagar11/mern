const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  clubId: { type: mongoose.Schema.Types.ObjectId, ref: 'Club', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },  // Image URL (can be null)
  video: { type: String, required: false },  // Video URL (can be null)
});

module.exports = mongoose.model('Content', contentSchema);
