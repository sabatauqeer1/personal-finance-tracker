import { useState, useEffect } from "react";
import { getTransactions } from "../services/api";
import TransactionForm from "../components/TransactionForm";
import TransactionDelete from "../components/TransactionDelete";
import TransactionEdit from "../components/TransactionEdit";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [edit, setedit] = useState(false);

  async function fetchData() {
    try {
      const data = await getTransactions();
      setTransactions(data.transactions);
    } catch (error) {
      console.error("Failed to fetch transactions", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TransactionForm refresh={fetchData} />
      <h1>All Transactions</h1>

      {transactions.length > 0 ? (
        transactions.map((t) => (
          <div key={t._id}>
            <p>Amount:{t.amount}</p>
            <p>Type: {t.type}</p>
            <p>Note: {t.note}</p>
            <TransactionDelete refresh={fetchData} id={t._id} />

            <button onClick={() => setedit(true)}>edit</button>
            {edit && <TransactionEdit />}
          </div>
        ))
      ) : (
        <p>No transactions yet.</p>
      )}
    </div>
  );
}
