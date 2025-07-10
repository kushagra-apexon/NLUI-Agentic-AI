"use client";
import { useParams, useRouter } from "next/navigation";

// Mock endorsements for demonstration
const endorsements = [
  { id: "e1", type: "Rider", description: "Vision rider added", date: "2024-04-01" },
  { id: "e2", type: "Amendment", description: "Coverage increased", date: "2024-04-10" },
  { id: "e3", type: "Rider", description: "Dental rider added", date: "2024-04-15" },
];

export default function EndorsementsListPage() {
  const { memberId, policyId } = useParams();
  const router = useRouter();
  return (
    <div className="max-w-2xl mx-auto bg-white rounded shadow p-8 mt-8">
      <h2 className="text-lg font-bold mb-4">Endorsements for Policy #{policyId}</h2>
      <table className="min-w-full text-sm mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-2 text-left">ID</th>
            <th className="px-3 py-2 text-left">Type</th>
            <th className="px-3 py-2 text-left">Description</th>
            <th className="px-3 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {endorsements.map(e => (
            <tr
              key={e.id}
              className="border-b hover:bg-blue-50 cursor-pointer"
              onClick={() => router.push(`/members/${memberId}/coverage/policies/${policyId}/endorsements/${e.id}`)}
              tabIndex={0}
              onKeyDown={ev => { if (ev.key === 'Enter' || ev.key === ' ') router.push(`/members/${memberId}/coverage/policies/${policyId}/endorsements/${e.id}`); }}
              aria-label={`View details for endorsement ${e.id}`}
            >
              <td className="px-3 py-2">{e.id}</td>
              <td className="px-3 py-2">{e.type}</td>
              <td className="px-3 py-2">{e.description}</td>
              <td className="px-3 py-2">{e.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 