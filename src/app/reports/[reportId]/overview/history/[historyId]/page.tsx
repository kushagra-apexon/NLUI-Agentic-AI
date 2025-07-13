"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { HistoryOutlined, UserOutlined, CalendarOutlined, FileTextOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock history data
const mockHistories = [
  {
    id: "HIST001",
    reportId: "RPT001",
    action: "Generated",
    by: "Report Admin",
    date: "2024-01-25 10:00:00",
    status: "Completed",
    description: "Monthly claims report generated successfully"
  },
  {
    id: "HIST002",
    reportId: "RPT002",
    action: "Downloaded",
    by: "Analytics Team",
    date: "2024-01-26 14:30:00",
    status: "Completed",
    description: "Provider performance report downloaded"
  }
];

const statusColors: { [key: string]: string } = {
  Completed: "green",
  Pending: "orange",
  Failed: "red"
};

export default function ReportOverviewHistoryDetailPage() {
  const params = useParams();
  const historyId = Array.isArray(params.historyId) ? params.historyId[0] : params.historyId;

  const history = mockHistories.find(h => h.id === historyId);

  if (!history) {
    return <div className="text-red-600 p-8">History not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><HistoryOutlined /> Report History Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> History ID</span>}>
            {history.id}
          </Descriptions.Item>
          <Descriptions.Item label="Report ID">
            {history.reportId}
          </Descriptions.Item>
          <Descriptions.Item label="Action">
            {history.action}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[history.status] || "default"}>{history.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {history.description}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> By</span>}>
            {history.by}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Date</span>}>
            {history.date}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 