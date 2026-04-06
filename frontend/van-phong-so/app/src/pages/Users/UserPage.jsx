// CRUD và phân quyền

import { useEffect, useState } from "react";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  updateUserRole
} from "../../services/userService";

const UserPage = () => {

  // STATE

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("employee");
  const [editingId, setEditingId] = useState(null);

  // LOAD DATA

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  // THÊM / CẬP NHẬT

  const handleSubmit = async () => {

    if (!name || !email) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const data = { name, email, role };

    if (editingId) {
      await updateUser(editingId, data);
      setEditingId(null);
    } else {
      await addUser(data);
    }

    setName("");
    setEmail("");
    setRole("employee");

    fetchData();
  };

  // XÓA

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchData();
  };

  // SỬA

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setEditingId(user.id);
  };

  // ĐỔI QUYỀN

  const handleRoleChange = async (id, newRole) => {
    await updateUserRole(id, newRole);
    fetchData();
  };

  return (
    <div>
      <h2>Quản lý người dùng</h2>

      {/* Form */}
      <input
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="admin">Admin</option>
        <option value="employee">Nhân viên</option>
        <option value="security">Bảo vệ</option>
        <option value="cleaning">Tạp vụ</option>
      </select>

      <button onClick={handleSubmit}>
        {editingId ? "Cập nhật" : "Thêm"}
      </button>

      <hr />

      {/* Danh sách */}
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email} - {u.role}

            <button onClick={() => handleEdit(u)}>Sửa</button>
            <button onClick={() => handleDelete(u.id)}>Xóa</button>

            {/* Đổi quyền nhanh */}
            <select
              value={u.role}
              onChange={(e) => handleRoleChange(u.id, e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="employee">Nhân viên</option>
              <option value="security">Bảo vệ</option>
              <option value="cleaning">Tạp vụ</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;