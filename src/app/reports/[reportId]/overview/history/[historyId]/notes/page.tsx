"use client";
import { useParams, useRouter } from 'next/navigation';
import { Table, Tag, Card } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const mockNotes = [
  {
    id: "NOTE001",
    content: "Report generated successfully with all data included",
    by: "Report Admin",
    date: "2024-01-25 10:15:00",
    type: "Info"
  },
  {
    id: "NOTE002",
    content: "Data validation completed, report ready for distribution",
    by: "Analytics Team",
    date: "2024-01-26 14:45:00",
    type: "Info"
  },
  {
    id: "NOTE003",
    content: "Minor formatting issues identified and resolved",
    by: "Report Admin",
    date: "2024-01-27 09:30:00",
    type: "Warning"
  }
];

const typeColors = {
  Info: "blue",
  Warning: "orange",
  Error: "red"
};

export default function ReportOverviewHistoryNotesListPage() {
  const params = useParams();
  const router = useRouter();
  const { reportId, historyId } = params;

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Content', dataIndex: 'content', key: 'content', ellipsis: true },
    { title: 'By', dataIndex: 'by', key: 'by' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Type', dataIndex: 'type', key: 'type', render: (type: string) => <Tag color={typeColors[type as keyof typeof typeColors ] || 'default'}>{type}</Tag> },
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
            onClick: () => router.push(`/reports/${reportId}/overview/history/${historyId}/notes/${record.id}`),
            style: { cursor: 'pointer' }
          })}
        />
      </Card>
    </div>
  );
} 