import {
  getTransaction,
  addTransaction,
  deleteTransaction,
} from "../controllers/transactionController.js";
import express from "express";
const router = express.Router();
router.get("/", getTransaction);
router.post("/", addTransaction);
router.delete("/:id", deleteTransaction);
export default router;
