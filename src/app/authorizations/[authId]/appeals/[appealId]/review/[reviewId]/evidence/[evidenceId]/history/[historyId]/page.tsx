"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { HistoryOutlined, UserOutlined, CalendarOutlined, FileTextOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock history data
const mockHistories = [
  {
    id: "HIST001",
    evidenceId: "EVD001",
    reviewId: "REV001",
    appealId: "APL001",
    authId: "AUTH001",
    action: "Viewed",
    by: "Appeal Specialist",
    date: "2024-01-20 10:30:00",
    status: "Completed"
  },
  {
    id: "HIST002",
    evidenceId: "EVD002",
    reviewId: "REV002",
    appealId: "APL002",
    authId: "AUTH002",
    action: "Downloaded",
    by: "Senior Reviewer",
    date: "2024-01-21 14:15:00",
    status: "Completed"
  }
];

const statusColors: { [key: string]: string } = {
  Completed: "green",
  Pending: "orange",
  Failed: "red"
};

export default function AuthorizationAppealEvidenceHistoryDetailPage() {
  const params = useParams();
  const historyId = Array.isArray(params.historyId) ? params.historyId[0] : params.historyId;

  const history = mockHistories.find(h => h.id === historyId);

  if (!history) {
    return <div className="text-red-600 p-8">History not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><HistoryOutlined /> Evidence History Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> History ID</span>}>
            {history.id}
          </Descriptions.Item>
          <Descriptions.Item label="Evidence ID">
            {history.evidenceId}
          </Descriptions.Item>
          <Descriptions.Item label="Review ID">
            {history.reviewId}
          </Descriptions.Item>
          <Descriptions.Item label="Appeal ID">
            {history.appealId}
          </Descriptions.Item>
          <Descriptions.Item label="Authorization ID">
            {history.authId}
          </Descriptions.Item>
          <Descriptions.Item label="Action">
            {history.action}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[history.status] || "default"}>{history.status}</Tag>
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