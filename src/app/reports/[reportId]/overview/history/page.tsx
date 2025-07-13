"use client";
import { useParams, useRouter } from 'next/navigation';
import { Table, Tag, Card } from 'antd';
import { HistoryOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const mockHistories = [
  {
    id: "HIST001",
    action: "Generated",
    by: "Report Admin",
    date: "2024-01-25 10:00:00",
    status: "Completed"
  },
  {
    id: "HIST002",
    action: "Downloaded",
    by: "Analytics Team",
    date: "2024-01-26 14:30:00",
    status: "Completed"
  },
  {
    id: "HIST003",
    action: "Modified",
    by: "Report Admin",
    date: "2024-01-27 09:15:00",
    status: "Completed"
  }
];

const statusColors = {
  Completed: "green",
  Pending: "orange",
  Failed: "red"
};

export default function ReportOverviewHistoryListPage() {
  const params = useParams();
  const router = useRouter();
  const { reportId } = params;

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Action', dataIndex: 'action', key: 'action' },
    { title: 'By', dataIndex: 'by', key: 'by' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Tag color={statusColors[status as keyof typeof statusColors] || 'default'}>{status}</Tag> },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <Card title={<span className="text-lg font-bold flex items-center gap-2"><HistoryOutlined /> Report History</span>}>
        <Table
          columns={columns}
          dataSource={mockHistories}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/reports/${reportId}/overview/history/${record.id}`),
            style: { cursor: 'pointer' }
          })}
        />
      </Card>
    </div>
  );
} 