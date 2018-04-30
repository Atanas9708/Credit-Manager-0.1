const mongoose = require('mongoose');

const NoteSchema = require('./Note').schema;

const creditSchema = new mongoose.Schema({
  borrower: { type: Object },
  amount: { type: Number, required: true },
  creationDate: { type: Date, required: true },
  repaymentPeriod: { type: Date, required: true },
  firstMaturityDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  status: { type: String, required: true },
  notes: [NoteSchema]
});

const Credit = mongoose.model('Credit', creditSchema);

module.exports = Credit;