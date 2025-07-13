"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { HistoryOutlined, UserOutlined, CalendarOutlined, FileTextOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";
import { Table } from 'antd';
import { useRouter } from 'next/navigation';

// Mock adjustment history data
const mockHistories = [
  {
    id: "HIST001",
    action: "Created",
    date: "2024-01-15",
    by: "Finance Admin",
    description: "Adjustment created for invoice INV001.",
    status: "Completed"
  },
  {
    id: "HIST002",
    action: "Reviewed",
    date: "2024-01-16",
    by: "Manager",
    description: "Adjustment reviewed and approved.",
    status: "Completed"
  },
  {
    id: "HIST003",
    action: "Updated",
    date: "2024-01-17",
    by: "Finance Admin",
    description: "Adjustment amount updated.",
    status: "Pending"
  }
];

const statusColors: { [key: string]: string } = {
  Completed: "green",
  Pending: "orange",
  Rejected: "red"
};

// Mock reviews for this history
const mockReviews = [
  { id: 'REV001', by: 'Manager', date: '2024-01-16', status: 'Approved', comments: 'Reviewed and approved for payment.' },
  { id: 'REV002', by: 'Finance Admin', date: '2024-01-17', status: 'Pending', comments: 'Pending further documentation.' },
];
const reviewColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'By', dataIndex: 'by', key: 'by' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

export default function AdjustmentHistoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const historyId = Array.isArray(params.historyId) ? params.historyId[0] : params.historyId;
  const invoiceId = params.invoiceId;
  const adjustmentId = params.adjustmentId;

  const history = mockHistories.find(h => h.id === historyId);

  if (!history) {
    return <div className="text-red-600 p-8">Adjustment history not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8 space-y-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><HistoryOutlined /> Adjustment History Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> History ID</span>}>
            {history.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> By</span>}>
            {history.by}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Date</span>}>
            {history.date}
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
        </Descriptions>
      </Card>
      <Card title="Reviews">
        <Table
          dataSource={mockReviews}
          columns={reviewColumns}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/billing/${invoiceId}/adjustments/${adjustmentId}/history/${historyId}/review/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 