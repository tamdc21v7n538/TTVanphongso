// Xem danh sách, thêm, sửa, xóa, tìm kiếm phương tiện

import { useEffect, useState } from "react";
import {
  getVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle
} from "../../services/vehicleService";

const VehiclePage = () => {

  // STATE

  const [vehicles, setVehicles] = useState([]);
  const [name, setName] = useState("");
  const [plate, setPlate] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [keyword, setKeyword] = useState("");

  // LOAD DATA

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (search = "") => {
    const res = await getVehicles(search);
    setVehicles(res.data);
  };

  // THÊM / CẬP NHẬT

  const handleSubmit = async () => {

    if (!name || !plate) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const data = {
      name,
      plate
    };

    if (editingId) {
      // Cập nhật
      await updateVehicle(editingId, data);
      setEditingId(null);
    } else {
      // Thêm mới
      await addVehicle(data);
    }

    setName("");
    setPlate("");
    fetchData();
  };

  // XÓA

  const handleDelete = async (id) => {
    await deleteVehicle(id);
    fetchData();
  };

  // SỬA
  
  const handleEdit = (vehicle) => {
    setName(vehicle.name);
    setPlate(vehicle.plate);
    setEditingId(vehicle.id);
  };

  // TÌM KIẾM
  
  const handleSearch = () => {
    fetchData(keyword);
  };

  return (
    <div>
      <h2>Quản lý phương tiện</h2>

      {/* Tìm kiếm */}
      <input
        placeholder="Tìm kiếm..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm</button>

      <hr />

      {/* Form nhập */}
      <input
        placeholder="Tên phương tiện"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Biển số"
        value={plate}
        onChange={(e) => setPlate(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editingId ? "Cập nhật" : "Thêm"}
      </button>

      <hr />

      {/* Danh sách */}
      <ul>
        {vehicles.map((v) => (
          <li key={v.id}>
            {v.name} - {v.plate}

            <button onClick={() => handleEdit(v)}>Sửa</button>
            <button onClick={() => handleDelete(v.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehiclePage;