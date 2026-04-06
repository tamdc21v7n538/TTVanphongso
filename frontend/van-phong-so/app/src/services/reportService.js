import api from "./api";

export const getReports = () =>
  api.get("/reports");

export const exportReport = () =>
  api.get("/reports/export");