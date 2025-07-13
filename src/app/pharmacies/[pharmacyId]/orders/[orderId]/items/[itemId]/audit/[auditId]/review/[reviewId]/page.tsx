"use client";
import { useParams } from 'next/navigation';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

// Mock data for deep pharmacy order item audit review
const mockReviews = [
  {
    id: 'REV001',
    auditId: 'AUD001',
    itemId: 'ITEM001',
    orderId: 'ORD001',
    pharmacyId: 'PHM001',
    content: 'This is a mock review for a deeply nested pharmacy order item audit.',
    reviewedBy: 'Pharmacy Admin',
    reviewedAt: '2024-01-25 11:00:00'
  },
  {
    id: 'REV002',
    auditId: 'AUD002',
    itemId: 'ITEM002',
    orderId: 'ORD002',
    pharmacyId: 'PHM002',
    content: 'Second review for pharmacy order item audit.',
    reviewedBy: 'Quality Manager',
    reviewedAt: '2024-01-26 14:30:00'
  }
];

export default function PharmacyOrderItemAuditReviewDeepPage() {
  const params = useParams();
  const reviewId = Array.isArray(params.reviewId) ? params.reviewId[0] : params.reviewId;
  
  // Find the review by ID
  const review = mockReviews.find(r => r.id === reviewId);
  
  if (!review) {
    return <div className="text-red-600 p-8">Review not found.</div>;
  }

  return (
    <div className="p-6">
      <Card>
        <Title level={4}>Pharmacy Order Item Audit Review (7-level deep)</Title>
        <Text strong>ID:</Text> {review.id}<br/>
        <Text strong>Audit ID:</Text> {review.auditId}<br/>
        <Text strong>Item ID:</Text> {review.itemId}<br/>
        <Text strong>Order ID:</Text> {review.orderId}<br/>
        <Text strong>Pharmacy ID:</Text> {review.pharmacyId}<br/>
        <Text strong>Content:</Text> {review.content}<br/>
        <Text strong>Reviewed By:</Text> {review.reviewedBy}<br/>
        <Text strong>Reviewed At:</Text> {review.reviewedAt}
      </Card>
    </div>
  );
} 