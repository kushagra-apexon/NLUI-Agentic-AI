import { redirect } from "next/navigation";

export default function RequestDetailPage({ params }: { params: { requestId: string } }) {
  redirect(`/utilization/${params.requestId}/overview`);
  return null;
} 