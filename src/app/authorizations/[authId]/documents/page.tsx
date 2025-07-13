"use client";
import "antd/dist/reset.css";
import { Card, Button, Table, Tag, Typography } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

const { Title } = Typography;

// Mock data for documents
const mockDocuments = [
  {
    id: "DOC001",
    name: "Authorization Letter",
    type: "Letter",
    status: "Active",
    date: "2024-01-15"
  },
  {
    id: "DOC002", 
    name: "Medical Records",
    type: "Records",
    status: "Archived",
    date: "2024-01-14"
  },
  {
    id: "DOC003",
    name: "Approval Form",
    type: "Form",
    status: "Active",
    date: "2024-01-13"
  }
];

const columns = [
  {
    title: 'Document Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'Active' ? 'green' : 'gray'}>{status}</Tag>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: () => (
      <Button size="small">View</Button>
    ),
  },
];

export default function AuthorizationDocumentsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <FileTextOutlined /> Authorization Documents
          </Title>
          <Button type="primary">Add Document</Button>
        </div>
        <Table
          dataSource={mockDocuments}
          columns={columns}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} documents`
          }}
        />
      </Card>
    </div>
  );
} 