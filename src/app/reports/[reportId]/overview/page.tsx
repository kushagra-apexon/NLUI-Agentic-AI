'use client';

import { Card, Typography, Row, Col, Descriptions, Tag, List, Avatar, Button, Space } from 'antd';
import { DatabaseOutlined, ClockCircleOutlined, FileTextOutlined, UserOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const { Text, Paragraph } = Typography;

// Mock data for report overview
const mockReport = {
  id: 'REP001',
  name: 'Claims Analysis Report',
  description: 'Comprehensive analysis of claims data including trends, patterns, and key metrics for the specified period.',
  dataSource: 'Claims Database',
  executionTime: '2.5 minutes',
  format: 'PDF, Excel',
  keyMetrics: [
    { label: 'Total Claims', value: '1,234', change: '+12%' },
    { label: 'Total Amount', value: '$456K', change: '+8%' },
    { label: 'Avg Processing Time', value: '3.2 days', change: '-15%' },
    { label: 'Approval Rate', value: '94.2%', change: '+2%' },
  ],
  parameters: {
    dateRange: 'Jan 1, 2024 - Jan 31, 2024',
    claimTypes: 'Medical, Pharmacy, Dental',
    providers: 'All Network Providers',
    members: 'All Active Members',
    status: 'All Statuses',
    amountRange: '$0 - $50,000',
  },
  recentExecutions: [
    { date: '2024-01-18 10:30', status: 'Completed', duration: '2.5 min', records: '1,234' },
    { date: '2024-01-17 09:15', status: 'Failed', duration: '1.2 min', records: '0' },
    { date: '2024-01-16 14:45', status: 'Completed', duration: '2.8 min', records: '1,198' },
  ],
  recipients: ['admin@company.com', 'finance@company.com', 'operations@company.com'],
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

export default function ReportOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Report Description */}
      <Card title="Report Description" className="mb-6">
        <Paragraph>
          {mockReport.description}
        </Paragraph>
        <Row gutter={16} className="mt-4">
          <Col span={8}>
            <div className="flex items-center space-x-2">
              <DatabaseOutlined style={{ color: '#1890ff' }} />
              <Text>Data Source: {mockReport.dataSource}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex items-center space-x-2">
              <ClockCircleOutlined style={{ color: '#52c41a' }} />
              <Text>Execution Time: {mockReport.executionTime}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex items-center space-x-2">
              <FileTextOutlined style={{ color: '#722ed6' }} />
              <Text>Format: {mockReport.format}</Text>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Key Metrics */}
      <Card title="Key Metrics" className="mb-6">
        <Row gutter={16}>
          {mockReport.keyMetrics.map((metric, index) => (
            <Col span={6} key={index}>
              <Card size="small">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {metric.label}
                  </div>
                  <Tag color={metric.change.startsWith('+') ? 'green' : 'red'}>
                    {metric.change}
                  </Tag>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* Report Parameters */}
      <Card title="Report Parameters" className="mb-6">
        <Row gutter={16}>
          <Col span={12}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Date Range">
                {mockReport.parameters.dateRange}
              </Descriptions.Item>
              <Descriptions.Item label="Claim Types">
                {mockReport.parameters.claimTypes}
              </Descriptions.Item>
              <Descriptions.Item label="Providers">
                {mockReport.parameters.providers}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Members">
                {mockReport.parameters.members}
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                {mockReport.parameters.status}
              </Descriptions.Item>
              <Descriptions.Item label="Amount Range">
                {mockReport.parameters.amountRange}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>

      {/* Recent Executions */}
      <Card title="Recent Executions" className="mb-6">
        <List
          dataSource={mockReport.recentExecutions}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Button size="small" key="view">View</Button>,
                <Button size="small" key="download">Download</Button>
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar style={{ backgroundColor: getStatusColor(item.status) === 'green' ? '#52c41a' : 
                                 getStatusColor(item.status) === 'red' ? '#ff4d4f' : '#1890ff' }}>
                    {index + 1}
                  </Avatar>
                }
                title={
                  <Space>
                    <Text strong>{item.date}</Text>
                    <Tag color={getStatusColor(item.status)}>
                      {item.status}
                    </Tag>
                  </Space>
                }
                description={
                  <Space>
                    <Text type="secondary">Duration: {item.duration}</Text>
                    <Text type="secondary">Records: {item.records}</Text>
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      </Card>

      {/* Recipients */}
      <Card title="Report Recipients" className="mb-6">
        <List
          dataSource={mockReport.recipients}
          renderItem={(recipient) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={recipient}
                description="Email recipient"
              />
            </List.Item>
          )}
        />
      </Card>

      {/* Actions */}
      <Card title="Actions" className="mb-6">
        <Row gutter={16}>
          <Col span={6}>
            <Button type="primary" block>
              Run Report Now
            </Button>
          </Col>
          <Col span={6}>
            <Button block>
              Schedule Report
            </Button>
          </Col>
          <Col span={6}>
            <Button block>
              Edit Parameters
            </Button>
          </Col>
          <Col span={6}>
            <Button block>
              Share Report
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Report Preview */}
      <Card title="Report Preview" className="mb-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <FileTextOutlined style={{ fontSize: '48px', color: '#d9d9d9' }} />
          <div className="mt-4">
            <Text type="secondary">Report preview will be displayed here</Text>
          </div>
          <div className="mt-2">
            <Button type="primary">Generate Preview</Button>
          </div>
        </div>
      </Card>
    </div>
  );
} 