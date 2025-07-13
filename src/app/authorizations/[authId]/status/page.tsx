"use client";
import { Card, Button, Space, Descriptions, Badge, Typography } from 'antd';
import { CheckCircleOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

// Mock data for authorization status
const mockAuth = {
  id: "AUTH001",
  status: "Approved",
  submittedDate: "2024-01-15",
  approvedDate: "2024-01-16",
  submittedBy: "Dr. Sarah Johnson",
  approvedBy: "Admin User"
};

export default function AuthorizationStatusPage() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <CheckCircleOutlined /> Authorization Status
          </Title>
          <Space>
            <Button type="primary">Update Status</Button>
          </Space>
        </div>
        
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Status">
            <Badge status="success" text={mockAuth.status} />
          </Descriptions.Item>
          <Descriptions.Item label="Submitted Date">
            <CalendarOutlined /> {mockAuth.submittedDate}
          </Descriptions.Item>
          <Descriptions.Item label="Approved Date">
            <CalendarOutlined /> {mockAuth.approvedDate}
          </Descriptions.Item>
          <Descriptions.Item label="Submitted By">
            <UserOutlined /> {mockAuth.submittedBy}
          </Descriptions.Item>
          <Descriptions.Item label="Approved By">
            <UserOutlined /> {mockAuth.approvedBy}
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title="Status Timeline">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircleOutlined style={{ color: '#52c41a' }} />
            <Text>Approved - {mockAuth.approvedDate}</Text>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleOutlined style={{ color: '#1890ff' }} />
            <Text>Submitted - {mockAuth.submittedDate}</Text>
          </div>
        </div>
      </Card>
    </div>
  );
} 