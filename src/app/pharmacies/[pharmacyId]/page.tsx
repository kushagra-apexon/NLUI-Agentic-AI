"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions, Button } from 'antd';
import { MedicineBoxOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import "antd/dist/reset.css";

// Mock pharmacy data
const mockPharmacies = [
  {
    id: "PHM001",
    name: "City Center Pharmacy",
    type: "Retail",
    status: "Active",
    address: "123 Main Street, Downtown, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "info@citycenterpharmacy.com",
    license: "PH-12345",
    owner: "John Smith",
    established: "2015-03-15",
    lastInspection: "2024-01-10",
    rating: "4.8",
    description: "Full-service retail pharmacy serving the downtown community"
  },
  {
    id: "PHM002",
    name: "Community Health Pharmacy",
    type: "Community",
    status: "Active",
    address: "456 Oak Avenue, Suburbia, NY 10002",
    phone: "+1 (555) 234-5678",
    email: "contact@communityhealth.com",
    license: "PH-67890",
    owner: "Sarah Johnson",
    established: "2018-07-22",
    lastInspection: "2024-01-15",
    rating: "4.6",
    description: "Community-focused pharmacy with specialized services"
  },
  {
    id: "PHM003",
    name: "Hospital Pharmacy",
    type: "Hospital",
    status: "Inactive",
    address: "789 Medical Center Blvd, Healthcare City, NY 10003",
    phone: "+1 (555) 345-6789",
    email: "pharmacy@hospital.com",
    license: "PH-11111",
    owner: "Medical Center Inc.",
    established: "2020-01-10",
    lastInspection: "2023-12-20",
    rating: "4.9",
    description: "Inpatient and outpatient pharmacy services"
  }
];

const typeColors: { [key: string]: string } = {
  Retail: "blue",
  Community: "green",
  Hospital: "red",
  Specialty: "purple"
};

const statusColors: { [key: string]: string } = {
  Active: "green",
  Inactive: "red",
  Pending: "orange"
};

export default function PharmacyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const pharmacyId = Array.isArray(params.pharmacyId) ? params.pharmacyId[0] : params.pharmacyId;
  
  // Find the pharmacy by ID
  const pharmacy = mockPharmacies.find(p => p.id === pharmacyId);
  
  if (!pharmacy) {
    return <div className="text-red-600 p-8">Pharmacy not found.</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><MedicineBoxOutlined /> Pharmacy Details</span>}
        className="shadow-lg rounded-lg"
        extra={
          <Button 
            type="primary" 
            icon={<UserOutlined />}
            onClick={() => router.push(`/pharmacies/${pharmacyId}/profile`)}
          >
            View Profile
          </Button>
        }
      >
        <Descriptions
          bordered
          column={1}
          size="middle"
        >
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><MedicineBoxOutlined /> Pharmacy ID</span>}>
            {pharmacy.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><MedicineBoxOutlined /> Name</span>}>
            {pharmacy.name}
          </Descriptions.Item>
          <Descriptions.Item label="Type">
            <Tag color={typeColors[pharmacy.type] || "default"}>{pharmacy.type}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[pharmacy.status] || "default"}>{pharmacy.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="License">
            {pharmacy.license}
          </Descriptions.Item>
          <Descriptions.Item label="Rating">
            ⭐ {pharmacy.rating}/5.0
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><EnvironmentOutlined /> Address</span>}>
            {pharmacy.address}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><PhoneOutlined /> Phone</span>}>
            {pharmacy.phone}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><MailOutlined /> Email</span>}>
            {pharmacy.email}
          </Descriptions.Item>
          <Descriptions.Item label="Owner">
            {pharmacy.owner}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {pharmacy.description}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Established</span>}>
            {pharmacy.established}
          </Descriptions.Item>
          <Descriptions.Item label="Last Inspection">
            {pharmacy.lastInspection}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 