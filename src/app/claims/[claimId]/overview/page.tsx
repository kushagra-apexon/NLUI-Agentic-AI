"use client";
import { useParams } from "next/navigation";
import { claims } from "@/mockData/claims";

export default function ClaimOverviewTab() {
  const { claimId } = useParams();
  const claim = claims.find((c) => c.id === claimId);
  if (!claim) {
    return <div className="text-red-600 p-8">Claim not found.</div>;
  }
  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-8 mt-8">
      <h2 className="text-xl font-bold mb-4">Claim Overview</h2>
      <div className="space-y-2">
        <div><span className="font-semibold">Claim ID:</span> {claim.id}</div>
        <div><span className="font-semibold">Member Name:</span> {claim.memberName}</div>
        <div><span className="font-semibold">Provider Name:</span> {claim.providerName}</div>
        <div><span className="font-semibold">Status:</span> {claim.status}</div>
        <div><span className="font-semibold">Amount:</span> ${claim.amount.toFixed(2)}</div>
        <div><span className="font-semibold">Date:</span> {claim.date}</div>
      </div>
    </div>
  );
} 