"use client";
import { useParams } from 'next/navigation';
import { Card, Tag } from 'antd';
import { AuditOutlined, FileSearchOutlined, UserOutlined, CalendarOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock audits for demonstration
const mockAudits = [
  {
    id: "AUD001",
    action: "Viewed",
    by: "John Doe",
    date: "2024-01-15 10:30:00",
    details: "User viewed attachment details"
  },
  {
    id: "AUD002", 
    action: "Downloaded",
    by: "Jane Smith",
    date: "2024-01-15 11:45:00",
    details: "User downloaded attachment file"
  },
  {
    id: "AUD003",
    action: "Deleted",
    by: "Admin User",
    date: "2024-01-16 09:15:00",
    details: "Attachment was deleted due to policy violation"
  }
];

const actionColors: { [key: string]: string } = {
  Viewed: "blue",
  Downloaded: "green",
  Deleted: "red",
};

export default function AuditDetailPage() {
  const params = useParams();
  // Next.js 15 returns params as a record of string | string[]
  const auditId = Array.isArray(params.auditId) ? params.auditId[0] : params.auditId;
  
  // Find the audit by ID
  const audit = mockAudits.find(a => a.id === auditId);
  
  if (!audit) {
    return <div className="text-red-600 p-8">Audit not found.</div>;
  }
  
  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><AuditOutlined /> Audit Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <div className="space-y-4">
          <div><span className="font-semibold">ID:</span> {audit.id}</div>
          <div><span className="font-semibold">Action:</span> <Tag color={actionColors[audit.action] || "default"} icon={<FileSearchOutlined />}>{audit.action}</Tag></div>
          <div><span className="font-semibold">By:</span> <UserOutlined /> {audit.by}</div>
          <div><span className="font-semibold">Date:</span> <CalendarOutlined /> {audit.date}</div>
          <div><span className="font-semibold">Details:</span> {audit.details}</div>
        </div>
      </Card>
    </div>
  );
} 