"use client";
import React from 'react';
import { Card, Tag, Typography } from 'antd';

const { Title, Text } = Typography;

const mockUser = {
  id: "USR001",
  name: "John Doe",
  status: "Active",
  role: "Admin",
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

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6">
      <Card>
        <Title level={3}>{mockUser.name}</Title>
        <Text type="secondary">Role: {mockUser.role}</Text>
        <div className="mt-4">
          <Tag color={getStatusColor(mockUser.status)}>{mockUser.status}</Tag>
        </div>
      </Card>
      <div className="mt-6">{children}</div>
    </div>
  );
} 