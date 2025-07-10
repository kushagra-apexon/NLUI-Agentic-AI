import { redirect } from "next/navigation";

export default function InvoiceDetailPage({ params }: { params: { invoiceId: string } }) {
  redirect(`/billing/${params.invoiceId}/overview`);
  return null;
} 