"use client";
import { useState } from 'react';
import { Card, Typography, Table, Button, Modal, Descriptions, Tag, Space, Avatar, Badge } from 'antd';
import { FileTextOutlined, PlusOutlined, EditOutlined, UserOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const { Title, Text } = Typography;

// Mock notes data
const mockNotes = [
  { id: 'NOTE001', title: 'Credentialing Review', category: 'Credentialing', priority: 'High', status: 'Active', author: 'John Smith', date: '2024-01-15', content: 'Provider credentialing completed successfully.' },
  { id: 'NOTE002', title: 'Contract Renewal', category: 'Contract', priority: 'Medium', status: 'Active', author: 'Jane Doe', date: '2024-01-16', content: 'Contract renewal discussion scheduled.' },
];
const columns = [
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { title: 'Category', dataIndex: 'category', key: 'category' },
  { title: 'Priority', dataIndex: 'priority', key: 'priority' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Author', dataIndex: 'author', key: 'author' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
];

const totalNotes = 2;
const activeNotes = 2;
const archivedNotes = 0;
const highPriorityNotes = 1;

const statusColors: { [key: string]: string } = {
  Active: "green",
  Archived: "gray"
};

const priorityColors: { [key: string]: string } = {
  High: "red",
  Medium: "orange",
  Low: "green"
};

const categoryColors: { [key: string]: string } = {
  Credentialing: "blue",
  Contract: "purple",
  Performance: "red",
  Administrative: "cyan"
};

export default function ProviderNotesPage() {
  const [selectedNote, setSelectedNote] = useState<typeof mockNotes[0] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showNoteDetail = (note: typeof mockNotes[0]) => {
    setSelectedNote(note);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedNote(null);
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#1890ff" }}>{totalNotes}</Title>
            <Text type="secondary">Total Notes</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#52c41a" }}>{activeNotes}</Title>
            <Text type="secondary">Active</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#666" }}>{archivedNotes}</Title>
            <Text type="secondary">Archived</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#ff4d4f" }}>{highPriorityNotes}</Title>
            <Text type="secondary">High Priority</Text>
          </div>
        </Card>
      </div>
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <FileTextOutlined /> Provider Notes
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
        title={
          <span>
            <FileTextOutlined /> Note Details - {selectedNote?.title}
          </span>
        }
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>Close</Button>,
          <Button key="edit" type="primary" icon={<EditOutlined />}>Edit Note</Button>
        ]}
        width={700}
      >
        {selectedNote && (
          <div className="space-y-6">
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Title">
                <Text strong>{selectedNote.title}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Category">
                <Tag color={categoryColors[selectedNote.category] || "default"}>{selectedNote.category}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Priority">
                <Tag color={priorityColors[selectedNote.priority] || "default"}>{selectedNote.priority}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Badge color={statusColors[selectedNote.status] || "default"} text={selectedNote.status} />
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
              <Descriptions.Item label="Content">
                {selectedNote.content}
              </Descriptions.Item>
            </Descriptions>
          </div>
        )}
      </Modal>
    </div>
  );
} 