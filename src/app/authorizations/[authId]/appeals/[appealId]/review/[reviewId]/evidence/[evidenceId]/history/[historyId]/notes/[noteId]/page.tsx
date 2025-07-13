"use client";
import { useParams } from 'next/navigation';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

// Mock data for deep authorization appeal review evidence history note
const mockNote = {
  id: 'NOTE001',
  historyId: 'HIST001',
  evidenceId: 'EVD001',
  reviewId: 'REV001',
  appealId: 'APL001',
  authId: 'AUTH001',
  content: 'This is a mock note for a deeply nested authorization appeal review evidence history.',
  createdBy: 'Authorization Admin',
  createdAt: '2024-01-25 12:00:00'
};

export default function AuthorizationAppealReviewEvidenceHistoryNoteDeepPage() {
  const params = useParams();
  const noteId = Array.isArray(params.noteId) ? params.noteId[0] : params.noteId;
  const historyId = Array.isArray(params.historyId) ? params.historyId[0] : params.historyId;
  const evidenceId = Array.isArray(params.evidenceId) ? params.evidenceId[0] : params.evidenceId;
  const reviewId = Array.isArray(params.reviewId) ? params.reviewId[0] : params.reviewId;
  const appealId = Array.isArray(params.appealId) ? params.appealId[0] : params.appealId;
  const authId = Array.isArray(params.authId) ? params.authId[0] : params.authId;

  const isMatch =
    noteId === mockNote.id &&
    historyId === mockNote.historyId &&
    evidenceId === mockNote.evidenceId &&
    reviewId === mockNote.reviewId &&
    appealId === mockNote.appealId &&
    authId === mockNote.authId;

  if (!isMatch) {
    return <div className="text-red-600 p-8">Note not found.</div>;
  }

  return (
    <div className="p-6">
      <Card>
        <Title level={4}>Authorization Appeal Review Evidence History Note (7-level deep)</Title>
        <Text strong>ID:</Text> {mockNote.id}<br/>
        <Text strong>History ID:</Text> {mockNote.historyId}<br/>
        <Text strong>Evidence ID:</Text> {mockNote.evidenceId}<br/>
        <Text strong>Review ID:</Text> {mockNote.reviewId}<br/>
        <Text strong>Appeal ID:</Text> {mockNote.appealId}<br/>
        <Text strong>Authorization ID:</Text> {mockNote.authId}<br/>
        <Text strong>Content:</Text> {mockNote.content}<br/>
        <Text strong>Created By:</Text> {mockNote.createdBy}<br/>
        <Text strong>Created At:</Text> {mockNote.createdAt}
      </Card>
    </div>
  );
} 