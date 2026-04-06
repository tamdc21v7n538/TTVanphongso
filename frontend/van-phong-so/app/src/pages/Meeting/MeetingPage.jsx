import React from "react";
import { useEffect, useState } from "react";
import { getRooms } from "../../services/api";
import {
  getMeetings,
  addMeeting,
  updateMeeting,
  deleteMeeting
} from "../../services/meetingService";

const MeetingPage = () => {

  const [meetings, setMeetings] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [roomId, setRoomId] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
  const loadData = async () => {
    try {
      const meetingRes = await getMeetings();
      setMeetings(meetingRes.data);

      const roomRes = await getRooms();
      setRooms(roomRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  loadData();
}, []);

  const fetchData = async () => {
    const res = await getMeetings();
    setMeetings(res.data);
  };

  const fetchRooms = async () => {
  try {
    const res = await getRooms();
    console.log("Rooms:", res.data); // test
    setRooms(res.data);
  } catch (err) {
    console.error(err);
  }
};

  const handleSubmit = async () => {

    if (!title || !date) return;

    const data = { title, date, roomId };

    if (editingId) {
      await updateMeeting(editingId, data);
      setEditingId(null);
    } else {
      await addMeeting(data);
    }

    setTitle("");
    setDate("");
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteMeeting(id);
    fetchData();
  };

  const handleEdit = (m) => {
    setTitle(m.title);
    setDate(m.date);
    setEditingId(m.id);
  };

  return (
    <div>
      <h2>Quản lý cuộc họp</h2>

      <input
        placeholder="Tiêu đề"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
  <option value="">Chọn phòng</option>
  {rooms.map((room) => (
    <option key={room.id} value={room.id}>
      {room.name}
    </option>
  ))}
</select>

      <button onClick={handleSubmit}>
        {editingId ? "Cập nhật" : "Thêm"}
      </button>

      <ul>
        {meetings.map((m) => (
          <li key={m.id}>
            {m.title} - {m.date} - Phòng: {m.roomId}

            <button onClick={() => handleEdit(m)}>Sửa</button>
            <button onClick={() => handleDelete(m.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingPage;