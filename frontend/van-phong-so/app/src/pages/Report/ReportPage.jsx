import { useEffect, useState } from "react";
import { getReports } from "../../services/reportService";

const ReportPage = () => {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getReports();
    setReports(res.data);
  };

  return (
    <div>
      <h2>Báo cáo tổng hợp</h2>

      <ul>
        {reports.map((r) => (
          <li key={r.id}>
            {r.title} - {r.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportPage;