const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  hashtags: [{ type: String }],
});

module.exports = mongoose.model('Club', clubSchema);
