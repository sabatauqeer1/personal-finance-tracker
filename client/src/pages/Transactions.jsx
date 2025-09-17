import { useState, useEffect } from "react";
import { getTransactions } from "../services/api";
export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTransactions();
        setTransactions(data.transactions);
      } catch (error) {
        console.error("Failed to fetch transactions", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Transactions</h1>

      {transactions.length > 0 ? (
        transactions.map((t) => (
          <div key={t._id} className="border p-2 rounded mb-2">
            <p>Amount:{t.amount}</p>
            <p>Type: {t.type}</p>
            <p>Note: {t.note}</p>
          </div>
        ))
      ) : (
        <p>No transactions yet.</p>
      )}
    </div>
  );
}
