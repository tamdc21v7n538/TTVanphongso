// Bảo vệ route (phải đăng nhập)


import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Nếu chưa đăng nhập thì chuyển về login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;