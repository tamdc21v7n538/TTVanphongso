// ========================================
// FILE: src/routes/AppRoutes.jsx
// Quản lý toàn bộ điều hướng hệ thống
// ========================================

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "../components/PrivateRoute";
import Layout from "../components/Layout";

import LoginPage from "../pages/Auth/LoginPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import AssetPage from "../pages/Assets/AssetPage";
import CleaningPage from "../pages/Cleaning/CleaningPage";
import SecurityPage from "../pages/Security/SecurityPage";
import MeetingPage from "../pages/Meeting/MeetingPage";
import ReportPage from "../pages/Report/ReportPage";
import UserPage from "../pages/Users/UserPage";
import VehiclePage from "../pages/Vehicle/VehiclePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Route công khai */}
        <Route path="/login" element={<LoginPage />} />

        {/* Redirect mặc định */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Các route cần đăng nhập */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <DashboardPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/assets"
          element={
            <ProtectedRoute>
              <Layout>
                <AssetPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/cleaning"
          element={
            <ProtectedRoute>
              <Layout>
                <CleaningPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/security"
          element={
            <ProtectedRoute>
              <Layout>
                <SecurityPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/meeting"
          element={
            <ProtectedRoute>
              <Layout>
                <MeetingPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/report"
          element={
            <ProtectedRoute>
              <Layout>
                <ReportPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Layout>
                <UserPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/vehicle"
          element={
            <ProtectedRoute>
              <Layout>
                <VehiclePage />
              </Layout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;