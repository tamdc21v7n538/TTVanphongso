// CRUD và tìm kiếm
import { useEffect, useState } from "react";
import { getAssets } from "../../services/api";
import { useEffect, useState } from "react";
import {
  getAssets,
  addAsset,
  updateAsset,
  deleteAsset
} from "../../services/assetService";

const AssetPage = () => {

  // STATE

  const [assets, setAssets] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Đang sử dụng");
  const [editingId, setEditingId] = useState(null);
  const [keyword, setKeyword] = useState("");

  // LOAD DATA

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (search = "") => {
    const res = await getAssets(search);
    setAssets(res.data);
  };

  // THÊM / CẬP NHẬT

  const handleSubmit = async () => {

    if (!name) {
      alert("Vui lòng nhập tên tài sản");
      return;
    }

    const data = { name, status };

    if (editingId) {
      await updateAsset(editingId, data);
      setEditingId(null);
    } else {
      await addAsset(data);
    }

    setName("");
    setStatus("Đang sử dụng");
    fetchData();
  };

  // XÓA

  const handleDelete = async (id) => {
    await deleteAsset(id);
    fetchData();
  };

  // SỬA

  const handleEdit = (asset) => {
    setName(asset.name);
    setStatus(asset.status);
    setEditingId(asset.id);
  };

  // TÌM KIẾM

  const handleSearch = () => {
    fetchData(keyword);
  };

  return (
    <div>
      <h2>Quản lý tài sản</h2>

      {/* Tìm kiếm */}
      <input
        placeholder="Tìm kiếm tài sản..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm</button>

      <hr />

      {/* Form nhập */}
      <input
        placeholder="Tên tài sản"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Đang sử dụng</option>
        <option>Hư hỏng</option>
        <option>Đã thanh lý</option>
      </select>

      <button onClick={handleSubmit}>
        {editingId ? "Cập nhật" : "Thêm"}
      </button>

      <hr />

      {/* Danh sách */}
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>
            {asset.name} - {asset.status}

            <button onClick={() => handleEdit(asset)}>Sửa</button>
            <button onClick={() => handleDelete(asset.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetPage;