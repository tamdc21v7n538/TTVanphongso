"use client";

import React, { useState } from "react";

export default function VehiclePage() {
  // 1. State quản lý danh sách xe
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "Toyota Camry",
      plate: "29A-123.45",
      type: "4 chỗ",
      status: "Sẵn sàng",
    },
    {
      id: 2,
      name: "Ford Everest",
      plate: "29B-678.90",
      type: "7 chỗ",
      status: "Đang sử dụng",
    },
    {
      id: 3,
      name: "Hyundai Solati",
      plate: "29C-555.22",
      type: "16 chỗ",
      status: "Bảo trì",
    },
  ]);

  // 2. State quản lý việc ẩn/hiện Modal
  const [showModal, setShowModal] = useState(false);

  // 3. State quản lý dữ liệu nhập vào
  const [newCar, setNewCar] = useState({
    name: "",
    plate: "",
    type: "4 chỗ",
    status: "Sẵn sàng",
  });

  // Hàm xử lý logic (Không nhận tham số e nên không bao giờ bị lỗi gạch đỏ)
  const handleAddVehicle = () => {
    if (!newCar.name || !newCar.plate) {
      alert("Vui lòng nhập đủ tên xe và biển số!");
      return;
    }

    const id = vehicles.length + 1;
    setVehicles([...vehicles, { id, ...newCar }]);
    setShowModal(false);
    setNewCar({ name: "", plate: "", type: "4 chỗ", status: "Sẵn sàng" });
  };

  const getStatusStyle = (status = "") => {
    switch (status) {
      case "Sẵn sàng":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Đang sử dụng":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "Bảo trì":
        return "bg-rose-100 text-rose-700 border-rose-200";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800">
            Quản lý Đội xe
          </h2>
          <p className="text-slate-500 text-sm">
            Theo dõi và điều phối xe công vụ văn phòng
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2.5 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
        >
          <span>+</span> Đăng ký xe mới
        </button>
      </div>

      {/* Grid danh sách xe */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((car) => (
          <div
            key={car.id}
            className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 ${car.status === "Sẵn sàng" ? "bg-emerald-500" : "bg-slate-300"}`}
            ></div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-slate-700 text-lg">{car.name}</h3>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {car.type}
                </span>
              </div>
              <span
                className={`text-[11px] font-bold px-2 py-1 rounded-full border ${getStatusStyle(car.status)}`}
              >
                {car.status}
              </span>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 flex justify-between items-center">
              <span className="text-sm text-slate-500 italic">Biển số:</span>
              <span className="font-mono font-bold text-slate-700">
                {car.plate}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL ĐĂNG KÝ XE MỚI */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
              Đăng ký xe công vụ
            </h3>

            {/* Xử lý preventDefault trực tiếp ở đây để tránh lỗi tham số e */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleAddVehicle();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Tên xe
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700"
                  placeholder="VD: VinFast VF8"
                  value={newCar.name}
                  onChange={(e) =>
                    setNewCar({ ...newCar, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Biển số
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-700 font-mono"
                  placeholder="VD: 30K-123.45"
                  value={newCar.plate}
                  onChange={(e) =>
                    setNewCar({ ...newCar, plate: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Loại xe
                  </label>
                  <select
                    className="w-full border border-slate-300 rounded-lg p-2 text-slate-700"
                    value={newCar.type}
                    onChange={(e) =>
                      setNewCar({ ...newCar, type: e.target.value })
                    }
                  >
                    <option>4 chỗ</option>
                    <option>7 chỗ</option>
                    <option>16 chỗ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Trạng thái
                  </label>
                  <select
                    className="w-full border border-slate-300 rounded-lg p-2 text-slate-700"
                    value={newCar.status}
                    onChange={(e) =>
                      setNewCar({ ...newCar, status: e.target.value })
                    }
                  >
                    <option>Sẵn sàng</option>
                    <option>Đang sử dụng</option>
                    <option>Bảo trì</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-bold hover:bg-slate-200"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 shadow-md transition-all"
                >
                  Lưu thông tin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
