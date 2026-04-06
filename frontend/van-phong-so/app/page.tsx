"use client";

import React from "react";
import Image from "next/image";

export default function Dashboard() {
  const summaryCards = [
    {
      title: "Xe sẵn sàng",
      count: 8,
      total: 12,
      color: "text-blue-600",
      bg: "bg-blue-50/80",
      icon: "🚗",
    },
    {
      title: "Phòng họp trống",
      count: 3,
      total: 5,
      color: "text-emerald-600",
      bg: "bg-emerald-50/80",
      icon: "🤝",
    },
    {
      title: "Sự cố an ninh",
      count: 0,
      total: "Tuần này",
      color: "text-rose-600",
      bg: "bg-rose-50/80",
      icon: "🛡️",
    },
    {
      title: "Nhân viên trực",
      count: 12,
      total: 15,
      color: "text-amber-600",
      bg: "bg-amber-50/80",
      icon: "👤",
    },
  ];

  const recentActivities = [
    {
      time: "09:15 AM",
      task: "Xe 29A-123.45 vừa xuất bến",
      status: "Hoàn tất",
    },
    {
      time: "08:45 AM",
      task: "Phòng Alpha đã được đặt bởi P. Nhân sự",
      status: "Đang chờ",
    },
    {
      time: "08:00 AM",
      task: "Kiểm tra hệ thống báo cháy định kỳ",
      status: "Hoàn tất",
    },
  ];

  return (
    <div className="relative min-h-screen w-full p-4 md:p-8">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt="background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <div className="flex justify-between items-end bg-white/40 p-4 rounded-xl backdrop-blur-md border border-white/20">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Chào buổi sáng, Quản trị viên!
            </h1>
            <p className="text-slate-700 mt-1 font-medium">
              Hôm nay là Thứ Hai, ngày 6 tháng 4 năm 2026.
            </p>
          </div>
          <button className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition-all shadow-lg">
            Xuất báo cáo ngày
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryCards.map((card, i) => (
            <div
              key={i}
              className={`${card.bg} p-6 rounded-2xl border border-white/50 backdrop-blur-md hover:border-slate-300 transition-all shadow-md`}
            >
              <div className="flex justify-between items-start">
                <span className="text-2xl">{card.icon}</span>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${card.color}`}
                >
                  Live
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-slate-700 text-sm font-bold">
                  {card.title}
                </h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className={`text-3xl font-black ${card.color}`}>
                    {card.count}
                  </span>
                  <span className="text-slate-500 text-sm font-bold">
                    / {card.total}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Khu vực nội dung chính */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-800">
                Hoạt động gần đây
              </h2>
              <button className="text-blue-700 text-sm font-bold hover:underline">
                Xem tất cả
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((act, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-white/20 hover:bg-white/80 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {act.time}
                    </span>
                    <p className="text-sm font-bold text-slate-800">
                      {act.task}
                    </p>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase ${act.status === "Hoàn tất" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}
                  >
                    {act.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 text-white shadow-2xl border border-slate-700">
            <h2 className="text-lg font-bold mb-6">Truy cập nhanh</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Đặt xe công vụ", path: "/vehicle", icon: "🔑" },
                { name: "Lịch phòng họp", path: "/meeting-room", icon: "📅" },
                { name: "Báo cáo an ninh", path: "/security", icon: "📑" },
                { name: "Danh bạ nội bộ", path: "#", icon: "📞" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.path}
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/10"
                >
                  <span>{link.icon}</span>
                  <span className="text-sm font-bold tracking-wide">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-lg border border-white/10">
              <p className="text-xs font-bold opacity-90 uppercase tracking-widest">
                Hỗ trợ kỹ thuật
              </p>
              <p className="text-sm mt-1 font-medium">
                Gặp sự cố? Liên hệ ngay Hotline: 1900 1234
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
