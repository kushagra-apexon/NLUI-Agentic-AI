"use client";
import { useState } from "react";
import { members } from "@/mockData/members";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

export default function MembersListPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(members.length / PAGE_SIZE);
  const paginatedMembers = members.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Member Management</h1>
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">DOB</th>
              <th className="px-3 py-2 text-left">Gender</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Plan</th>
            </tr>
          </thead>
          <tbody>
            {paginatedMembers.map((member) => (
              <tr
                key={member.id}
                className="border-b hover:bg-blue-50 cursor-pointer"
                onClick={() => router.push(`/members/${member.id}`)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/members/${member.id}`); }}
                aria-label={`View details for member ${member.id}`}
              >
                <td className="px-3 py-2">{member.id}</td>
                <td className="px-3 py-2">{member.name}</td>
                <td className="px-3 py-2">{member.dob}</td>
                <td className="px-3 py-2">{member.gender}</td>
                <td className="px-3 py-2">{member.status}</td>
                <td className="px-3 py-2">{member.plan}</td>
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