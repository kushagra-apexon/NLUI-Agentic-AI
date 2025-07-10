"use client";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ClaimDetailPage() {
  const { claimId } = useParams();
  const router = useRouter();
  useEffect(() => {
    if (claimId) {
      router.replace(`/claims/${claimId}/overview`);
    }
  }, [claimId, router]);
  return null;
} 