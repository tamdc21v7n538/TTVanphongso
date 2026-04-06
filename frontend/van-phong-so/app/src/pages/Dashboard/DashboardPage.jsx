// Hiển thị thống kê tổng quan

import { useEffect, useState } from "react";
import { getAssets } from "../../services/assetService";
import { getCleanings } from "../../services/cleaningService";
import { getSecurities } from "../../services/securityService";
import { getMeetings } from "../../services/meetingService";
import { getUsers } from "../../services/userService";
import { getVehicles } from "../../services/vehicleService";

const DashboardPage = () => {

  const [stats, setStats] = useState({
    assets: 0,
    cleanings: 0,
    securities: 0,
    meetings: 0,
    users: 0,
    vehicles: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {

    const assets = await getAssets();
    const cleanings = await getCleanings();
    const securities = await getSecurities();
    const meetings = await getMeetings();
    const users = await getUsers();
    const vehicles = await getVehicles();

    setStats({
      assets: assets.data.length,
      cleanings: cleanings.data.length,
      securities: securities.data.length,
      meetings: meetings.data.length,
      users: users.data.length,
      vehicles: vehicles.data.length
    });
  };

  return (
    <div>
      <h2>Dashboard - Tổng quan hệ thống</h2>

      <p>Tài sản: {stats.assets}</p>
      <p>Công việc tạp vụ: {stats.cleanings}</p>
      <p>Ca trực bảo vệ: {stats.securities}</p>
      <p>Cuộc họp: {stats.meetings}</p>
      <p>Người dùng: {stats.users}</p>
      <p>Phương tiện: {stats.vehicles}</p>
    </div>
  );
};

export default DashboardPage;