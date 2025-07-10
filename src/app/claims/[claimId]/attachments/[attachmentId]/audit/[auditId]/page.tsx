"use client";
import { useParams } from "next/navigation";

// Mock audits for demonstration
const audits = [
  { id: "au1", action: "Viewed", by: "admin", date: "2024-06-04", details: "Attachment was viewed by admin." },
  { id: "au2", action: "Downloaded", by: "user1", date: "2024-06-05", details: "Attachment was downloaded by user1." },
  { id: "au3", action: "Deleted", by: "admin", date: "2024-06-06", details: "Attachment was deleted by admin." },
];

export default function AuditDetailPage() {
  const { auditId } = useParams();
  const audit = audits.find(a => a.id === auditId);
  if (!audit) {
    return <div className="text-red-600 p-8">Audit not found.</div>;
  }
  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-8 mt-8">
      <h2 className="text-lg font-bold mb-4">Audit Detail</h2>
      <div className="space-y-2">
        <div><span className="font-semibold">ID:</span> {audit.id}</div>
        <div><span className="font-semibold">Action:</span> {audit.action}</div>
        <div><span className="font-semibold">By:</span> {audit.by}</div>
        <div><span className="font-semibold">Date:</span> {audit.date}</div>
        <div><span className="font-semibold">Details:</span> {audit.details}</div>
      </div>
    </div>
  );
} 