"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";

const tabs = [
  { name: "Overview", path: "overview" },
  { name: "Adjudication", path: "adjudication" },
  { name: "Attachments", path: "attachments" },
  { name: "Notes", path: "notes" },
  { name: "History", path: "history" },
];

export default function ClaimDetailLayout({ children }: { children: React.ReactNode }) {
  const { claimId } = useParams();
  const pathname = usePathname();
  const base = `/claims/${claimId}`;
  return (
    <div className="p-8">
      <Breadcrumb />
      <h2 className="text-xl font-semibold mb-4">Claim #{claimId}</h2>
      <nav className="mb-6 border-b flex gap-4">
        {tabs.map(tab => (
          <Link
            key={tab.path}
            href={`${base}/${tab.path}`}
            className={
              pathname.includes(tab.path)
                ? "border-b-2 border-blue-600 pb-2 text-blue-700"
                : "pb-2 text-gray-600 hover:text-blue-700"
            }
          >
            {tab.name}
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </div>
  );
} 