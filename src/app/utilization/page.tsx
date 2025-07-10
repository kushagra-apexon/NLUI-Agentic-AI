"use client";
import { useState } from "react";
import { utilizationRequests } from "@/mockData/utilization";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

export default function UtilizationListPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(utilizationRequests.length / PAGE_SIZE);
  const paginatedRequests = utilizationRequests.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Utilization Management</h1>
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Member</th>
              <th className="px-3 py-2 text-left">Request Type</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Submitted</th>
              <th className="px-3 py-2 text-left">Reviewed</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRequests.map((req) => (
              <tr
                key={req.id}
                className="border-b hover:bg-blue-50 cursor-pointer"
                onClick={() => router.push(`/utilization/${req.id}`)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/utilization/${req.id}`); }}
                aria-label={`View details for utilization request ${req.id}`}
              >
                <td className="px-3 py-2">{req.id}</td>
                <td className="px-3 py-2">{req.memberName}</td>
                <td className="px-3 py-2">{req.requestType}</td>
                <td className="px-3 py-2">{req.status}</td>
                <td className="px-3 py-2">{req.submittedDate}</td>
                <td className="px-3 py-2">{req.reviewedDate || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
} 