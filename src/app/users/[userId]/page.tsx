export default function UserDetailPage({ params }: { params: { userId: string } }) {
  return <div>Details for user #{params.userId} (mock data)</div>;
} 