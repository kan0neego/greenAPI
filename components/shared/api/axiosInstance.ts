import axios from "axios";
import { getStrapiError } from "../utils/getStrapiError";

export const axiosInstance = axios.create({
  baseURL: "https://api.green-api.com/",
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(getStrapiError(err) || err)
);
