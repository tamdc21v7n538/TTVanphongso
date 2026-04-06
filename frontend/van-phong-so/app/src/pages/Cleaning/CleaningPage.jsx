// CRUD và cập nhật trạng thái hoàn thành

import { useEffect, useState } from "react";
import {
  getCleanings,
  addCleaning,
  updateCleaning,
  deleteCleaning
} from "../../services/cleaningService";

const CleaningPage = () => {

  const [jobs, setJobs] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("Chưa hoàn thành");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getCleanings();
    setJobs(res.data);
  };

  const handleSubmit = async () => {

    if (!task) return;

    const data = { task, status };

    if (editingId) {
      await updateCleaning(editingId, data);
      setEditingId(null);
    } else {
      await addCleaning(data);
    }

    setTask("");
    setStatus("Chưa hoàn thành");
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteCleaning(id);
    fetchData();
  };

  const handleEdit = (job) => {
    setTask(job.task);
    setStatus(job.status);
    setEditingId(job.id);
  };

  return (
    <div>
      <h2>Công tác tạp vụ</h2>

      <input
        placeholder="Nhập công việc"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Chưa hoàn thành</option>
        <option>Đã hoàn thành</option>
      </select>

      <button onClick={handleSubmit}>
        {editingId ? "Cập nhật" : "Thêm"}
      </button>

      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.task} - {job.status}

            <button onClick={() => handleEdit(job)}>Sửa</button>
            <button onClick={() => handleDelete(job.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CleaningPage;