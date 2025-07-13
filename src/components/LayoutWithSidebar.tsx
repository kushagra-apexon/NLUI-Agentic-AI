"use client";
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function LayoutWithSidebar({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  if (pathname === "/login") return <>{children}</>;
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 px-0">
        <Header />
        {children}
      </main>
    </div>
  );
} 
