import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  transactionType: {
    type: String,
    enum: ['stake', 'borrow', 'lend'],
    required: true,
  },
  token: {
    type: String,
    required: true,
    
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  description: {
    type: String,
  },
}, {
  timestamps: true,
});

const Transaction = mongoose.model('transaction', transactionSchema);
export default Transaction;
