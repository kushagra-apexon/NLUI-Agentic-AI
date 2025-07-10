import Link from "next/link";
import { usePathname } from "next/navigation";

const modules = [
  { name: "Claims", path: "/claims" },
  { name: "Members", path: "/members" },
  { name: "Providers", path: "/providers" },
  { name: "Authorizations", path: "/authorizations" },
  { name: "Pharmacies", path: "/pharmacies" },
  { name: "Billing", path: "/billing" },
  { name: "Utilization", path: "/utilization" },
  { name: "Reports", path: "/reports" },
  { name: "Users", path: "/users" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="h-screen w-56 bg-gray-100 border-r flex flex-col py-8 px-4 fixed top-0 left-0 z-20">
      <nav className="flex flex-col gap-2">
        {modules.map((mod) => (
          <Link
            key={mod.path}
            href={mod.path}
            className={`rounded px-3 py-2 font-medium transition-colors ${pathname.startsWith(mod.path) ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100"}`}
          >
            {mod.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 