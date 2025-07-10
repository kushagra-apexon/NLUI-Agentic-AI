"use client";
import { useState } from "react";
import { users } from "@/mockData/users";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 10;

export default function UsersListPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(users.length / PAGE_SIZE);
  const paginatedUsers = users.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Administration</h1>
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Email</th>
              <th className="px-3 py-2 text-left">Role</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Last Login</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-blue-50 cursor-pointer"
                onClick={() => router.push(`/users/${user.id}`)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/users/${user.id}`); }}
                aria-label={`View details for user ${user.id}`}
              >
                <td className="px-3 py-2">{user.id}</td>
                <td className="px-3 py-2">{user.name}</td>
                <td className="px-3 py-2">{user.email}</td>
                <td className="px-3 py-2">{user.role}</td>
                <td className="px-3 py-2">{user.status}</td>
                <td className="px-3 py-2">{user.lastLogin}</td>
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