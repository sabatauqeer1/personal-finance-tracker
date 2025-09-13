import mongoose from "mongoose";
const TransactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  type: { type: String, required: true, enum: ["income", "expense"] },
  category: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  note: {
    type: String,
    maxlength: 100,
  },
});

export const Transaction = mongoose.model("Transaction", TransactionSchema);
