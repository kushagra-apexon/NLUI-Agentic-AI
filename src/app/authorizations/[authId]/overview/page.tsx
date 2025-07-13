"use client";
import { Card, Typography, Button, Space, Descriptions, Tag, Badge, Timeline } from 'antd';
import { FileTextOutlined, UserOutlined, DollarOutlined, CalendarOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const { Title, Text } = Typography;

// Mock authorization data
const mockAuthorization = {
  id: 'AUTH001',
  memberName: 'John Smith',
  memberId: 'M001',
  service: 'Cardiac Surgery',
  provider: 'Dr. Sarah Johnson',
  status: 'Approved',
  urgency: 'High',
  amount: 25000,
  diagnosis: 'Coronary Artery Disease',
  procedure: 'Coronary Artery Bypass Graft',
  facility: 'City Hospital',
  requestedDate: '2024-01-15',
  approvedDate: '2024-01-18',
  notes: 'Urgent procedure required for patient safety.',
  documents: ['Medical Report.pdf', 'Lab Results.pdf', 'Imaging.pdf'],
};

const urgencyColors: { [key: string]: string } = {
  High: "red",
  Medium: "orange",
  Low: "green"
};

export default function AuthorizationOverviewTab() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <FileTextOutlined /> Authorization Overview
          </Title>
          <Space>
            <Button>Edit</Button>
            <Button type="primary">Approve</Button>
          </Space>
        </div>

        <Descriptions bordered column={2}>
          <Descriptions.Item label="Authorization ID" span={2}>
            <Text strong>{mockAuthorization.id}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Member Name">
            <UserOutlined /> {mockAuthorization.memberName}
          </Descriptions.Item>
          <Descriptions.Item label="Member ID">
            {mockAuthorization.memberId}
          </Descriptions.Item>
          <Descriptions.Item label="Service">
            {mockAuthorization.service}
          </Descriptions.Item>
          <Descriptions.Item label="Provider">
            {mockAuthorization.provider}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Badge 
              status={mockAuthorization.status === "Approved" ? "success" : mockAuthorization.status === "Pending" ? "processing" : "error"} 
              text={mockAuthorization.status}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Urgency">
            <Tag color={urgencyColors[mockAuthorization.urgency] || "default"}>
              {mockAuthorization.urgency}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Amount" span={2}>
            <Text strong style={{ fontSize: "18px", color: "#1890ff" }}>
              <DollarOutlined /> ${mockAuthorization.amount.toLocaleString()}
            </Text>
          </Descriptions.Item>
          <Descriptions.Item label="Diagnosis">
            {mockAuthorization.diagnosis}
          </Descriptions.Item>
          <Descriptions.Item label="Procedure">
            {mockAuthorization.procedure}
          </Descriptions.Item>
          <Descriptions.Item label="Facility">
            {mockAuthorization.facility}
          </Descriptions.Item>
          <Descriptions.Item label="Requested Date">
            <CalendarOutlined /> {mockAuthorization.requestedDate}
          </Descriptions.Item>
          {mockAuthorization.approvedDate && (
            <Descriptions.Item label="Approved Date">
              <CalendarOutlined /> {mockAuthorization.approvedDate}
            </Descriptions.Item>
          )}
          <Descriptions.Item label="Notes" span={2}>
            {mockAuthorization.notes}
          </Descriptions.Item>
          <Descriptions.Item label="Documents" span={2}>
            <div className="space-y-2">
              {mockAuthorization.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="flex items-center gap-2">
                    <FileTextOutlined />
                    {doc}
                  </span>
                  <Button size="small">Download</Button>
                </div>
              ))}
            </div>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title="Timeline">
        <Timeline
          items={[
            {
              color: 'green',
              children: (
                <div>
                  <Text strong>Authorization Approved</Text>
                  <div>Approved by Admin on {mockAuthorization.approvedDate}</div>
                </div>
              ),
            },
            {
              color: 'blue',
              children: (
                <div>
                  <Text strong>Under Review</Text>
                  <div>Reviewed by Medical Director on 2024-06-02</div>
                </div>
              ),
            },
            {
              color: 'blue',
              children: (
                <div>
                  <Text strong>Authorization Requested</Text>
                  <div>Requested by {mockAuthorization.provider} on {mockAuthorization.requestedDate}</div>
                </div>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
} 