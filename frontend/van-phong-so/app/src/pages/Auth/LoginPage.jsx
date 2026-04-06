// ========================================
// FILE: src/pages/Auth/LoginPage.jsx
// MODULE: Authentication
// ========================================

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ==============================
  // Xử lý đăng nhập
  // ==============================
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    try {
      const res = await login({ email, password });

      // Lưu token vào localStorage
      localStorage.setItem("token", res.data.token);

      alert("Đăng nhập thành công!");

      // Điều hướng sang dashboard
      navigate("/dashboard");
    } catch (error) {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Đăng nhập hệ thống</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Mật khẩu:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginPage;