"use client";
import { useState } from "react";
import { settings } from "@/mockData/settings";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

export default function SettingsListPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(settings.length / PAGE_SIZE);
  const paginatedSettings = settings.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">System Settings</h1>
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Category</th>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Value</th>
              <th className="px-3 py-2 text-left">Updated By</th>
              <th className="px-3 py-2 text-left">Updated</th>
            </tr>
          </thead>
          <tbody>
            {paginatedSettings.map((setting) => (
              <tr
                key={setting.id}
                className="border-b hover:bg-blue-50 cursor-pointer"
                onClick={() => router.push(`/settings/${setting.id}`)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/settings/${setting.id}`); }}
                aria-label={`View details for setting ${setting.id}`}
              >
                <td className="px-3 py-2">{setting.id}</td>
                <td className="px-3 py-2">{setting.category}</td>
                <td className="px-3 py-2">{setting.name}</td>
                <td className="px-3 py-2">{setting.value}</td>
                <td className="px-3 py-2">{setting.updatedBy}</td>
                <td className="px-3 py-2">{setting.updatedDate}</td>
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