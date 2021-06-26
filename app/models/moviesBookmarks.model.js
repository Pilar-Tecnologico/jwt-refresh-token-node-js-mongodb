const mongoose = require('mongoose');

const Bookmark = mongoose.model(
  'Bookmark',
  new mongoose.Schema({
    userId: { type: String },
    bookmarks: { type: Array },
  })
);

module.exports = Bookmark;
