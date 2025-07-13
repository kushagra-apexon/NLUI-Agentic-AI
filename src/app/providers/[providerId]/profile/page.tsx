"use client";
import { Card, Descriptions, Tag, Rate } from 'antd';
import { UserOutlined, IdcardOutlined, EnvironmentOutlined, StarOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock provider data
const mockProvider = {
  id: "PROV001",
  name: "Dr. Sarah Johnson",
  specialty: "Cardiology",
  npi: "1234567890",
  status: "Active",
  rating: 4.8,
  location: "New York, NY",
  phone: "(555) 123-4567",
  email: "sarah.johnson@healthcare.com",
  experience: "15 years",
  education: "Harvard Medical School"
};

export default function ProviderProfilePage() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><UserOutlined /> Provider Profile</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions
          title={<span className="text-lg font-bold flex items-center gap-2"><UserOutlined /> Provider Information</span>}
          bordered
          column={1}
        >
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><IdcardOutlined /> Provider ID</span>}>
            {mockProvider.id}
          </Descriptions.Item>
          <Descriptions.Item label="Name">
            {mockProvider.name}
          </Descriptions.Item>
          <Descriptions.Item label="Specialty">
            <Tag color="blue">{mockProvider.specialty}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="NPI">
            {mockProvider.npi}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color="green">{mockProvider.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><StarOutlined /> Rating</span>}>
            <Rate disabled defaultValue={mockProvider.rating} />
            <span className="ml-2">({mockProvider.rating})</span>
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><EnvironmentOutlined /> Location</span>}>
            {mockProvider.location}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            {mockProvider.phone}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {mockProvider.email}
          </Descriptions.Item>
          <Descriptions.Item label="Experience">
            {mockProvider.experience}
          </Descriptions.Item>
          <Descriptions.Item label="Education">
            {mockProvider.education}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 