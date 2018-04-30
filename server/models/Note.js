const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdOn: { type: Date, required: true }
});

module.exports = mongoose.model('Note', NoteSchema);