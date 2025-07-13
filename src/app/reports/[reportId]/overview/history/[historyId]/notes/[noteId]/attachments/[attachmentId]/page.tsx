"use client";
import { useParams } from 'next/navigation';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

// Mock data for deep report overview history note attachment
const mockAttachment = {
  id: 'ATT001',
  noteId: 'NOTE001',
  historyId: 'HIST001',
  reportId: 'RPT001',
  content: 'This is a mock attachment for a deeply nested report overview history note.',
  uploadedBy: 'Report Admin',
  uploadedAt: '2024-01-25 13:00:00'
};

export default function ReportOverviewHistoryNoteAttachmentDeepPage() {
  const params = useParams();
  const attachmentId = Array.isArray(params.attachmentId) ? params.attachmentId[0] : params.attachmentId;
  const noteId = Array.isArray(params.noteId) ? params.noteId[0] : params.noteId;
  const historyId = Array.isArray(params.historyId) ? params.historyId[0] : params.historyId;
  const reportId = Array.isArray(params.reportId) ? params.reportId[0] : params.reportId;

  const isMatch =
    attachmentId === mockAttachment.id &&
    noteId === mockAttachment.noteId &&
    historyId === mockAttachment.historyId &&
    reportId === mockAttachment.reportId;

  if (!isMatch) {
    return <div className="text-red-600 p-8">Attachment not found.</div>;
  }

  return (
    <div className="p-6">
      <Card>
        <Title level={4}>Report Overview History Note Attachment (5-level deep)</Title>
        <Text strong>ID:</Text> {mockAttachment.id}<br/>
        <Text strong>Note ID:</Text> {mockAttachment.noteId}<br/>
        <Text strong>History ID:</Text> {mockAttachment.historyId}<br/>
        <Text strong>Report ID:</Text> {mockAttachment.reportId}<br/>
        <Text strong>Content:</Text> {mockAttachment.content}<br/>
        <Text strong>Uploaded By:</Text> {mockAttachment.uploadedBy}<br/>
        <Text strong>Uploaded At:</Text> {mockAttachment.uploadedAt}
      </Card>
    </div>
  );
} 