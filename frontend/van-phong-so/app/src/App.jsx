// Cấu hình Router toàn hệ thống
// Điều hướng giữa các module
// Kiểm tra đăng nhập (bảo vệ route)

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Import các trang
import LoginPage from "./pages/Auth/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import AssetPage from "./pages/Asset/AssetPage";
import CleaningPage from "./pages/Cleaning/CleaningPage";
import SecurityPage from "./pages/Security/SecurityPage";
import ReportPage from "./pages/Report/ReportPage";
import UserPage from "./pages/User/UserPage";
import MeetingPage from "./pages/Meeting/MeetingPage";
import VehiclePage from "./pages/Vehicle/VehiclePage";

// Component kiểm tra đăng nhập
const PrivateRoute = ({ children }) => {

  // Lấy token từ localStorage
  const token = localStorage.getItem("token");

  // Nếu chưa đăng nhập → quay về login
  if (!token) {
    return <Navigate to="/" />;
  }

  // Nếu có token → cho vào hệ thống
  return children;
};

function App() {
  return (
    <Router>
      <Routes>

        {/* Trang đăng nhập */}
        <Route path="/" element={<LoginPage />} />

        {/* Các route cần đăng nhập */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        } />

        <Route path="/assets" element={
          <PrivateRoute>
            <AssetPage />
          </PrivateRoute>
        } />

        <Route path="/cleaning" element={
          <PrivateRoute>
            <CleaningPage />
          </PrivateRoute>
        } />

        <Route path="/security" element={
          <PrivateRoute>
            <SecurityPage />
          </PrivateRoute>
        } />

        <Route path="/report" element={
          <PrivateRoute>
            <ReportPage />
          </PrivateRoute>
        } />

        <Route path="/users" element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        } />

        <Route path="/meetings" element={
          <PrivateRoute>
            <MeetingPage />
          </PrivateRoute>
        } />

        <Route path="/vehicles" element={
          <PrivateRoute>
            <VehiclePage />
          </PrivateRoute>
        } />

      </Routes>
    </Router>
  );
}

export default App;