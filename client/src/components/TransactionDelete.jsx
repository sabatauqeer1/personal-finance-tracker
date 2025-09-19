import { deleteTransaction } from "../services/api";
export default function TransactionDelete({ id, refresh }) {
  const handleDelete = async () => {
    try {
      await deleteTransaction(id);
      refresh();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return <button onClick={handleDelete}>delete</button>;
}
