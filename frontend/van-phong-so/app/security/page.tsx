"use client";

import React, { useState } from "react";

export default function SecurityPage() {
  const [logs] = useState([
    {
      id: 1,
      time: "14:20:05",
      area: "Cổng chính",
      event: "Phát hiện chuyển động",
      status: "Cảnh báo",
      level: "high",
    },
    {
      id: 2,
      time: "13:45:12",
      area: "Tầng 2 - Phòng máy",
      event: "Quẹt thẻ ra vào",
      status: "Bình thường",
      level: "low",
    },
    {
      id: 3,
      time: "12:00:00",
      area: "Toàn tòa nhà",
      event: "Chốt cửa tự động",
      status: "Hệ thống",
      level: "info",
    },
  ]);

  const getLevelStyle = (level = "") => {
    switch (level) {
      case "high":
        return "bg-rose-500/20 text-rose-700 border-rose-200";
      case "info":
        return "bg-blue-500/20 text-blue-700 border-blue-200";
      default:
        return "bg-slate-500/20 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/40 p-6 rounded-2xl backdrop-blur-md border border-white/20 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
            <span className="text-3xl">🛡️</span> Trung Tâm Điều Hành An Ninh
          </h2>
          <p className="text-slate-600 font-medium">
            Giám sát thời gian thực các khu vực văn phòng
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-700 rounded-lg border border-emerald-200/50 font-bold text-sm">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>{" "}
          Hệ thống Online
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "Camera Hoạt Động",
            value: "24 / 24",
            color: "bg-slate-900/80 text-white",
          },
          {
            label: "Cảnh Báo Trong Ngày",
            value: "02",
            color: "bg-white/70 text-rose-600",
          },
          {
            label: "Nhân Sự Trực Ca",
            value: "04",
            color: "bg-white/70 text-blue-600",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className={`${stat.color} backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg`}
          >
            <p className="opacity-70 text-xs font-bold uppercase tracking-widest">
              {stat.label}
            </p>
            <p className="text-4xl font-black mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Events Table */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-xl overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">
            Nhật ký sự kiện chi tiết
          </h3>
          <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
            Tải xuống báo cáo
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-800/5 text-slate-500 uppercase text-[10px] font-black tracking-widest">
                <th className="p-4 border-b">Thời gian</th>
                <th className="p-4 border-b">Khu vực</th>
                <th className="p-4 border-b">Sự kiện</th>
                <th className="p-4 border-b">Trạng thái</th>
                <th className="p-4 border-b text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {logs.map((log) => (
                <tr
                  key={log.id}
                  className="hover:bg-white/40 transition-colors group"
                >
                  <td className="p-4 text-sm font-mono text-slate-500">
                    {log.time}
                  </td>
                  <td className="p-4 text-sm font-bold text-slate-700">
                    {log.area}
                  </td>
                  <td className="p-4 text-sm text-slate-600 font-medium">
                    {log.event}
                  </td>
                  <td className="p-4">
                    <span
                      className={`text-[10px] px-2 py-1 rounded-full font-black border ${getLevelStyle(log.level)}`}
                    >
                      {log.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button className="text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-all underline underline-offset-4 decoration-transparent group-hover:decoration-blue-600">
                      Xem Camera
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Emergency Footer */}
      <div className="p-4 bg-rose-600/90 backdrop-blur-md text-white rounded-2xl shadow-xl flex items-center justify-between border border-rose-500">
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-bounce">🚨</span>
          <span className="font-black tracking-tight text-sm md:text-base">
            ĐƯỜNG DÂY NÓNG KHẨN CẤP: 0900.SECURITY
          </span>
        </div>
        <button className="bg-white text-rose-600 px-6 py-2 rounded-xl font-black text-sm hover:bg-rose-50 transition-colors shadow-md">
          GỌI NGAY
        </button>
      </div>
    </div>
  );
}
