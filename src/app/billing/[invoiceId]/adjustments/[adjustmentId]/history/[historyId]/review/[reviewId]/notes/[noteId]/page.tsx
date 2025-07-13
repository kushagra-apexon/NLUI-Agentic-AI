"use client";
import { useParams } from 'next/navigation';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

// Mock data for deep billing adjustment note
const mockNote = {
  id: 'NOTE001',
  reviewId: 'REV001',
  historyId: 'HIST001',
  adjustmentId: 'ADJ001',
  invoiceId: 'INV001',
  content: 'This is a mock note for a deeply nested billing adjustment review history.',
  createdBy: 'Finance Admin',
  createdAt: '2024-01-25 10:00:00'
};

export default function BillingAdjustmentNoteDeepPage() {
  const params = useParams();
  const noteId = Array.isArray(params.noteId) ? params.noteId[0] : params.noteId;
  const reviewId = Array.isArray(params.reviewId) ? params.reviewId[0] : params.reviewId;
  const historyId = Array.isArray(params.historyId) ? params.historyId[0] : params.historyId;
  const adjustmentId = Array.isArray(params.adjustmentId) ? params.adjustmentId[0] : params.adjustmentId;
  const invoiceId = Array.isArray(params.invoiceId) ? params.invoiceId[0] : params.invoiceId;

  const isMatch =
    noteId === mockNote.id &&
    reviewId === mockNote.reviewId &&
    historyId === mockNote.historyId &&
    adjustmentId === mockNote.adjustmentId &&
    invoiceId === mockNote.invoiceId;

  if (!isMatch) {
    return <div className="text-red-600 p-8">Note not found.</div>;
  }

  return (
    <div className="p-6">
      <Card>
        <Title level={4}>Billing Adjustment Note (7-level deep)</Title>
        <Text strong>ID:</Text> {mockNote.id}<br/>
        <Text strong>Review ID:</Text> {mockNote.reviewId}<br/>
        <Text strong>History ID:</Text> {mockNote.historyId}<br/>
        <Text strong>Adjustment ID:</Text> {mockNote.adjustmentId}<br/>
        <Text strong>Invoice ID:</Text> {mockNote.invoiceId}<br/>
        <Text strong>Content:</Text> {mockNote.content}<br/>
        <Text strong>Created By:</Text> {mockNote.createdBy}<br/>
        <Text strong>Created At:</Text> {mockNote.createdAt}
      </Card>
    </div>
  );
} 