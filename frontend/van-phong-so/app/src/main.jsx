// Import thư viện React
import React from "react";

// Import ReactDOM để render ứng dụng ra HTML
import ReactDOM from "react-dom/client";

// Import App (component gốc của hệ thống)
import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  // StrictMode giúp kiểm tra lỗi trong quá trình phát triển
  <React.StrictMode>

    {/* App toàn bộ hệ thống */}
    <App />

  </React.StrictMode>

);