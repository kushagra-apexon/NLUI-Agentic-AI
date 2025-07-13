"use client";
import React from 'react';
import { Card, Tag, Typography } from 'antd';

const { Title, Text } = Typography;

const mockUtilization = {
  id: "UTL001",
  status: "Pending",
  type: "Review",
};

function getStatusColor(status: string) {
  switch (status) {
    case 'Approved': return 'green';
    case 'Denied': return 'red';
    case 'Pending': return 'orange';
    case 'In Review': return 'blue';
    default: return 'default';
  }
}

export default function UtilizationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6">
      <Card>
        <Title level={3}>Utilization Request</Title>
        <Text type="secondary">Type: {mockUtilization.type}</Text>
        <div className="mt-4">
          <Tag color={getStatusColor(mockUtilization.status)}>{mockUtilization.status}</Tag>
        </div>
      </Card>
      <div className="mt-6">{children}</div>
    </div>
  );
} 