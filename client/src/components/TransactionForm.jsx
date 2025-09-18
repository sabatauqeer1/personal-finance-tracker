import { addTransaction } from "../services/api";

export default function TransactionForm({ refresh }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData(e.target);
    const formData = {
      amount: formDataObj.get("amount"),
      note: formDataObj.get("note"),
      type: formDataObj.get("type"),
      category: formDataObj.get("category"),
    };
    await addTransaction(formData);
    refresh();
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">amount</label>
      <input type="text" name="amount" id="amount"></input>
      <label htmlFor="type"> type</label>
      <input type="text" name="type" id="type"></input>
      <label htmlFor="note"> note</label>
      <input type="text" name="note" id="note"></input>
      <label htmlFor="category"> category</label>
      <input type="text" name="category" id="category"></input>
      <button type="sumbit"> sumbit</button>
    </form>
  );
}
