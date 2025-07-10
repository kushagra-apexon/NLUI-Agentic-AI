import { redirect } from "next/navigation";

export default function PharmacyDetailPage({ params }: { params: { pharmacyId: string } }) {
  redirect(`/pharmacies/${params.pharmacyId}/profile`);
  return null;
} 