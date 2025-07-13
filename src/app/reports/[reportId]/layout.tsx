'use client';

import React from 'react';
import { Card, Button, Space, Typography, Tag, Row, Col, Descriptions, Tabs } from 'antd';
import { ArrowLeftOutlined, EditOutlined, DownloadOutlined, ShareAltOutlined, ReloadOutlined, BarChartOutlined, SettingOutlined, FileTextOutlined } from '@ant-design/icons';
import { useParams, usePathname } from 'next/navigation';

const { Title, Text } = Typography;

// Mock data for report details
const mockReport = {
  id: "RPT001",
  name: "Monthly Claims Summary",
  type: "Claims",
  status: "Completed",
  schedule: "Monthly",
  lastRun: "2024-01-15 10:30:00",
  fileSize: "2.5 MB",
  recordCount: "15,432",
  executionTime: "2m 15s",
  format: "PDF",
  createdBy: "Admin User"
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed': return 'green';
    case 'Running': return 'blue';
    case 'Failed': return 'red';
    case 'Scheduled': return 'orange';
    default: return 'default';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Claims': return 'blue';
    case 'Providers': return 'green';
    case 'Members': return 'purple';
    case 'Utilization': return 'orange';
    case 'Billing': return 'red';
    case 'Pharmacies': return 'cyan';
    case 'Authorizations': return 'magenta';
    case 'Financial': return 'gold';
    default: return 'default';
  }
};

export default function ReportDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const pathname = usePathname();
  const reportId = params.reportId as string;

  const getActiveKey = () => {
    if (pathname.includes('/parameters')) return 'parameters';
    if (pathname.includes('/output')) return 'output';
    return 'overview';
  };

  const handleTabChange = (key: string) => {
    const basePath = `/reports/${reportId}`;
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
      key: 'parameters',
      label: (
        <span>
          <SettingOutlined />
          Parameters
        </span>
      ),
      children: <div>Parameters content</div>
    },
    {
      key: 'output',
      label: (
        <span>
          <FileTextOutlined />
          Output
        </span>
      ),
      children: <div>Output content</div>
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
                Back to Reports
              </Button>
              <div>
                <Title level={3} style={{ margin: 0 }}>
                  Report: {mockReport.name}
                </Title>
                <Text type="secondary">
                  {mockReport.id} - Created by {mockReport.createdBy}
                </Text>
              </div>
            </div>
            <Space>
              <Button icon={<EditOutlined />}>Edit</Button>
              <Button icon={<DownloadOutlined />}>Download</Button>
              <Button icon={<ShareAltOutlined />}>Share</Button>
              <Button icon={<ReloadOutlined />}>Run Now</Button>
            </Space>
          </div>
        </Space>
      </div>

      {/* Status Summary */}
      <Card className="mb-6">
        <Row gutter={16}>
          <Col span={6}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Status">
                <Tag color={getStatusColor(mockReport.status)}>
                  {mockReport.status}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Type">
                <Tag color={getTypeColor(mockReport.type)}>
                  {mockReport.type}
                </Tag>
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={6}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Schedule">
                {mockReport.schedule}
              </Descriptions.Item>
              <Descriptions.Item label="Last Run">
                {mockReport.lastRun}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={6}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="File Size">
                {mockReport.fileSize}
              </Descriptions.Item>
              <Descriptions.Item label="Records">
                {mockReport.recordCount}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={6}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Execution Time">
                {mockReport.executionTime}
              </Descriptions.Item>
              <Descriptions.Item label="Format">
                {mockReport.format}
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