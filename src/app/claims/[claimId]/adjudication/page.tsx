"use client";
import { useParams } from "next/navigation";

export default function ClaimAdjudicationTab() {
  const { claimId } = useParams();
  return <div>Adjudication for claim #{claimId} (mock data)</div>;
} 