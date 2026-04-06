// Menu điều hướng bên trái
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <ul style={styles.menu}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/users">Quản lý người dùng</Link></li>
        <li><Link to="/assets">Quản lý tài sản</Link></li>
        <li><Link to="/vehicles">Quản lý xe</Link></li>
        <li><Link to="/meetings">Quản lý phòng họp</Link></li>
        <li><Link to="/cleaning">Vệ sinh</Link></li>
        <li><Link to="/security">Bảo vệ</Link></li>
        <li><Link to="/reports">Báo cáo</Link></li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  menu: {
    listStyle: "none",
    padding: 0,
  },
};

export default Sidebar;