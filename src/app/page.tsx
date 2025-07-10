import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <div className="bg-white rounded shadow p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to the US Healthcare Admin Panel</h1>
        <p className="text-lg text-gray-600 mb-4">Select a module from the sidebar to get started.</p>
        <div className="mt-8">
          <span className="text-gray-400">(You can customize this dashboard page as needed.)</span>
        </div>
      </div>
    </div>
  );
}
