// Lấy danh sách, thêm, cập nhật, xóa phương tiện

import api from "./api";


//  Lấy danh sách phương tiện
// Có thể truyền keyword để tìm kiếm
export const getVehicles = (keyword = "") => {
  return api.get(`/vehicles?search=${keyword}`);
};


// Thêm phương tiện mới
export const addVehicle = (data) => {
  return api.post("/vehicles", data);
};


// Cập nhật thông tin phương tiện
export const updateVehicle = (id, data) => {
  return api.put(`/vehicles/${id}`, data);
};


// Xóa phương tiện
export const deleteVehicle = (id) => {
  return api.delete(`/vehicles/${id}`);
};