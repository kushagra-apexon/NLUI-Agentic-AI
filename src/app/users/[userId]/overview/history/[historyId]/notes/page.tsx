"use client";
import { useParams, useRouter } from 'next/navigation';
import { Table, Tag, Card } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const mockNotes = [
  {
    id: "NOTE001",
    content: "User accessed claims module for the first time",
    by: "System Admin",
    date: "2024-01-25 10:15:00",
    type: "Info"
  },
  {
    id: "NOTE002",
    content: "User updated contact information and preferences",
    by: "User Admin",
    date: "2024-01-26 14:45:00",
    type: "Info"
  },
  {
    id: "NOTE003",
    content: "Password reset requested and completed",
    by: "System Admin",
    date: "2024-01-27 09:30:00",
    type: "Warning"
  }
];

const typeColors = {
  Info: "blue",
  Warning: "orange",
  Error: "red"
};

export default function UserOverviewHistoryNotesListPage() {
  const params = useParams();
  const router = useRouter();
  const { userId, historyId } = params;

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Content', dataIndex: 'content', key: 'content', ellipsis: true },
    { title: 'By', dataIndex: 'by', key: 'by' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Type', dataIndex: 'type', key: 'type', render: (type: string) => <Tag color={typeColors[type as keyof typeof typeColors   ] || 'default'}>{type}</Tag> },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <Card title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> History Notes</span>}>
        <Table
          columns={columns}
          dataSource={mockNotes}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/users/${userId}/overview/history/${historyId}/notes/${record.id}`),
            style: { cursor: 'pointer' }
          })}
        />
      </Card>
    </div>
  );
} 