'use client';

import { Card, Typography, Row, Col, Descriptions, Tag, Progress, Button, Space } from 'antd';
import { DollarOutlined, CalendarOutlined, FileTextOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

// Mock data for utilization request overview
const mockUtilizationRequest = {
  id: 'UTL001',
  requestType: 'Prior Authorization',
  serviceType: 'Specialist Consultation',
  status: 'In Review',
  submittedDate: '2024-01-15',
  reviewDeadline: '2024-01-22',
  assignedTo: 'Dr. Sarah Johnson',
  lastUpdated: '2024-01-18',
  memberName: 'John Smith',
  memberId: 'M001',
  diagnosis: 'Hypertension',
  requestedService: 'Cardiology Consultation',
  clinicalNotes: 'Patient has been experiencing chest pain and shortness of breath. Previous treatments have been ineffective.',
  clinicalRationale: 'Specialist consultation is medically necessary to determine appropriate treatment plan.',
  estimatedCost: '$2,500',
  reviewProgress: 75,
  supportingDocuments: ['Medical Report.pdf', 'Lab Results.pdf', 'Imaging.pdf'],
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Approved': return 'green';
    case 'Denied': return 'red';
    case 'Pending': return 'orange';
    case 'In Review': return 'blue';
    default: return 'default';
  }
};

export default function UtilizationOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Request Information */}
      <Card title="Request Information" className="mb-6">
        <Row gutter={16}>
          <Col span={12}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Request ID">
                <Text strong>{mockUtilizationRequest.id}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Request Type">
                {mockUtilizationRequest.requestType}
              </Descriptions.Item>
              <Descriptions.Item label="Service Type">
                {mockUtilizationRequest.serviceType}
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag color={getStatusColor(mockUtilizationRequest.status)}>
                  {mockUtilizationRequest.status}
                </Tag>
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Submitted Date">
                {mockUtilizationRequest.submittedDate}
              </Descriptions.Item>
              <Descriptions.Item label="Review Deadline">
                {mockUtilizationRequest.reviewDeadline}
              </Descriptions.Item>
              <Descriptions.Item label="Assigned To">
                {mockUtilizationRequest.assignedTo}
              </Descriptions.Item>
              <Descriptions.Item label="Last Updated">
                {mockUtilizationRequest.lastUpdated}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>

      {/* Member Information */}
      <Card title="Member Information" className="mb-6">
        <Row gutter={16}>
          <Col span={12}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Member Name">
                <Text strong>{mockUtilizationRequest.memberName}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Member ID">
                {mockUtilizationRequest.memberId}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Primary Diagnosis">
                {mockUtilizationRequest.diagnosis}
              </Descriptions.Item>
              <Descriptions.Item label="Requested Service">
                {mockUtilizationRequest.requestedService}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>

      {/* Clinical Information */}
      <Card title="Clinical Information" className="mb-6">
        <Row gutter={16}>
          <Col span={12}>
            <Title level={5}>Clinical Notes</Title>
            <Paragraph>
              {mockUtilizationRequest.clinicalNotes}
            </Paragraph>
          </Col>
          <Col span={12}>
            <Title level={5}>Clinical Rationale</Title>
            <Paragraph>
              {mockUtilizationRequest.clinicalRationale}
            </Paragraph>
          </Col>
        </Row>
      </Card>

      {/* Financial Information */}
      <Card title="Financial Information" className="mb-6">
        <Row gutter={16}>
          <Col span={8}>
            <Card size="small">
              <div className="text-center">
                <DollarOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                <div className="mt-2">
                  <Text strong>Estimated Cost</Text>
                </div>
                <div className="text-lg font-bold text-green-600">
                  {mockUtilizationRequest.estimatedCost}
                </div>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small">
              <div className="text-center">
                <CalendarOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                <div className="mt-2">
                  <Text strong>Review Deadline</Text>
                </div>
                <div className="text-lg font-bold text-blue-600">
                  {mockUtilizationRequest.reviewDeadline}
                </div>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small">
              <div className="text-center">
                <FileTextOutlined style={{ fontSize: '24px', color: '#722ed6' }} />
                <div className="mt-2">
                  <Text strong>Supporting Documents</Text>
                </div>
                <div className="text-lg font-bold text-purple-600">
                  {mockUtilizationRequest.supportingDocuments.length}
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Review Progress */}
      <Card title="Review Progress" className="mb-6">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <Text>Review Completion</Text>
            <Text strong>{mockUtilizationRequest.reviewProgress}%</Text>
          </div>
          <Progress 
            percent={mockUtilizationRequest.reviewProgress} 
            status="active"
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
          />
        </div>
        <Row gutter={16}>
          <Col span={8}>
            <div className="text-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
              <Text>Initial Review</Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="text-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
              <Text>Clinical Review</Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="text-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full mx-auto mb-2"></div>
              <Text>Final Decision</Text>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Supporting Documents */}
      <Card title="Supporting Documents" className="mb-6">
        <div className="space-y-2">
          {mockUtilizationRequest.supportingDocuments.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded">
              <div className="flex items-center space-x-3">
                <FileTextOutlined style={{ color: '#1890ff' }} />
                <Text>{doc}</Text>
              </div>
              <Space>
                <Button size="small">View</Button>
                <Button size="small">Download</Button>
              </Space>
            </div>
          ))}
        </div>
      </Card>

      {/* Actions */}
      <Card title="Actions" className="mb-6">
        <Space>
          <Button type="primary">Approve Request</Button>
          <Button danger>Deny Request</Button>
          <Button>Request Additional Information</Button>
          <Button>Assign to Different Reviewer</Button>
        </Space>
      </Card>
    </div>
  );
} 