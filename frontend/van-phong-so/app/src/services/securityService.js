import api from "./api";

export const getSecurities = () =>
  api.get("/securities");

export const addSecurity = (data) =>
  api.post("/securities", data);

export const updateSecurity = (id, data) =>
  api.put(`/securities/${id}`, data);

export const deleteSecurity = (id) =>
  api.delete(`/securities/${id}`);