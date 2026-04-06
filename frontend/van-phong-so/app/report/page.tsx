"use client";

import React, { useState } from "react";
// @ts-expect-error - Thư viện xlsx không có type định sẵn
import * as XLSX from "xlsx/xlsx.mjs";

interface Booking {
  id: number;
  room: string;
  person: string;
  time: string;
  date: string;
  purpose: string;
}

export default function ReportPage() {
  const [reportData, setReportData] = useState<Booking[]>([
    {
      id: 1,
      room: "Phòng Alpha",
      person: "Nguyễn Văn A",
      time: "09:00 AM",
      date: "2026-04-06",
      purpose: "Họp Team",
    },
    {
      id: 2,
      room: "Phòng Beta",
      person: "Trần Thị B",
      time: "10:30 AM",
      date: "2026-04-06",
      purpose: "Phỏng vấn",
    },
  ]);

  const exportToExcel = () => {
    const dataToExport = reportData.map((item, index) => ({
      STT: index + 1,
      "Phòng Họp": item.room,
      "Người Đặt": item.person,
      "Thời Gian": item.time,
      Ngày: item.date,
      "Mục Đích": item.purpose,
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Báo cáo");

    XLSX.writeFile(workbook, `Bao_cao_${new Date().toLocaleDateString()}.xlsx`);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-3xl my-10 border border-slate-200">
      <div className="flex justify-between items-center mb-8 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Báo Cáo Hoạt Động Ngày
          </h1>
          <p className="text-slate-500 font-medium italic">
            Ngày lập: {new Date().toLocaleDateString("vi-VN")}
          </p>
        </div>
        <div className="flex gap-3 no-print">
          <button
            onClick={exportToExcel}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg active:scale-95"
          >
            📊 Xuất Excel
          </button>
          <button
            onClick={handlePrint}
            className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg active:scale-95"
          >
            🖨️ In Báo Cáo
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b-2 border-slate-200 text-slate-600 uppercase text-[11px] tracking-wider">
              <th className="p-4 text-left">STT</th>
              <th className="p-4 text-left">Phòng họp</th>
              <th className="p-4 text-left">Người đặt</th>
              <th className="p-4 text-left">Mục đích</th>
              <th className="p-4 text-left">Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors group"
              >
                <td className="p-4 text-slate-400 font-medium">{index + 1}</td>
                <td className="p-4 text-blue-700 font-bold group-hover:underline">
                  {item.room}
                </td>
                <td className="p-4 text-slate-800 font-semibold">
                  {item.person}
                </td>
                <td className="p-4 text-slate-600 italic text-sm">
                  {item.purpose}
                </td>
                <td className="p-4 text-slate-500 font-mono text-xs">
                  {item.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-16 hidden print:flex justify-between px-10 border-t pt-8">
        <div className="text-center">
          <p className="font-bold text-slate-800">Người lập biểu</p>
          <div className="h-20"></div>
          <p className="text-sm font-medium text-slate-600 underline decoration-dotted underline-offset-4">
            Xác nhận của nhân viên
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold text-slate-800">Lãnh đạo phê duyệt</p>
          <div className="h-20"></div>
          <p className="text-sm font-medium text-slate-600 underline decoration-dotted underline-offset-4">
            Ký tên & đóng dấu
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          nav {
            display: none !important;
          }
          body {
            background: white !important;
            margin: 0;
            padding: 0;
          }
          .shadow-xl {
            box-shadow: none !important;
            border: none !important;
          }
          .my-10 {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          main {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
