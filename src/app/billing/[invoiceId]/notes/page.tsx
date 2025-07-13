"use client";
import { useState } from 'react';
import { Card, Button, Table, Modal, Descriptions, Tag, Space, Avatar, Typography } from 'antd';
import { FileTextOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

// Mock notes data
const mockNotes = [
  {
    id: "1",
    title: "Invoice Review Required",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    priority: "High",
    status: "Active",
    content: "Invoice requires additional documentation for approval."
  },
  {
    id: "2",
    title: "Documentation Complete",
    author: "Nurse Mike Wilson",
    date: "2024-01-14",
    priority: "Medium",
    status: "Active",
    content: "All required documents have been submitted and verified."
  },
  {
    id: "3",
    title: "Follow-up Required",
    author: "Dr. Emily Chen",
    date: "2024-01-13",
    priority: "Low",
    status: "Archived",
    content: "Invoice follow-up scheduled for next week."
  }
];

const statusColors: { [key: string]: string } = {
  Active: "green",
  Archived: "gray"
};

const priorityColors: { [key: string]: string } = {
  High: "red",
  Medium: "orange",
  Low: "green"
};

export default function BillingNotesTab() {
  const [selectedNote, setSelectedNote] = useState<typeof mockNotes[0] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showNoteDetail = (note: typeof mockNotes[0]) => {
    setSelectedNote(note);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => (
        <Tag color={priorityColors[priority] || "default"}>{priority}</Tag>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={statusColors[status] || "default"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <FileTextOutlined /> Billing Notes
          </Title>
          <Button type="primary" icon={<PlusOutlined />}>Add Note</Button>
        </div>
        <Table
          dataSource={mockNotes}
          columns={columns}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} notes`
          }}
          className="cursor-pointer"
          onRow={(record) => ({
            onClick: () => showNoteDetail(record),
            style: { cursor: "pointer" }
          })}
        />
      </Card>

      <Modal
        title={<span><FileTextOutlined /> Note Details - {selectedNote?.title}</span>}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[<Button key="close" onClick={() => setIsModalVisible(false)}>Close</Button>]}
        width={600}
      >
        {selectedNote && (
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Title">
              <Text strong>{selectedNote.title}</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Author">
              <Space>
                <Avatar icon={<UserOutlined />} />
                <Text strong>{selectedNote.author}</Text>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="Date">
              {selectedNote.date}
            </Descriptions.Item>
            <Descriptions.Item label="Priority">
              <Tag color={priorityColors[selectedNote.priority] || "default"}>{selectedNote.priority}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag color={statusColors[selectedNote.status] || "default"}>{selectedNote.status}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Content">
              {selectedNote.content}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </div>
  );
} 