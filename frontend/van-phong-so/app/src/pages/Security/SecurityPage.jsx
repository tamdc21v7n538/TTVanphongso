// CRUD và phân ca trực

import { useEffect, useState } from "react";
import {
  getSecurities,
  addSecurity,
  updateSecurity,
  deleteSecurity
} from "../../services/securityService";

const SecurityPage = () => {

  const [shifts, setShifts] = useState([]);
  const [guard, setGuard] = useState("");
  const [shift, setShift] = useState("Ca ngày");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getSecurities();
    setShifts(res.data);
  };

  const handleSubmit = async () => {

    if (!guard) return;

    const data = { guard, shift };

    if (editingId) {
      await updateSecurity(editingId, data);
      setEditingId(null);
    } else {
      await addSecurity(data);
    }

    setGuard("");
    setShift("Ca ngày");
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteSecurity(id);
    fetchData();
  };

  const handleEdit = (item) => {
    setGuard(item.guard);
    setShift(item.shift);
    setEditingId(item.id);
  };

  return (
    <div>
      <h2>Công tác bảo vệ</h2>

      <input
        placeholder="Tên bảo vệ"
        value={guard}
        onChange={(e) => setGuard(e.target.value)}
      />

      <select
        value={shift}
        onChange={(e) => setShift(e.target.value)}
      >
        <option>Ca ngày</option>
        <option>Ca đêm</option>
      </select>

      <button onClick={handleSubmit}>
        {editingId ? "Cập nhật" : "Thêm"}
      </button>

      <ul>
        {shifts.map((s) => (
          <li key={s.id}>
            {s.guard} - {s.shift}

            <button onClick={() => handleEdit(s)}>Sửa</button>
            <button onClick={() => handleDelete(s.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecurityPage;