import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5432",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});
