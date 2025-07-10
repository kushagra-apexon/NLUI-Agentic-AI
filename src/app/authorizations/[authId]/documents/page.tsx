export default function AuthorizationDocumentsTab({ params }: { params: { authId: string } }) {
  return <div>Documents for authorization #{params.authId} (mock data)</div>;
} 