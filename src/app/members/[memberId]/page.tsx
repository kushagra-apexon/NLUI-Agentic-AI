import { redirect } from "next/navigation";

export default function MemberDetailPage({ params }: { params: { memberId: string } }) {
  redirect(`/members/${params.memberId}/profile`);
  return null;
} 