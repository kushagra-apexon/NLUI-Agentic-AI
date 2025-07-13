"use client";
import { Card, Typography, Button, Space, Descriptions, Tag, Badge, Rate } from 'antd';
import { MedicineBoxOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined, ClockCircleOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const { Title, Text } = Typography;

// Mock pharmacy data
const mockPharmacy = {
  id: 'PHM001',
  name: 'City Pharmacy',
  type: 'Retail',
  status: 'Active',
  rating: 4.5,
  totalReviews: 125,
  location: '123 Main St, City, State',
  phone: '(555) 123-4567',
  email: 'info@citypharmacy.com',
  hours: 'Mon-Fri: 8AM-8PM, Sat: 9AM-6PM, Sun: 10AM-4PM',
  licenseNumber: 'PH123456',
  npi: '1234567890',
  owner: 'John Smith',
  established: '2010',
  inventoryCount: 2500,
  services: ['Prescription Filling', 'Medication Counseling', 'Immunizations'],
  specialties: ['Cardiology', 'Diabetes', 'Pediatrics'],
};

const typeColors: { [key: string]: string } = {
  Retail: "blue",
  Hospital: "purple",
  Specialty: "cyan"
};

export default function PharmacyProfilePage() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <MedicineBoxOutlined /> Pharmacy Profile
          </Title>
          <Space>
            <Button>Edit</Button>
            <Button type="primary">Update Status</Button>
          </Space>
        </div>

        <Descriptions bordered column={2}>
          <Descriptions.Item label="Pharmacy ID" span={2}>
            <Text strong>{mockPharmacy.id}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Name">
            <Text strong>{mockPharmacy.name}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Type">
            <Tag color={typeColors[mockPharmacy.type] || "default"}>{mockPharmacy.type}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Badge 
              status={mockPharmacy.status === "Active" ? "success" : "error"} 
              text={mockPharmacy.status}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Rating" span={2}>
            <div className="flex items-center gap-2">
              <Rate disabled defaultValue={mockPharmacy.rating} allowHalf />
              <Text strong>{mockPharmacy.rating}</Text>
              <Text type="secondary">({mockPharmacy.totalReviews} reviews)</Text>
            </div>
          </Descriptions.Item>
          <Descriptions.Item label="Address" span={2}>
            <EnvironmentOutlined /> {mockPharmacy.location}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            <PhoneOutlined /> {mockPharmacy.phone}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            <MailOutlined /> {mockPharmacy.email}
          </Descriptions.Item>
          <Descriptions.Item label="Hours" span={2}>
            <ClockCircleOutlined /> {mockPharmacy.hours}
          </Descriptions.Item>
          <Descriptions.Item label="License Number">
            {mockPharmacy.licenseNumber}
          </Descriptions.Item>
          <Descriptions.Item label="NPI">
            {mockPharmacy.npi}
          </Descriptions.Item>
          <Descriptions.Item label="Owner">
            {mockPharmacy.owner}
          </Descriptions.Item>
          <Descriptions.Item label="Established">
            {mockPharmacy.established}
          </Descriptions.Item>
          <Descriptions.Item label="Inventory Count" span={2}>
            <Text strong style={{ color: "#1890ff" }}>
              {mockPharmacy.inventoryCount.toLocaleString()} items
            </Text>
          </Descriptions.Item>
          <Descriptions.Item label="Services" span={2}>
            <div className="space-y-1">
              {mockPharmacy.services.map((service, index) => (
                <Tag key={index} color="blue">{service}</Tag>
              ))}
            </div>
          </Descriptions.Item>
          <Descriptions.Item label="Specialties" span={2}>
            <div className="space-y-1">
              {mockPharmacy.specialties.map((specialty, index) => (
                <Tag key={index} color="purple">{specialty}</Tag>
              ))}
            </div>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 