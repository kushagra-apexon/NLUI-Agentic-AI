"use client";
import { Card, Table, Tag, Button } from 'antd';
import { UserOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

import { useRouter } from 'next/navigation';

// Mock data for providers
const mockProviders = [
  {
    id: "PROV001",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    location: "New York, NY",
    phone: "(555) 123-4567",
    email: "sarah.johnson@healthcare.com",
    status: "Active"
  },
  {
    id: "PROV002",
    name: "Dr. Michael Chen",
    specialty: "Orthopedics",
    location: "Los Angeles, CA",
    phone: "(555) 234-5678",
    email: "michael.chen@healthcare.com",
    status: "Active"
  },
  {
    id: "PROV003",
    name: "Dr. Emily Davis",
    specialty: "Pediatrics",
    location: "Chicago, IL",
    phone: "(555) 345-6789",
    email: "emily.davis@healthcare.com",
    status: "Inactive"
  }
];

const statusColors: { [key: string]: string } = {
  Active: "green",
  Inactive: "red",
  Pending: "orange",
};

export default function ProvidersPage() {
  const router = useRouter();
  const columns = [
    {
      title: 'Provider ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name: string) => (
        <span className="flex items-center gap-2">
          <UserOutlined />
          {name}
        </span>
      ),
    },
    {
      title: 'Specialty',
      dataIndex: 'specialty',
      key: 'specialty',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      render: (location: string) => (
        <span className="flex items-center gap-2">
          <EnvironmentOutlined />
          {location}
        </span>
      ),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (phone: string) => (
        <span className="flex items-center gap-2">
          <PhoneOutlined />
          {phone}
        </span>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (email: string) => (
        <span className="flex items-center gap-2">
          <MailOutlined />
          {email}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={statusColors[status] || "default"}>{status}</Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Button type="primary" size="small">
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><UserOutlined /> Healthcare Providers</span>}
        className="shadow-lg rounded-lg"
      >
        <Table
          dataSource={mockProviders}
          columns={columns}
          rowKey="id"
          onRow={record => ({
            onClick: () => router.push(`/providers/${record.id}`),
            style: { cursor: 'pointer' },
          })}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
} 
