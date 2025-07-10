"use client";
import { useState } from "react";
import { claims } from "@/mockData/claims";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

export default function ClaimsListPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(claims.length / PAGE_SIZE);
  const paginatedClaims = claims.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Claims Management</h1>
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Member</th>
              <th className="px-3 py-2 text-left">Provider</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Amount</th>
              <th className="px-3 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedClaims.map((claim) => (
              <tr
                key={claim.id}
                className="border-b hover:bg-blue-50 cursor-pointer"
                onClick={() => router.push(`/claims/${claim.id}`)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/claims/${claim.id}`); }}
                aria-label={`View details for claim ${claim.id}`}
              >
                <td className="px-3 py-2">{claim.id}</td>
                <td className="px-3 py-2">{claim.memberName}</td>
                <td className="px-3 py-2">{claim.providerName}</td>
                <td className="px-3 py-2">{claim.status}</td>
                <td className="px-3 py-2">${claim.amount.toFixed(2)}</td>
                <td className="px-3 py-2">{claim.date}</td>
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