import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center p-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Healthcare Admin Panel
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Comprehensive healthcare administration system for managing members, claims, providers, and more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/members" className="group">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Members</h3>
              <p className="text-gray-600">Manage member information and coverage</p>
            </div>
          </Link>
          
          <Link href="/claims" className="group">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Claims</h3>
              <p className="text-gray-600">Process and track insurance claims</p>
            </div>
          </Link>
          
          <Link href="/providers" className="group">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Providers</h3>
              <p className="text-gray-600">Manage healthcare providers and networks</p>
            </div>
          </Link>
          
          <Link href="/pharmacies" className="group">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pharmacies</h3>
              <p className="text-gray-600">Manage pharmacy networks and prescriptions</p>
            </div>
          </Link>
          
          <Link href="/authorizations" className="group">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Authorizations</h3>
              <p className="text-gray-600">Handle prior authorizations and approvals</p>
            </div>
          </Link>
          
          <Link href="/billing" className="group">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Billing</h3>
              <p className="text-gray-600">Manage invoices and payments</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
