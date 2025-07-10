"use client";
import { useState } from "react";
import { providers } from "@/mockData/providers";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

export default function ProvidersListPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(providers.length / PAGE_SIZE);
  const paginatedProviders = providers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Provider Directory</h1>
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Specialty</th>
              <th className="px-3 py-2 text-left">Location</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Rating</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProviders.map((provider) => (
              <tr
                key={provider.id}
                className="border-b hover:bg-blue-50 cursor-pointer"
                onClick={() => router.push(`/providers/${provider.id}`)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/providers/${provider.id}`); }}
                aria-label={`View details for provider ${provider.id}`}
              >
                <td className="px-3 py-2">{provider.id}</td>
                <td className="px-3 py-2">{provider.name}</td>
                <td className="px-3 py-2">{provider.specialty}</td>
                <td className="px-3 py-2">{provider.location}</td>
                <td className="px-3 py-2">{provider.status}</td>
                <td className="px-3 py-2">{provider.rating}</td>
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