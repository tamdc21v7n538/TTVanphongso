// Cấu hình axios dùng chung toàn hệ thống

import axios from "axios";

const API_URL = "http://localhost:8080/api";
export const getRooms = () => axios.get(`${API_URL}/rooms`);
export const getAssets = () => axios.get(`${API_URL}/assets`);
export const getBookings = () => axios.get(`${API_URL}/bookings`);

// Tạo instance axios
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor: tự động gắn token nếu có
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;