const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true } // or remove 'required: true' if you want to allow posts without images
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);