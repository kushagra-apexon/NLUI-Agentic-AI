import { redirect } from "next/navigation";

export default function AuthorizationDetailPage({ params }: { params: { authId: string } }) {
  redirect(`/authorizations/${params.authId}/overview`);
  return null;
} 