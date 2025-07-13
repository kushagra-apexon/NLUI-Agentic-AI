"use client";
import { Card, Tag, Typography } from 'antd';

const { Title, Text } = Typography;

const mockUser = {
  id: "USR001",
  name: "John Doe",
  status: "Active",
  email: "john.doe@example.com",
};

function getStatusColor(status: string) {
  switch (status) {
    case 'Active': return 'green';
    case 'Inactive': return 'red';
    case 'Pending': return 'orange';
    case 'Suspended': return 'red';
    default: return 'default';
  }
}

export default function UserOverviewPage() {
  return (
    <div className="p-6">
      <Card>
        <Title level={3}>{mockUser.name}</Title>
        <Text type="secondary">Email: {mockUser.email}</Text>
        <div className="mt-4">
          <Tag color={getStatusColor(mockUser.status)}>{mockUser.status}</Tag>
        </div>
      </Card>
    </div>
  );
} 