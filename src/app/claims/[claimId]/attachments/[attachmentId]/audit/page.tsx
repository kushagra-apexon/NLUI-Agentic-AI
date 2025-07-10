"use client";
import { useParams, useRouter } from "next/navigation";

// Mock audits for demonstration
const audits = [
  { id: "au1", action: "Viewed", by: "admin", date: "2024-06-04" },
  { id: "au2", action: "Downloaded", by: "user1", date: "2024-06-05" },
  { id: "au3", action: "Deleted", by: "admin", date: "2024-06-06" },
];

export default function AttachmentAuditTab() {
  const { claimId, attachmentId } = useParams();
  const router = useRouter();
  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-8 mt-8">
      <h2 className="text-lg font-bold mb-4">Audit for Attachment #{attachmentId}</h2>
      <table className="min-w-full text-sm mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-2 text-left">ID</th>
            <th className="px-3 py-2 text-left">Action</th>
            <th className="px-3 py-2 text-left">By</th>
            <th className="px-3 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {audits.map(audit => (
            <tr
              key={audit.id}
              className="border-b hover:bg-blue-50 cursor-pointer"
              onClick={() => router.push(`/claims/${claimId}/attachments/${attachmentId}/audit/${audit.id}`)}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/claims/${claimId}/attachments/${attachmentId}/audit/${audit.id}`); }}
              aria-label={`View details for audit ${audit.id}`}
            >
              <td className="px-3 py-2">{audit.id}</td>
              <td className="px-3 py-2">{audit.action}</td>
              <td className="px-3 py-2">{audit.by}</td>
              <td className="px-3 py-2">{audit.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 