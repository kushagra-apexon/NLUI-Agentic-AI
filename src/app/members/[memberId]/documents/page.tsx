"use client";
import { Card, Table, Tag } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock data for documents
const mockDocuments = [
  {
    id: "DOC001",
    type: "Medical Records",
    status: "Uploaded",
    uploadDate: "2024-01-15",
    size: "2.5 MB"
  },
  {
    id: "DOC002",
    type: "Insurance Card",
    status: "Verified",
    uploadDate: "2024-01-10",
    size: "1.2 MB"
  },
  {
    id: "DOC003",
    type: "Prescription",
    status: "Pending",
    uploadDate: "2024-01-20",
    size: "0.8 MB"
  }
];

const typeColors: { [key: string]: string } = {
  "Medical Records": "blue",
  "Insurance Card": "green",
  "Prescription": "purple",
};

export default function MemberDocumentsPage() {
  const columns = [
    {
      title: 'Document ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => (
        <Tag color={typeColors[type] || "default"}>{type}</Tag>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Upload Date',
      dataIndex: 'uploadDate',
      key: 'uploadDate',
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
    },
  ];

  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Member Documents</span>}
        className="shadow-lg rounded-lg"
      >
        <Table
          dataSource={mockDocuments}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
} 