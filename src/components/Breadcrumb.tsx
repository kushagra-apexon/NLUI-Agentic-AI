"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const router = useRouter();
  const segments = pathname.split("/").filter(Boolean);

  // Build up the path for each segment
  let path = "";
  const crumbs = segments.map((seg, idx) => {
    path += "/" + seg;
    // Capitalize and prettify segment
    let label = seg.replace(/\[|\]/g, "");
    label = label.replace(/([A-Z])/g, " $1").replace(/-/g, " ").replace(/_/g, " ");
    label = label.charAt(0).toUpperCase() + label.slice(1);
    return (
      <span key={path} className="flex items-center">
        {idx > 0 && <span className="mx-2 text-gray-400">/</span>}
        <button
          className={`text-blue-600 hover:underline focus:outline-none ${idx === segments.length - 1 ? "font-semibold text-gray-700 cursor-default" : ""}`}
          onClick={() => idx !== segments.length - 1 && router.push(path)}
          disabled={idx === segments.length - 1}
        >
          {label}
        </button>
      </span>
    );
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <div className="flex items-center">
        <button
          className="text-blue-600 hover:underline focus:outline-none"
          onClick={() => router.push("/")}
        >
          Home
        </button>
        {segments.length > 0 && <span className="mx-2 text-gray-400">/</span>}
        {crumbs}
      </div>
    </nav>
  );
} 