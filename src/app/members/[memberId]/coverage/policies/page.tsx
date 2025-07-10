"use client";
import { useParams, useRouter } from "next/navigation";

// Mock policies for demonstration
const policies = [
  { id: "p1", name: "Gold Plan", type: "Medical", effective: "2024-01-01" },
  { id: "p2", name: "Silver Plan", type: "Dental", effective: "2024-02-01" },
  { id: "p3", name: "Bronze Plan", type: "Vision", effective: "2024-03-01" },
];

export default function PoliciesListPage() {
  const { memberId } = useParams();
  const router = useRouter();
  return (
    <div className="max-w-2xl mx-auto bg-white rounded shadow p-8 mt-8">
      <h2 className="text-lg font-bold mb-4">Policies for Member #{memberId}</h2>
      <table className="min-w-full text-sm mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-2 text-left">ID</th>
            <th className="px-3 py-2 text-left">Name</th>
            <th className="px-3 py-2 text-left">Type</th>
            <th className="px-3 py-2 text-left">Effective</th>
          </tr>
        </thead>
        <tbody>
          {policies.map(policy => (
            <tr
              key={policy.id}
              className="border-b hover:bg-blue-50 cursor-pointer"
              onClick={() => router.push(`/members/${memberId}/coverage/policies/${policy.id}`)}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/members/${memberId}/coverage/policies/${policy.id}`); }}
              aria-label={`View details for policy ${policy.id}`}
            >
              <td className="px-3 py-2">{policy.id}</td>
              <td className="px-3 py-2">{policy.name}</td>
              <td className="px-3 py-2">{policy.type}</td>
              <td className="px-3 py-2">{policy.effective}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 