"use client";
import { useParams } from "next/navigation";

// Mock endorsements for demonstration
const endorsements = [
  { id: "e1", type: "Rider", description: "Vision rider added", date: "2024-04-01" },
  { id: "e2", type: "Amendment", description: "Coverage increased", date: "2024-04-10" },
  { id: "e3", type: "Rider", description: "Dental rider added", date: "2024-04-15" },
];

export default function EndorsementDetailPage() {
  const { endorsementId } = useParams();
  const endorsement = endorsements.find(e => e.id === endorsementId);
  if (!endorsement) {
    return <div className="text-red-600 p-8">Endorsement not found.</div>;
  }
  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-8 mt-8">
      <h2 className="text-lg font-bold mb-4">Endorsement Detail</h2>
      <div className="space-y-2">
        <div><span className="font-semibold">ID:</span> {endorsement.id}</div>
        <div><span className="font-semibold">Type:</span> {endorsement.type}</div>
        <div><span className="font-semibold">Description:</span> {endorsement.description}</div>
        <div><span className="font-semibold">Date:</span> {endorsement.date}</div>
      </div>
    </div>
  );
} 