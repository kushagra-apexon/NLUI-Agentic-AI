"use client";
import { Card, Table, Tag, Button, Input, Form } from 'antd';
import { FileTextOutlined, UserOutlined, CalendarOutlined, PlusOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock data for notes
const mockNotes = [
  {
    id: "NOTE001",
    author: "Dr. Sarah Johnson",
    content: "Claim approved for MRI scan",
    date: "2024-01-15 10:30:00",
    type: "Approval"
  },
  {
    id: "NOTE002",
    author: "Nurse Mike Chen",
    content: "Additional documentation requested",
    date: "2024-01-14 14:20:00",
    type: "Request"
  },
  {
    id: "NOTE003",
    author: "Admin User",
    content: "Claim denied - insufficient medical necessity",
    date: "2024-01-13 09:15:00",
    type: "Denial"
  }
];

const typeColors: { [key: string]: string } = {
  Approval: "green",
  Request: "blue",
  Denial: "red",
  Note: "default"
};

export default function ClaimNotesPage() {
  const columns = [
    {
      title: 'Note ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
      render: (author: string) => (
        <span className="flex items-center gap-2">
          <UserOutlined />
          {author}
        </span>
      ),
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
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => (
        <span className="flex items-center gap-2">
          <CalendarOutlined />
          {date}
        </span>
      ),
    },
  ];

  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Claim Notes</span>}
        className="shadow-lg rounded-lg"
      >
        <div className="mb-4">
          <Form layout="inline">
            <Form.Item>
              <Input.TextArea 
                placeholder="Add a new note..." 
                rows={3}
                style={{ width: 400 }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" icon={<PlusOutlined />}>
                Add Note
              </Button>
            </Form.Item>
          </Form>
        </div>
        
        <Table
          dataSource={mockNotes}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
} 