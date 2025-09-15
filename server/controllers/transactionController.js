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
    res.status(500).json({ message: "Failed to fetch transactions" });
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
    res.status(500).json({ message: "Failed to fetch transactions" });
  }
};
export const deleteTransaction = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transactions" });
  }
};
