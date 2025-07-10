import { redirect } from "next/navigation";

export default function ProviderDetailPage({ params }: { params: { providerId: string } }) {
  redirect(`/providers/${params.providerId}/profile`);
  return null;
} 