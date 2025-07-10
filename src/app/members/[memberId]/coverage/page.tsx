"use client";
import { useParams, useRouter } from "next/navigation";

export default function CoverageTabPage() {
  const { memberId } = useParams();
  const router = useRouter();
  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-8 mt-8">
      <h2 className="text-lg font-bold mb-4">Coverage for Member #{memberId}</h2>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        onClick={() => router.push(`/members/${memberId}/coverage/policies`)}
      >
        View Policies
      </button>
    </div>
  );
} 