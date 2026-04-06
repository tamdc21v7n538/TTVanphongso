"use client";

import React, { useState } from "react";
interface Booking {
  id: number;
  roomName: string;
  person: string;
  time: string;
}
export default function MeetingRoomPage() {
  // 1. Quản lý danh sách phòng họp
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Phòng Alpha",
      capacity: 10,
      equipment: ["Máy chiếu", "Tivi", "Bảng trắng"],
      status: "Trống",
      color: "bg-emerald-500",
    },
    {
      id: 2,
      name: "Phòng Beta",
      capacity: 5,
      equipment: ["Tivi", "Loa hội nghị"],
      status: "Đang họp",
      color: "bg-rose-500",
    },
    {
      id: 3,
      name: "Phòng Gamma",
      capacity: 20,
      equipment: ["Máy chiếu", "Micro", "Hệ thống âm thanh"],
      status: "Trống",
      color: "bg-emerald-500",
    },
    {
      id: 4,
      name: "Phòng Delta",
      capacity: 8,
      equipment: ["Tivi", "Bảng trắng"],
      status: "Đang sửa chữa",
      color: "bg-amber-500",
    },
  ]);

  /** @type {[any[], React.Dispatch<React.SetStateAction<any[]>>]} */
  const [myBookings, setMyBookings] = useState<Booking[]>([]);
  // 3. Quản lý ẩn/hiện các cửa sổ phụ
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showMyList, setShowMyList] = useState(false);

  // 4. State cho form đặt phòng
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [bookingName, setBookingName] = useState("");

  // Hàm xử lý đặt phòng
  const handleConfirmBooking = () => {
    if (!selectedRoomId || !bookingName) {
      alert("Vui lòng nhập đủ thông tin!");
      return;
    }

    const roomIdNum = parseInt(selectedRoomId);
    const roomInfo = rooms.find((r) => r.id === roomIdNum);

    if (roomInfo) {
      setRooms(
        rooms.map((room) =>
          room.id === roomIdNum
            ? { ...room, status: "Đang họp", color: "bg-rose-500" }
            : room,
        ),
      );

      // Tạo object mới rõ ràng
      // Tạo đối tượng booking mới
      const newBooking = {
        id: Date.now(),
        roomName: roomInfo.name,
        person: bookingName,
        time: new Date().toLocaleTimeString(),
      };

      // Sửa dòng này để hết gạch đỏ:
      setMyBookings([...myBookings, newBooking]);
      setShowBookingModal(false);
      setBookingName("");
      setSelectedRoomId("");
      alert("Đặt phòng thành công!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 bg-white/50 p-6 rounded-2xl backdrop-blur-sm border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Quản lý Phòng họp
          </h2>
          <p className="text-slate-500 text-sm italic">
            Kiểm tra trạng thái và đặt lịch họp trực tuyến
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowMyList(!showMyList)}
            className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2 font-medium"
          >
            📂 Lịch đặt của tôi ({myBookings.length})
          </button>
          <button
            onClick={() => setShowBookingModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-all shadow-md active:scale-95"
          >
            + Đặt phòng mới
          </button>
        </div>
      </div>

      {/* Hiển thị 'Lịch đặt của tôi' */}
      {showMyList && (
        <div className="mb-8 p-6 bg-blue-50 border-2 border-dashed border-blue-200 rounded-2xl animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-blue-800">
              Phòng bạn đã đặt trong phiên này:
            </h3>
            <button
              onClick={() => setShowMyList(false)}
              className="text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>
          </div>
          {myBookings.length === 0 ? (
            <p className="text-slate-400 text-sm italic text-center py-4">
              Bạn chưa thực hiện lượt đặt phòng nào.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {myBookings.map((b) => (
                <div
                  key={b.id}
                  className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex justify-between items-center"
                >
                  <div>
                    <p className="font-bold text-blue-700 text-lg">
                      {b["roomName"]}
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      🕒 {b["time"]}
                    </p>
                    <p className="text-sm text-slate-600 mt-2 font-medium underline decoration-blue-200 underline-offset-4">
                      {b["person"]}
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-1 rounded-full font-bold uppercase">
                    Đã xác nhận
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Danh sách phòng dạng Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group"
          >
            <div
              className={`${room.color} p-4 text-white transition-all duration-500`}
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase bg-white/20 px-2 py-0.5 rounded">
                  ID: 0{room.id}
                </span>
                <span className="text-[10px] font-black uppercase tracking-tighter">
                  {room.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mt-2 group-hover:scale-105 transition-transform">
                {room.name}
              </h3>
              <p className="text-xs opacity-90 mt-1">
                Sức chứa: {room.capacity} người
              </p>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest">
                Tiện ích sẵn có:
              </h4>
              <div className="flex flex-wrap gap-2 mb-6 flex-1">
                {room.equipment.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-50 text-slate-600 text-[10px] px-2 py-1 rounded-md border border-slate-100 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <button
                disabled={room.status !== "Trống"}
                onClick={() => {
                  setSelectedRoomId(room.id.toString());
                  setShowBookingModal(true);
                }}
                className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${
                  room.status === "Trống"
                    ? "bg-slate-800 text-white hover:bg-blue-600"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                }`}
              >
                {room.status === "Trống" ? "Đặt lịch ngay" : "Không khả dụng"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL ĐẶT PHÒNG */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 border border-slate-200 animate-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              📅 Phiếu đặt phòng họp
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleConfirmBooking();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Tên phòng muốn đặt
                </label>
                <select
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-slate-700 font-medium outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                >
                  <option value="">-- Chọn phòng trống --</option>
                  {rooms
                    .filter((r) => r.status === "Trống")
                    .map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} (Sức chứa: {r.capacity})
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Họ tên người đặt / Mục đích
                </label>
                <input
                  type="text"
                  placeholder="VD: Nguyễn Văn A - Họp Team Design"
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-slate-700 font-medium outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-600 rounded-lg font-bold hover:bg-slate-200 transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 shadow-md active:scale-95"
                >
                  Xác nhận đặt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
