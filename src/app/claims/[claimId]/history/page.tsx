"use client";
import { useParams } from "next/navigation";

export default function ClaimHistoryTab() {
  const { claimId } = useParams();
  return <div>History for claim #{claimId} (mock data)</div>;
} 