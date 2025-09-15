import { Transaction } from "../models/transactionModel.js";
export const getTransaction = async (req, res) => {
  const { type } = req.query;

  try {
    if (type === "expense") {
      const transactions = await Transaction.find({ type: type });
      res.status(200).json({ transactions });
    }
    if (type === "income") {
      const transactions = await Transaction.find({ type: type });
      res.status(200).json({ transactions });
    }
    const transactions = await Transaction.find({});
    res.status(200).json({ transactions });
  } catch (error) {
    throw error;
  }
};
export const addTransaction = async (req, res) => {
  const { amount, type, category, note } = req.body;
  try {
    const transaction = await Transaction.create({
      amount: amount,
      type: type,
      category: category,
      note: note,
    });
    res.status(200).json({ transaction });
  } catch (error) {
    throw error;
  }
};
export const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "deleted transaction",
    });
  } catch (error) {
    throw error;
  }
};
export const updateTransaction = async (req, res) => {
  const { amount, type, note } = req.body;
  try {
    if (amount || type || note) {
      const transaction = await Transaction.findByIdAndUpdate({ _id: id });
      res.status(200).json({
        success: true,
        message: "transaction updated",
      });
    }
  } catch (error) {
    throw error;
  }
};
