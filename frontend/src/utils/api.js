import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api", // change if needed
  withCredentials: true, // ✅ important for cookies
});

export default api;
