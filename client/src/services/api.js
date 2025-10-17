import axios from "axios";

const API_BASE = "http://localhost:3001/api/personalfinancetracker";
export async function getTransactions() {
  const response = await axios.get(API_BASE);
  return response.data;
}

export async function addTransaction(formData) {
  const response = await axios.post(API_BASE, formData);

  return console.log("posted");
}

export async function deleteTransaction(id) {
  const response = await axios.delete(`${API_BASE}/${id}`);

  return console.log("deleted");
}

export async function updateTransaction(id, formData) {
  const response = await axios.patch(`${API_BASE}/${id}`, formData);

  return console.log("updated");
}
