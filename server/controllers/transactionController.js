import { Transaction } from "../models/transactionModel.js";
export const getTransaction = async (req, res) => {
  const { type } = req.query;

  try {
    if (type === "expense") {
      const transactions = await Transaction.find({ type: type });
      res
        .status(200)
        .json({ transactions, success: true, message: "expense transactions" });
    }
    if (type === "income") {
      const transactions = await Transaction.find({ type: type });
      res
        .status(200)
        .json({ transactions, success: true, message: "income transactions" });
    }
    const transactions = await Transaction.find({});
    res
      .status(200)
      .json({ transactions, success: true, message: " transactions" });
  } catch (error) {
    next(error);
  }
};
export const addTransaction = async (req, res, next) => {
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
    next(error);
  }
};
export const deleteTransaction = async (req, res, next) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "deleted transaction",
    });
  } catch (error) {
    next(error);
  }
};
export const updateTransaction = async (req, res, next) => {
  const { id } = req.params;
  const { amount, type, note } = req.body;
  try {
    if (amount || type || note) {
      const transaction = await Transaction.findByIdAndUpdate(
        { _id: id },
        { amount, type, note },
        { new: true, runValidators: true }
      );
      res.status(200).json({
        success: true,
        message: "transaction updated",
        transaction,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "please enter input",
      });
    }
  } catch (error) {
    next(error);
  }
};
