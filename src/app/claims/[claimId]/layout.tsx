"use client";
import React from 'react';
import { Card, Button, Space, Typography, Tag, Row, Col, Descriptions, Tabs } from 'antd';
import { ArrowLeftOutlined, EditOutlined, PrinterOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useParams, usePathname } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';

const { Title, Text } = Typography;

// Mock data for claim details
const mockClaim = {
  id: "CLM001",
  amount: "$1,250.00",
  status: "Approved",
  submittedDate: "2024-01-15",
  memberName: "John Doe"
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Approved': return 'green';
    case 'Pending': return 'orange';
    case 'Denied': return 'red';
    default: return 'default';
  }
};

export default function ClaimLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  const claimId = params.claimId as string;

  const getActiveKey = () => {
    if (pathname.includes('/attachments')) return 'attachments';
    if (pathname.includes('/notes')) return 'notes';
    if (pathname.includes('/history')) return 'history';
    if (pathname.includes('/adjudication')) return 'adjudication';
    return 'overview';
  };

  const handleTabChange = (key: string) => {
    const basePath = `/claims/${claimId}`;
    if (key === 'overview') {
      window.location.href = basePath;
    } else {
      window.location.href = `${basePath}/${key}`;
    }
  };

  const tabItems = [
    {
      key: 'overview',
      label: 'Overview',
      children: children
    },
    {
      key: 'attachments',
      label: 'Attachments',
      children: children
    },
    {
      key: 'notes',
      label: 'Notes',
      children: children
    },
    {
      key: 'history',
      label: 'History',
      children: children
    },
    {
      key: 'adjudication',
      label: 'Adjudication',
      children: children
    }
  ];

  return (
    <div className="p-6">
      <Breadcrumb />
      <div className="mb-6">
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button icon={<ArrowLeftOutlined />} type="text">
                Back to Claims
              </Button>
              <div>
                <Title level={3} style={{ margin: 0 }}>
                  Claim: {mockClaim.id}
                </Title>
                <Text type="secondary">
                  {mockClaim.memberName} - {mockClaim.amount}
                </Text>
              </div>
            </div>
            <Space>
              <Button icon={<EditOutlined />}>Edit</Button>
              <Button icon={<PrinterOutlined />}>Print</Button>
              <Button icon={<ShareAltOutlined />}>Share</Button>
            </Space>
          </div>
        </Space>
      </div>

      <Card className="mb-6">
        <Row gutter={16}>
          <Col span={6}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Status">
                <Tag color={getStatusColor(mockClaim.status)}>
                  {mockClaim.status}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Amount">
                {mockClaim.amount}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={6}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Submitted Date">
                {mockClaim.submittedDate}
              </Descriptions.Item>
              <Descriptions.Item label="Member">
                {mockClaim.memberName}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>

      <Card>
        <Tabs
          activeKey={getActiveKey()}
          onChange={handleTabChange}
          items={tabItems}
          size="large"
        />
      </Card>
    </div>
  );
} 