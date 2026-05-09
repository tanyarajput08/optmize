import axios from "axios";

const api = axios.create({
  baseURL:
    "https://optmize-production.up.railway.app/api"
});

export default api;