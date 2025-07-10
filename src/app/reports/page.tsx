"use client";
import { useState } from "react";
import { reports } from "@/mockData/reports";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

export default function ReportsDashboardPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(reports.length / PAGE_SIZE);
  const paginatedReports = reports.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Reporting & Analytics</h1>
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Title</th>
              <th className="px-3 py-2 text-left">Type</th>
              <th className="px-3 py-2 text-left">Created By</th>
              <th className="px-3 py-2 text-left">Created</th>
              <th className="px-3 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedReports.map((report) => (
              <tr
                key={report.id}
                className="border-b hover:bg-blue-50 cursor-pointer"
                onClick={() => router.push(`/reports/${report.id}`)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/reports/${report.id}`); }}
                aria-label={`View details for report ${report.id}`}
              >
                <td className="px-3 py-2">{report.id}</td>
                <td className="px-3 py-2">{report.title}</td>
                <td className="px-3 py-2">{report.type}</td>
                <td className="px-3 py-2">{report.createdBy}</td>
                <td className="px-3 py-2">{report.createdDate}</td>
                <td className="px-3 py-2">{report.status}</td>
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