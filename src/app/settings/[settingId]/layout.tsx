'use client';

import React from 'react';
import { Card, Button, Space, Typography, Tag, Row, Col, Descriptions, Tabs } from 'antd';
import { ArrowLeftOutlined, EditOutlined, SaveOutlined, ReloadOutlined, BarChartOutlined, HistoryOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useParams, usePathname } from 'next/navigation';

const { Title, Text } = Typography;

// Mock data for setting details
const mockSetting = {
  id: "SET001",
  name: "User Authentication Policy",
  description: "Configure password requirements and session timeouts",
  category: "Security",
  status: "Active",
  priority: "High",
  environment: "Production",
  version: "2.1.0",
  lastModified: "2024-01-15 10:30:00",
  modifiedBy: "Admin User",
  impact: "High"
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return 'green';
    case 'Inactive': return 'red';
    case 'Pending': return 'orange';
    case 'Draft': return 'gray';
    default: return 'default';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'System': return 'blue';
    case 'Security': return 'red';
    case 'Communication': return 'green';
    case 'Infrastructure': return 'purple';
    case 'Integration': return 'orange';
    case 'UI/UX': return 'cyan';
    case 'Data': return 'magenta';
    case 'Monitoring': return 'gold';
    default: return 'default';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'red';
    case 'Medium': return 'orange';
    case 'Low': return 'green';
    default: return 'default';
  }
};

export default function SettingDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const pathname = usePathname();
  const settingId = params.settingId as string;

  const getActiveKey = () => {
    if (pathname.includes('/history')) return 'history';
    if (pathname.includes('/validation')) return 'validation';
    return 'overview';
  };

  const handleTabChange = (key: string) => {
    const basePath = `/settings/${settingId}`;
    if (key === 'overview') {
      window.location.href = basePath;
    } else {
      window.location.href = `${basePath}/${key}`;
    }
  };

  const tabItems = [
    {
      key: 'overview',
      label: (
        <span>
          <BarChartOutlined />
          Overview
        </span>
      ),
      children: children
    },
    {
      key: 'history',
      label: (
        <span>
          <HistoryOutlined />
          History
        </span>
      ),
      children: <div>History content</div>
    },
    {
      key: 'validation',
      label: (
        <span>
          <CheckCircleOutlined />
          Validation
        </span>
      ),
      children: <div>Validation content</div>
    }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button icon={<ArrowLeftOutlined />} type="text">
                Back to Settings
              </Button>
              <div>
                <Title level={3} style={{ margin: 0 }}>
                  Setting: {mockSetting.name}
                </Title>
                <Text type="secondary">
                  {mockSetting.id} - {mockSetting.description}
                </Text>
              </div>
            </div>
            <Space>
              <Button icon={<EditOutlined />}>Edit</Button>
              <Button icon={<SaveOutlined />}>Save</Button>
              <Button icon={<ReloadOutlined />}>Reset</Button>
            </Space>
          </div>
        </Space>
      </div>

      {/* Setting Summary */}
      <Card className="mb-6">
        <Row gutter={16}>
          <Col span={6}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Status">
                <Tag color={getStatusColor(mockSetting.status)}>
                  {mockSetting.status}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Category">
                <Tag color={getCategoryColor(mockSetting.category)}>
                  {mockSetting.category}
                </Tag>
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={6}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Priority">
                <Tag color={getPriorityColor(mockSetting.priority)}>
                  {mockSetting.priority}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Environment">
                {mockSetting.environment}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={6}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Version">
                {mockSetting.version}
              </Descriptions.Item>
              <Descriptions.Item label="Last Modified">
                {mockSetting.lastModified}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={6}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Modified By">
                {mockSetting.modifiedBy}
              </Descriptions.Item>
              <Descriptions.Item label="Impact">
                <Tag color="red">{mockSetting.impact}</Tag>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>

      {/* Tabs */}
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