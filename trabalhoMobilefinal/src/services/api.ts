import axios from "axios";

const api = axios.create({
  baseURL: "https://673d343e0118dbfe86067e02.mockapi.io/bear/api/",
});

export default api;