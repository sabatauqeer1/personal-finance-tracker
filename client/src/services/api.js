import axios from "axios";
const API_BASE = "http://localhost:3001/api/personalfinancetracker";
export async function getTransactions() {
  const response = await axios.get(API_BASE);
  return response.data;
}
