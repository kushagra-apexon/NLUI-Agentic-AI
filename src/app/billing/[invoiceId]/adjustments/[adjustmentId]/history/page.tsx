"use client";
import { useParams, useRouter } from 'next/navigation';
import { Table, Tag, Card } from 'antd';
import { HistoryOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const mockHistories = [
  {
    id: "HIST001",
    action: "Created",
    date: "2024-01-15",
    by: "Finance Admin",
    status: "Completed"
  },
  {
    id: "HIST002",
    action: "Reviewed",
    date: "2024-01-16",
    by: "Manager",
    status: "Completed"
  },
  {
    id: "HIST003",
    action: "Updated",
    date: "2024-01-17",
    by: "Finance Admin",
    status: "Pending"
  }
];

const statusColors = {
  Completed: "green",
  Pending: "orange",
  Rejected: "red"
};

export default function AdjustmentHistoryListPage() {
  const params = useParams();
  const router = useRouter();
  const { invoiceId, adjustmentId } = params;

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Action', dataIndex: 'action', key: 'action' },
    { title: 'By', dataIndex: 'by', key: 'by' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Tag color={statusColors[status as keyof typeof statusColors] || 'default'}>{status}</Tag> },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <Card title={<span className="text-lg font-bold flex items-center gap-2"><HistoryOutlined /> Adjustment History</span>}>
        <Table
          columns={columns}
          dataSource={mockHistories}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/billing/${invoiceId}/adjustments/${adjustmentId}/history/${record.id}`),
            style: { cursor: 'pointer' }
          })}
        />
      </Card>
    </div>
  );
} 