"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";

const tabs = [
  { name: "Profile", path: "profile" },
  { name: "Inventory", path: "inventory" },
  { name: "Claims", path: "claims" },
  { name: "Orders", path: "orders" },
  { name: "Reviews", path: "reviews" },
];

export default function PharmacyDetailLayout({ children }: { children: React.ReactNode }) {
  const { pharmacyId } = useParams();
  const pathname = usePathname();
  const base = `/pharmacies/${pharmacyId}`;
  return (
    <div className="p-8">
      <Breadcrumb />
      <h2 className="text-xl font-semibold mb-4">Pharmacy #{pharmacyId}</h2>
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