"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      username: user,
      password: pass,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      {/* Khung đăng nhập */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Văn Phòng Số
          </h2>
          <p className="text-gray-500 mt-2">Vui lòng đăng nhập để tiếp tục</p>
        </div>

        <div className="space-y-5">
          {/* Input Tên đăng nhập */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên đăng nhập
            </label>
            <input
              type="text"
              placeholder="admin..."
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-black"
            />
          </div>

          {/* Input Mật khẩu */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPass(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-black"
            />
          </div>

          {/* Nút đăng nhập */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transform transition active:scale-95 hover:shadow-blue-500/50"
          >
            Vào hệ thống
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Quên mật khẩu? Liên hệ quản trị viên
        </div>
      </form>
    </div>
  );
}
