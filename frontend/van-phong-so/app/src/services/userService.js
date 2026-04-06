
// Lấy danh sách, thêm, cập nhật, xóa, phân quyền

import api from "./api";

// Lấy danh sách người dùng
export const getUsers = (keyword = "") => {
  return api.get(`/users?search=${keyword}`);
};


// Thêm người dùng mới
export const addUser = (data) => {
  return api.post("/users", data);
};


// Cập nhật thông tin người dùng
export const updateUser = (id, data) => {
  return api.put(`/users/${id}`, data);
};


// Xóa người dùng
export const deleteUser = (id) => {
  return api.delete(`/users/${id}`);
};


// Cập nhật quyền (Admin / Nhân viên / Bảo vệ...)
export const updateUserRole = (id, role) => {
  return api.patch(`/users/${id}/role`, { role });
};