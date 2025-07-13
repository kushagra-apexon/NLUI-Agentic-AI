"use client";
import { useParams } from 'next/navigation';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

// Mock data for deep user overview history note attachment
const mockAttachment = {
  id: 'ATT001',
  noteId: 'NOTE001',
  historyId: 'HIST001',
  userId: 'USR001',
  content: 'This is a mock attachment for a deeply nested user overview history note.',
  uploadedBy: 'User Admin',
  uploadedAt: '2024-01-25 14:00:00'
};

export default function UserOverviewHistoryNoteAttachmentDeepPage() {
  const params = useParams();
  const attachmentId = Array.isArray(params.attachmentId) ? params.attachmentId[0] : params.attachmentId;
  const noteId = Array.isArray(params.noteId) ? params.noteId[0] : params.noteId;
  const historyId = Array.isArray(params.historyId) ? params.historyId[0] : params.historyId;
  const userId = Array.isArray(params.userId) ? params.userId[0] : params.userId;

  const isMatch =
    attachmentId === mockAttachment.id &&
    noteId === mockAttachment.noteId &&
    historyId === mockAttachment.historyId &&
    userId === mockAttachment.userId;

  if (!isMatch) {
    return <div className="text-red-600 p-8">Attachment not found.</div>;
  }

  return (
    <div className="p-6">
      <Card>
        <Title level={4}>User Overview History Note Attachment (5-level deep)</Title>
        <Text strong>ID:</Text> {mockAttachment.id}<br/>
        <Text strong>Note ID:</Text> {mockAttachment.noteId}<br/>
        <Text strong>History ID:</Text> {mockAttachment.historyId}<br/>
        <Text strong>User ID:</Text> {mockAttachment.userId}<br/>
        <Text strong>Content:</Text> {mockAttachment.content}<br/>
        <Text strong>Uploaded By:</Text> {mockAttachment.uploadedBy}<br/>
        <Text strong>Uploaded At:</Text> {mockAttachment.uploadedAt}
      </Card>
    </div>
  );
} 