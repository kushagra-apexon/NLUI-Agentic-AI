"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";

const tabs = [
  { name: "Profile", path: "profile" },
  { name: "Coverage", path: "coverage" },
  { name: "Claims", path: "claims" },
  { name: "Authorizations", path: "authorizations" },
  { name: "History", path: "history" },
  { name: "Documents", path: "documents" },
];

export default function MemberDetailLayout({ children }: { children: React.ReactNode }) {
  const { memberId } = useParams();
  const pathname = usePathname();
  const base = `/members/${memberId}`;
  return (
    <div className="p-8">
      <Breadcrumb />
      <h2 className="text-xl font-semibold mb-4">Member #{memberId}</h2>
      <nav className="mb-6 border-b flex gap-4">
        {tabs.map(tab => (
          <Link
            key={tab.path}
            href={`${base}/${tab.path}`}
            className={`pb-2 px-2 border-b-2 transition font-medium ${pathname.includes(tab.path) ? "border-blue-600 text-blue-600" : "border-transparent text-gray-600 hover:text-blue-600"}`}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </div>
  );
} 