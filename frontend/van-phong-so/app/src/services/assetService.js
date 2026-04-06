import api from "./api";

// Lấy danh sách tài sản (có search)
export const getAssets = (keyword = "") => {
  return api.get(`/assets?search=${keyword}`);
};

// Thêm tài sản
export const addAsset = (data) => {
  return api.post("/assets", data);
};

// Cập nhật tài sản
export const updateAsset = (id, data) => {
  return api.put(`/assets/${id}`, data);
};

// Xóa tài sản
export const deleteAsset = (id) => {
  return api.delete(`/assets/${id}`);
};