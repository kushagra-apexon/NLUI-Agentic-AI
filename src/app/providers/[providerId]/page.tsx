"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions, Button } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined, CalendarOutlined, IdcardOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import "antd/dist/reset.css";

// Mock provider data
const mockProviders = [
  {
    id: "PRV001",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    status: "Active",
    license: "MD-12345",
    npi: "1234567890",
    address: "123 Medical Plaza, Healthcare City, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "dr.johnson@healthcare.com",
    hospital: "City General Hospital",
    experience: "15 years",
    rating: "4.9",
    joinDate: "2018-03-15",
    lastVisit: "2024-01-20",
    description: "Board-certified cardiologist with expertise in interventional procedures"
  },
  {
    id: "PRV002",
    name: "Dr. Michael Chen",
    specialty: "Orthopedics",
    status: "Active",
    license: "MD-67890",
    npi: "0987654321",
    address: "456 Orthopedic Center, Medical District, NY 10002",
    phone: "+1 (555) 234-5678",
    email: "dr.chen@ortho.com",
    hospital: "Regional Medical Center",
    experience: "12 years",
    rating: "4.7",
    joinDate: "2019-07-22",
    lastVisit: "2024-01-18",
    description: "Specialized in sports medicine and joint replacement surgeries"
  },
  {
    id: "PRV003",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    status: "Inactive",
    license: "MD-11111",
    npi: "1122334455",
    address: "789 Children's Hospital, Pediatric District, NY 10003",
    phone: "+1 (555) 345-6789",
    email: "dr.rodriguez@pediatrics.com",
    hospital: "Children's Medical Center",
    experience: "8 years",
    rating: "4.8",
    joinDate: "2020-01-10",
    lastVisit: "2023-12-15",
    description: "Pediatrician specializing in developmental medicine"
  }
];

const specialtyColors: { [key: string]: string } = {
  Cardiology: "red",
  Orthopedics: "blue",
  Pediatrics: "green",
  Neurology: "purple",
  Oncology: "orange"
};

const statusColors: { [key: string]: string } = {
  Active: "green",
  Inactive: "red",
  Pending: "orange"
};

export default function ProviderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const providerId = Array.isArray(params.providerId) ? params.providerId[0] : params.providerId;
  
  // Find the provider by ID
  const provider = mockProviders.find(p => p.id === providerId);
  
  if (!provider) {
    return <div className="text-red-600 p-8">Provider not found.</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><UserOutlined /> Provider Details</span>}
        className="shadow-lg rounded-lg"
        extra={
          <Button 
            type="primary" 
            icon={<UserOutlined />}
            onClick={() => router.push(`/providers/${providerId}/profile`)}
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
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Provider ID</span>}>
            {provider.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Name</span>}>
            {provider.name}
          </Descriptions.Item>
          <Descriptions.Item label="Specialty">
            <Tag color={specialtyColors[provider.specialty] || "default"}>{provider.specialty}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[provider.status] || "default"}>{provider.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><IdcardOutlined /> License</span>}>
            {provider.license}
          </Descriptions.Item>
          <Descriptions.Item label="NPI">
            {provider.npi}
          </Descriptions.Item>
          <Descriptions.Item label="Rating">
            ⭐ {provider.rating}/5.0
          </Descriptions.Item>
          <Descriptions.Item label="Experience">
            {provider.experience}
          </Descriptions.Item>
          <Descriptions.Item label="Hospital">
            {provider.hospital}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><EnvironmentOutlined /> Address</span>}>
            {provider.address}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><PhoneOutlined /> Phone</span>}>
            {provider.phone}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><MailOutlined /> Email</span>}>
            {provider.email}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {provider.description}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Join Date</span>}>
            {provider.joinDate}
          </Descriptions.Item>
          <Descriptions.Item label="Last Visit">
            {provider.lastVisit}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 