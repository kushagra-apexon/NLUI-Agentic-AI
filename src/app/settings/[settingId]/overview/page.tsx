"use client";
import { Card, Tag, Typography } from 'antd';

const { Title, Text } = Typography;

const mockSetting = {
  id: "SET001",
  name: "User Authentication Policy",
  status: "Active",
  description: "Configure password requirements and session timeouts",
};

function getStatusColor(status: string) {
  switch (status) {
    case 'Active': return 'green';
    case 'Inactive': return 'red';
    case 'Pending': return 'orange';
    case 'Draft': return 'gray';
    default: return 'default';
  }
}

export default function SettingOverviewPage() {
  return (
    <div className="p-6">
      <Card>
        <Title level={3}>{mockSetting.name}</Title>
        <Text type="secondary">{mockSetting.description}</Text>
        <div className="mt-4">
          <Tag color={getStatusColor(mockSetting.status)}>{mockSetting.status}</Tag>
        </div>
      </Card>
    </div>
  );
} 