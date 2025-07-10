"use client";
import { useParams, useRouter } from "next/navigation";

// Mock attachments for demonstration
const attachments = [
  { id: "a1", name: "EOB.pdf", type: "PDF", uploaded: "2024-06-01" },
  { id: "a2", name: "ClaimForm.jpg", type: "Image", uploaded: "2024-06-02" },
  { id: "a3", name: "Prescription.pdf", type: "PDF", uploaded: "2024-06-03" },
];

export default function AttachmentDetailPage() {
  const { claimId, attachmentId } = useParams();
  const router = useRouter();
  const attachment = attachments.find(a => a.id === attachmentId);
  if (!attachment) {
    return <div className="text-red-600 p-8">Attachment not found.</div>;
  }
  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-8 mt-8">
      <h2 className="text-lg font-bold mb-4">Attachment Detail</h2>
      <div className="space-y-2 mb-4">
        <div><span className="font-semibold">ID:</span> {attachment.id}</div>
        <div><span className="font-semibold">Name:</span> {attachment.name}</div>
        <div><span className="font-semibold">Type:</span> {attachment.type}</div>
        <div><span className="font-semibold">Uploaded:</span> {attachment.uploaded}</div>
      </div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        onClick={() => router.push(`/claims/${claimId}/attachments/${attachmentId}/audit`)}
      >
        Go to Audit Tab
      </button>
    </div>
  );
} 