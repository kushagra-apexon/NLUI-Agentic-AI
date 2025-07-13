"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { FileTextOutlined, UserOutlined, CalendarOutlined, HistoryOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock note data
const mockNotes = [
  {
    id: "NOTE001",
    historyId: "HIST001",
    reportId: "RPT001",
    content: "Report generated successfully with all data included",
    by: "Report Admin",
    date: "2024-01-25 10:15:00",
    type: "Info"
  },
  {
    id: "NOTE002",
    historyId: "HIST002",
    reportId: "RPT002",
    content: "Data validation completed, report ready for distribution",
    by: "Analytics Team",
    date: "2024-01-26 14:45:00",
    type: "Info"
  }
];

const typeColors: { [key: string]: string } = {
  Info: "blue",
  Warning: "orange",
  Error: "red"
};

export default function ReportOverviewHistoryNoteDetailPage() {
  const params = useParams();
  const noteId = Array.isArray(params.noteId) ? params.noteId[0] : params.noteId;

  const note = mockNotes.find(n => n.id === noteId);

  if (!note) {
    return <div className="text-red-600 p-8">Note not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Note Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> Note ID</span>}>
            {note.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><HistoryOutlined /> History ID</span>}>
            {note.historyId}
          </Descriptions.Item>
          <Descriptions.Item label="Report ID">
            {note.reportId}
          </Descriptions.Item>
          <Descriptions.Item label="Type">
            <Tag color={typeColors[note.type] || "default"}>{note.type}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Content">
            {note.content}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> By</span>}>
            {note.by}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Date</span>}>
            {note.date}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 