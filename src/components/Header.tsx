"use client";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const { logout } = useAuth();
  const pathname = usePathname();
  if (pathname === "/login") return null;
  return (
    <header className="w-full flex flex-wrap min-w-0 items-center justify-between px-8 py-4 bg-white shadow-md">
      <div className="text-xl font-bold truncate">US Healthcare Admin Panel</div>
      <div className="flex items-center gap-4 min-w-0">
        <input
          type="text"
          placeholder="Smart Search (coming soon)"
          className="border rounded px-3 py-2 focus:outline-none focus:ring w-64 min-w-0"
          disabled
        />
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
} 