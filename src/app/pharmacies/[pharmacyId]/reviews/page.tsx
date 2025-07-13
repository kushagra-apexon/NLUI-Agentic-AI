"use client";
import { Card, Table, Rate } from 'antd';
import { CommentOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock data for reviews
const mockReviews = [
  {
    id: "REV001",
    memberId: "MEM001",
    rating: 5,
    comment: "Excellent service and fast delivery",
    date: "2024-01-15"
  },
  {
    id: "REV002",
    memberId: "MEM002",
    rating: 4,
    comment: "Good quality products",
    date: "2024-01-18"
  },
  {
    id: "REV003",
    memberId: "MEM003",
    rating: 3,
    comment: "Average experience",
    date: "2024-01-20"
  }
];

export default function PharmacyReviewsPage() {
  const columns = [
    {
      title: 'Review ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Member ID',
      dataIndex: 'memberId',
      key: 'memberId',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating: number) => (
        <span className="flex items-center gap-2">
          <CommentOutlined />
          <Rate disabled defaultValue={rating} />
        </span>
      ),
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">85</div>
            <div className="text-gray-600">Total Reviews</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">4.2</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">65</div>
            <div className="text-gray-600">Positive Reviews</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">20</div>
            <div className="text-gray-600">Neutral Reviews</div>
          </div>
        </Card>
      </div>
      
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><CommentOutlined /> Pharmacy Reviews</span>}
        className="shadow-lg rounded-lg"
      >
        <Table
          dataSource={mockReviews}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
} 