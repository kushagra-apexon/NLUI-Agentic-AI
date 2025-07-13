"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { FileTextOutlined, UserOutlined, CalendarOutlined, PaperClipOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock evidence data
const mockEvidence = [
  {
    id: "EVD001",
    reviewId: "REV001",
    appealId: "APL001",
    authId: "AUTH001",
    type: "Medical Records",
    submittedBy: "Dr. Johnson",
    submittedDate: "2024-01-19",
    status: "Accepted",
    description: "Additional medical records supporting medical necessity"
  },
  {
    id: "EVD002",
    reviewId: "REV002",
    appealId: "APL002",
    authId: "AUTH002",
    type: "Billing Records",
    submittedBy: "Finance Team",
    submittedDate: "2024-01-17",
    status: "Under Review",
    description: "Corrected billing documentation"
  }
];

const statusColors: { [key: string]: string } = {
  Accepted: "green",
  "Under Review": "orange",
  Rejected: "red"
};

const typeColors: { [key: string]: string } = {
  "Medical Records": "blue",
  "Billing Records": "green",
  "Legal Documents": "purple"
};

export default function AuthorizationAppealEvidenceDetailPage() {
  const params = useParams();
  const evidenceId = Array.isArray(params.evidenceId) ? params.evidenceId[0] : params.evidenceId;

  const evidence = mockEvidence.find(e => e.id === evidenceId);

  if (!evidence) {
    return <div className="text-red-600 p-8">Evidence not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><PaperClipOutlined /> Evidence Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> Evidence ID</span>}>
            {evidence.id}
          </Descriptions.Item>
          <Descriptions.Item label="Review ID">
            {evidence.reviewId}
          </Descriptions.Item>
          <Descriptions.Item label="Appeal ID">
            {evidence.appealId}
          </Descriptions.Item>
          <Descriptions.Item label="Authorization ID">
            {evidence.authId}
          </Descriptions.Item>
          <Descriptions.Item label="Type">
            <Tag color={typeColors[evidence.type] || "default"}>{evidence.type}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[evidence.status] || "default"}>{evidence.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {evidence.description}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Submitted By</span>}>
            {evidence.submittedBy}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Submitted Date</span>}>
            {evidence.submittedDate}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 