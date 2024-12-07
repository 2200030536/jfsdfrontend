import axios from "axios";

const api = axios.create({
  baseURL: "https://foodwastemanagementsystem66.up.railway.app/", // Backend URL
  withCredentials: true, // Enable cookies
});

export default api;
