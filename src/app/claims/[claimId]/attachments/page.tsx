// Attachments List Page for a Claim
"use client";
import { useParams, useRouter } from "next/navigation";

// Mock attachments for demonstration
const attachments = [
  { id: "a1", name: "EOB.pdf", type: "PDF", uploaded: "2024-06-01" },
  { id: "a2", name: "ClaimForm.jpg", type: "Image", uploaded: "2024-06-02" },
  { id: "a3", name: "Prescription.pdf", type: "PDF", uploaded: "2024-06-03" },
];

export default function AttachmentsListPage() {
  const { claimId } = useParams();
  const router = useRouter();
  return (
    <div className="max-w-2xl mx-auto bg-white rounded shadow p-8 mt-8">
      <h2 className="text-lg font-bold mb-4">Attachments for Claim #{claimId}</h2>
      <table className="min-w-full text-sm mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-2 text-left">ID</th>
            <th className="px-3 py-2 text-left">Name</th>
            <th className="px-3 py-2 text-left">Type</th>
            <th className="px-3 py-2 text-left">Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {attachments.map(att => (
            <tr
              key={att.id}
              className="border-b hover:bg-blue-50 cursor-pointer"
              onClick={() => router.push(`/claims/${claimId}/attachments/${att.id}`)}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/claims/${claimId}/attachments/${att.id}`); }}
              aria-label={`View details for attachment ${att.id}`}
            >
              <td className="px-3 py-2">{att.id}</td>
              <td className="px-3 py-2">{att.name}</td>
              <td className="px-3 py-2">{att.type}</td>
              <td className="px-3 py-2">{att.uploaded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 