"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { FileSearchOutlined, UserOutlined, CalendarOutlined, HistoryOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";
import { Table } from 'antd';
import { useRouter } from 'next/navigation';

// Mock review data
const mockReviews = [
  {
    id: "REV001",
    historyId: "HIST001",
    by: "Manager",
    date: "2024-01-16",
    status: "Approved",
    comments: "Reviewed and approved for payment."
  },
  {
    id: "REV002",
    historyId: "HIST002",
    by: "Finance Admin",
    date: "2024-01-17",
    status: "Pending",
    comments: "Pending further documentation."
  }
];

const statusColors: { [key: string]: string } = {
  Approved: "green",
  Pending: "orange",
  Rejected: "red"
};

// Mock notes for this review
const mockNotes = [
  { id: 'NOTE001', by: 'Manager', date: '2024-01-16 14:30:00', content: 'Approved based on policy guidelines.' },
  { id: 'NOTE002', by: 'Finance Admin', date: '2024-01-17 09:15:00', content: 'Documentation verified and complete.' },
];
const noteColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'By', dataIndex: 'by', key: 'by' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Content', dataIndex: 'content', key: 'content', ellipsis: true },
];

export default function AdjustmentReviewDetailPage() {
  const params = useParams();
  const router = useRouter();
  const reviewId = Array.isArray(params.reviewId) ? params.reviewId[0] : params.reviewId;
  const invoiceId = params.invoiceId;
  const adjustmentId = params.adjustmentId;
  const historyId = params.historyId;

  const review = mockReviews.find(r => r.id === reviewId);

  if (!review) {
    return <div className="text-red-600 p-8">Review not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8 space-y-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileSearchOutlined /> Review Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileSearchOutlined /> Review ID</span>}>
            {review.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><HistoryOutlined /> History ID</span>}>
            {review.historyId}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> By</span>}>
            {review.by}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Date</span>}>
            {review.date}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[review.status] || "default"}>{review.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Comments">
            {review.comments}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title="Notes">
        <Table
          dataSource={mockNotes}
          columns={noteColumns}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/billing/${invoiceId}/adjustments/${adjustmentId}/history/${historyId}/review/${reviewId}/notes/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 