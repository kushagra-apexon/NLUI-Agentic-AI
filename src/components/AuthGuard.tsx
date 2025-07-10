"use client";
import { ReactNode, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && pathname !== "/login") {
      router.replace("/login");
    }
    if (isAuthenticated && pathname === "/login") {
      router.replace("/");
    }
  }, [isAuthenticated, pathname, router]);

  if (!isAuthenticated && pathname !== "/login") {
    return null;
  }
  return <>{children}</>;
} 