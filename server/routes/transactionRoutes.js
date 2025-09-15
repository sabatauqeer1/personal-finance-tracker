import {
  getTransaction,
  addTransaction,
  deleteTransaction,
  updateTransaction,
} from "../controllers/transactionController.js";
import express from "express";
const router = express.Router();
router.get("/", getTransaction);
router.post("/", addTransaction);
router.delete("/:id", deleteTransaction);
router.patch("/:id", updateTransaction);
export default router;
