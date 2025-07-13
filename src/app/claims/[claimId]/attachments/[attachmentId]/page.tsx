"use client";
import { useParams, useRouter } from 'next/navigation';
import { Card, Tag, Button } from 'antd';
import { PaperClipOutlined, CalendarOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock attachment for demonstration
const attachment = {
  id: 'ATT-001',
  name: 'Lab Report.pdf',
  type: 'PDF',
  uploaded: '2024-01-15',
};
const typeColor = 'blue';
const typeIcon = <PaperClipOutlined />;

export default function AttachmentDetailPage() {
  const { claimId, attachmentId } = useParams();
  const router = useRouter();

  if (!attachment) {
    return <div className="text-red-600 p-8">Attachment not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><PaperClipOutlined /> Attachment Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <div className="space-y-4 mb-4">
          <div><span className="font-semibold">ID:</span> {attachment.id}</div>
          <div><span className="font-semibold">Name:</span> {attachment.name}</div>
          <div><span className="font-semibold">Type:</span> <Tag color={typeColor} icon={typeIcon}>{attachment.type}</Tag></div>
          <div><span className="font-semibold">Uploaded:</span> <CalendarOutlined /> {attachment.uploaded}</div>
        </div>
        <Button
          type="primary"
          icon={<PaperClipOutlined />}
          onClick={() => router.push(`/claims/${claimId}/attachments/${attachmentId}/audit`)}
        >
          Go to Audit Tab
        </Button>
      </Card>
    </div>
  );
} 