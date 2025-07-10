"use client";
import { useState } from "react";
import { authorizations } from "@/mockData/authorizations";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

export default function AuthorizationsListPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(authorizations.length / PAGE_SIZE);
  const paginatedAuthorizations = authorizations.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Authorizations</h1>
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Member</th>
              <th className="px-3 py-2 text-left">Service</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Requested</th>
              <th className="px-3 py-2 text-left">Approved</th>
            </tr>
          </thead>
          <tbody>
            {paginatedAuthorizations.map((auth) => (
              <tr
                key={auth.id}
                className="border-b hover:bg-blue-50 cursor-pointer"
                onClick={() => router.push(`/authorizations/${auth.id}`)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/authorizations/${auth.id}`); }}
                aria-label={`View details for authorization ${auth.id}`}
              >
                <td className="px-3 py-2">{auth.id}</td>
                <td className="px-3 py-2">{auth.memberName}</td>
                <td className="px-3 py-2">{auth.service}</td>
                <td className="px-3 py-2">{auth.status}</td>
                <td className="px-3 py-2">{auth.requestedDate}</td>
                <td className="px-3 py-2">{auth.approvedDate || '-'}</td>
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