"use client";
import { useParams } from "next/navigation";

export default function ClaimNotesTab() {
  const { claimId } = useParams();
  return <div>Notes for claim #{claimId} (mock data)</div>;
} 