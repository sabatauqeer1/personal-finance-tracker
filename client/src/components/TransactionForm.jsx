import { addTransaction } from "../services/api";
import { useState } from "react";

export default function TransactionForm({ refresh }) {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    const formDataObj = new FormData(e.target);

    if (!e.target.amount.value || isNaN(e.target.amount.value)) {
      newErrors.amount = "Amount is required and must be a number";
    }
    if (!e.target.type.value) {
      newErrors.type = "Please select a type";
    }
    if (!e.target.category.value.trim()) {
      newErrors.category = "Category is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const formData = {
      amount: formDataObj.get("amount"),
      note: formDataObj.get("note"),
      type: formDataObj.get("type"),
      category: formDataObj.get("category"),
    };
    setLoading(true);
    await addTransaction(formData);
    setLoading(false);
    refresh();
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">amount</label>
      <input type="text" name="amount" id="amount"></input>
      {errors.amount && <small>{errors.amount}</small>}
      <label htmlFor="type"> type</label>
      <input type="text" name="type" id="type"></input>
      {errors.type && <small>{errors.type}</small>}
      <label htmlFor="note"> note</label>
      <input type="text" name="note" id="note"></input>
      {errors.note && <small>{errors.note}</small>}
      <label htmlFor="category"> category</label>
      <input type="text" name="category" id="category"></input>
      {errors.category && <small>{errors.category}</small>}
      <button type="sumbit"> sumbit</button>
    </form>
  );
}
