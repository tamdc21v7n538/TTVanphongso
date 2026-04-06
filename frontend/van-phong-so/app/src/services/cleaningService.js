import api from "./api";

export const getCleanings = () => api.get("/cleanings");

export const addCleaning = (data) =>
  api.post("/cleanings", data);

export const updateCleaning = (id, data) =>
  api.put(`/cleanings/${id}`, data);

export const deleteCleaning = (id) =>
  api.delete(`/cleanings/${id}`);