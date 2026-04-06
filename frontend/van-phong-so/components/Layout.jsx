// Layout tổng thể hệ thống

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Thanh trên */}
      <Navbar />

      <div style={styles.container}>
        {/* Menu bên trái */}
        <Sidebar />

        {/* Nội dung chính */}
        <div style={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
  },
  content: {
    flex: 1,
    padding: "20px",
  },
};

export default Layout;