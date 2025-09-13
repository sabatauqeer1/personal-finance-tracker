import { Transaction } from "../models/transactionModel.js";
export const getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.find({});
    res.status(200).json({ transaction });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transactions" });
  }
};
export const addTransaction = async (req, res) => {
  const { amount, type, category, note } = req.body;
  const transaction = await Transaction.create({
    amount: amount,
    type: type,
    category: category,
    note: note,
  });
  res.status(200).json({ transaction });
  try {
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
