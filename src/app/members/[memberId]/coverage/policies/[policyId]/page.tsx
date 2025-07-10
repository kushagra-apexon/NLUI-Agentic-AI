"use client";
import { useParams, useRouter } from "next/navigation";

// Mock policies for demonstration
const policies = [
  { id: "p1", name: "Gold Plan", type: "Medical", effective: "2024-01-01" },
  { id: "p2", name: "Silver Plan", type: "Dental", effective: "2024-02-01" },
  { id: "p3", name: "Bronze Plan", type: "Vision", effective: "2024-03-01" },
];

export default function PolicyDetailPage() {
  const { memberId, policyId } = useParams();
  const router = useRouter();
  const policy = policies.find(p => p.id === policyId);
  if (!policy) {
    return <div className="text-red-600 p-8">Policy not found.</div>;
  }
  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-8 mt-8">
      <h2 className="text-lg font-bold mb-4">Policy Detail</h2>
      <div className="space-y-2 mb-4">
        <div><span className="font-semibold">ID:</span> {policy.id}</div>
        <div><span className="font-semibold">Name:</span> {policy.name}</div>
        <div><span className="font-semibold">Type:</span> {policy.type}</div>
        <div><span className="font-semibold">Effective:</span> {policy.effective}</div>
      </div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        onClick={() => router.push(`/members/${memberId}/coverage/policies/${policyId}/endorsements`)}
      >
        Go to Endorsements Tab
      </button>
    </div>
  );
} 