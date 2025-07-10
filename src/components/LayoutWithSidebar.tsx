"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function LayoutWithSidebar({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/login") return <>{children}</>;
  return (
    <div className="flex min-h-screen w-full overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 ml-56 w-0 min-w-0 px-0 overflow-x-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
} 