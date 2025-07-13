"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { FileSearchOutlined, UserOutlined, CalendarOutlined, AlertOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock review data
const mockReviews = [
  {
    id: "REV001",
    appealId: "APL001",
    authId: "AUTH001",
    by: "Appeal Specialist",
    date: "2024-01-20",
    status: "Under Review",
    comments: "Reviewing medical necessity documentation"
  },
  {
    id: "REV002",
    appealId: "APL002",
    authId: "AUTH002",
    by: "Senior Reviewer",
    date: "2024-01-18",
    status: "Approved",
    comments: "Appeal approved based on new evidence"
  }
];

const statusColors: { [key: string]: string } = {
  "Under Review": "orange",
  "Approved": "green",
  "Denied": "red",
  "Pending": "blue"
};

export default function AuthorizationAppealReviewDetailPage() {
  const params = useParams();
  const reviewId = Array.isArray(params.reviewId) ? params.reviewId[0] : params.reviewId;

  const review = mockReviews.find(r => r.id === reviewId);

  if (!review) {
    return <div className="text-red-600 p-8">Review not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileSearchOutlined /> Appeal Review Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileSearchOutlined /> Review ID</span>}>
            {review.id}
          </Descriptions.Item>
          <Descriptions.Item label="Appeal ID">
            {review.appealId}
          </Descriptions.Item>
          <Descriptions.Item label="Authorization ID">
            {review.authId}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> By</span>}>
            {review.by}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Date</span>}>
            {review.date}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[review.status] || "default"}>{review.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Comments">
            {review.comments}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 