"use client";
import { useParams, useRouter } from 'next/navigation';
import { Table, Tag, Card } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const mockReviews = [
  {
    id: "REV001",
    historyId: "HIST001",
    by: "Manager",
    date: "2024-01-16",
    status: "Approved"
  },
  {
    id: "REV002",
    historyId: "HIST002",
    by: "Finance Admin",
    date: "2024-01-17",
    status: "Pending"
  }
];

const statusColors = {
  Approved: "green",
  Pending: "orange",
  Rejected: "red"
};

export default function AdjustmentReviewListPage() {
  const params = useParams();
  const router = useRouter();
  const { invoiceId, adjustmentId, historyId } = params;

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'By', dataIndex: 'by', key: 'by' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Tag color={statusColors[status as keyof typeof statusColors] || 'default'}>{status}</Tag> },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <Card title={<span className="text-lg font-bold flex items-center gap-2"><FileSearchOutlined /> Reviews</span>}>
        <Table
          columns={columns}
          dataSource={mockReviews}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/billing/${invoiceId}/adjustments/${adjustmentId}/history/${historyId}/review/${record.id}`),
            style: { cursor: 'pointer' }
          })}
        />
      </Card>
    </div>
  );
} 