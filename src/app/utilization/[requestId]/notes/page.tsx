export default function RequestNotesTab({ params }: { params: { requestId: string } }) {
  return <div>Notes for request #{params.requestId} (mock data)</div>;
} 