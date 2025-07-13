"use client";
import { useState } from 'react';
import { Card, Typography, Table, Button, Modal, Descriptions, Tag, Space, Avatar, Rate } from 'antd';
import { CommentOutlined, UserOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const { Title, Text } = Typography;

// Mock reviews data
const mockReviews = [
  { id: 'REV001', reviewer: 'John Smith', date: '2024-01-15', rating: 5, status: 'Published', comment: 'Excellent care and attention to detail.' },
  { id: 'REV002', reviewer: 'Mary Johnson', date: '2024-01-16', rating: 4, status: 'Published', comment: 'Very professional and knowledgeable.', response: 'Thank you for your feedback!' },
];
const columns = [
  { title: 'Reviewer', dataIndex: 'reviewer', key: 'reviewer' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Rating', dataIndex: 'rating', key: 'rating', render: (rating: number) => <Rate disabled defaultValue={rating} /> },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Comment', dataIndex: 'comment', key: 'comment', ellipsis: true },
];

const totalReviews = 2;
const publishedReviews = 2;
const pendingReviews = 0;
const flaggedReviews = 0;
const avgRating = '4.5';

const statusColors: { [key: string]: string } = {
  Published: "green",
  Pending: "orange",
  Flagged: "red"
};

export default function ProviderReviewsPage() {
  const [selectedReview, setSelectedReview] = useState<typeof mockReviews[0] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showReviewDetail = (review: typeof mockReviews[0]) => {
    setSelectedReview(review);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedReview(null);
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#1890ff" }}>{totalReviews}</Title>
            <Text type="secondary">Total Reviews</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#52c41a" }}>{publishedReviews}</Title>
            <Text type="secondary">Published</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#faad14" }}>{pendingReviews}</Title>
            <Text type="secondary">Pending</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#ff4d4f" }}>{flaggedReviews}</Title>
            <Text type="secondary">Flagged</Text>
          </div>
        </Card>
      </div>
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <CommentOutlined /> Provider Reviews
          </Title>
          <div>
            <Text strong>Average Rating: </Text>
            <Rate disabled allowHalf defaultValue={parseFloat(avgRating)} />
            <span className="ml-2 text-lg font-bold">{avgRating}</span>
          </div>
        </div>
        <Table
          dataSource={mockReviews}
          columns={columns}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} reviews`
          }}
          className="cursor-pointer"
          onRow={(record) => ({
            onClick: () => showReviewDetail(record),
            style: { cursor: "pointer" }
          })}
        />
      </Card>
      <Modal
        title={
          <span>
            <CommentOutlined /> Review Details - {selectedReview?.reviewer}
          </span>
        }
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>Close</Button>
        ]}
        width={600}
      >
        {selectedReview && (
          <div className="space-y-6">
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Reviewer">
                <Space>
                  <Avatar icon={<UserOutlined />} />
                  <Text strong>{selectedReview.reviewer}</Text>
                </Space>
              </Descriptions.Item>
              <Descriptions.Item label="Date">
                {selectedReview.date}
              </Descriptions.Item>
              <Descriptions.Item label="Rating">
                <Rate disabled defaultValue={selectedReview.rating} allowHalf />
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag color={statusColors[selectedReview.status] || "default"}>{selectedReview.status}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Comment">
                {selectedReview.comment}
              </Descriptions.Item>
              {selectedReview.response && (
                <Descriptions.Item label="Provider Response">
                  <Text type="secondary">{selectedReview.response}</Text>
                </Descriptions.Item>
              )}
            </Descriptions>
          </div>
        )}
      </Modal>
    </div>
  );
} 