"use client";
import { useState } from "react";
import { invoices } from "@/mockData/billing";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

export default function BillingListPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(invoices.length / PAGE_SIZE);
  const paginatedInvoices = invoices.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Billing & Payments</h1>
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Member</th>
              <th className="px-3 py-2 text-left">Amount</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Issued</th>
              <th className="px-3 py-2 text-left">Paid</th>
            </tr>
          </thead>
          <tbody>
            {paginatedInvoices.map((inv) => (
              <tr
                key={inv.id}
                className="border-b hover:bg-blue-50 cursor-pointer"
                onClick={() => router.push(`/billing/${inv.id}`)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/billing/${inv.id}`); }}
                aria-label={`View details for invoice ${inv.id}`}
              >
                <td className="px-3 py-2">{inv.id}</td>
                <td className="px-3 py-2">{inv.memberName}</td>
                <td className="px-3 py-2">${inv.amount.toFixed(2)}</td>
                <td className="px-3 py-2">{inv.status}</td>
                <td className="px-3 py-2">{inv.issuedDate}</td>
                <td className="px-3 py-2">{inv.paidDate || '-'}</td>
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