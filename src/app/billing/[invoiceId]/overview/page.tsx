"use client";
import { Card, Space, Button, Descriptions, Tag, Badge, Typography, Table, Timeline } from 'antd';
import { FileTextOutlined, UserOutlined, DollarOutlined, CalendarOutlined, CheckCircleOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const { Title, Text } = Typography;

// Mock invoice data
const mockInvoice = {
  id: 'INV001',
  memberName: 'John Smith',
  memberId: 'M001',
  type: 'Medical Services',
  status: 'Paid',
  amount: 2500,
  provider: 'Dr. Sarah Johnson',
  facility: 'City Hospital',
  description: 'Cardiology consultation and tests',
  issuedDate: '2024-01-15',
  dueDate: '2024-02-15',
  paidDate: '2024-01-20',
  lineItems: [
    { description: 'Consultation', amount: 150 },
    { description: 'ECG Test', amount: 200 },
    { description: 'Blood Work', amount: 150 },
  ]
};

const typeColors: { [key: string]: string } = {
  "Medical Services": "blue",
  Pharmacy: "purple",
  "Hospital Services": "red",
  Laboratory: "cyan"
};

export default function BillingOverviewTab() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <FileTextOutlined /> Invoice Overview
          </Title>
          <Space>
            <Button>Edit</Button>
            <Button type="primary">Send Reminder</Button>
          </Space>
        </div>

        <Descriptions bordered column={2}>
          <Descriptions.Item label="Invoice ID" span={2}>
            <Text strong>{mockInvoice.id}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Member Name">
            <UserOutlined /> {mockInvoice.memberName}
          </Descriptions.Item>
          <Descriptions.Item label="Member ID">
            {mockInvoice.memberId}
          </Descriptions.Item>
          <Descriptions.Item label="Type">
            <Tag color={typeColors[mockInvoice.type] || "default"}>{mockInvoice.type}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Badge 
              status={mockInvoice.status === "Paid" ? "success" : mockInvoice.status === "Pending" ? "processing" : "error"} 
              text={mockInvoice.status}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Total Amount" span={2}>
            <Text strong style={{ fontSize: "18px", color: "#1890ff" }}>
              <DollarOutlined /> ${mockInvoice.amount.toFixed(2)}
            </Text>
          </Descriptions.Item>
          <Descriptions.Item label="Provider">
            {mockInvoice.provider}
          </Descriptions.Item>
          <Descriptions.Item label="Facility">
            {mockInvoice.facility}
          </Descriptions.Item>
          <Descriptions.Item label="Description" span={2}>
            {mockInvoice.description}
          </Descriptions.Item>
          <Descriptions.Item label="Issued Date">
            <CalendarOutlined /> {mockInvoice.issuedDate}
          </Descriptions.Item>
          <Descriptions.Item label="Due Date">
            <CalendarOutlined /> {mockInvoice.dueDate}
          </Descriptions.Item>
          {mockInvoice.paidDate && (
            <Descriptions.Item label="Paid Date" span={2}>
              <CheckCircleOutlined /> {mockInvoice.paidDate}
            </Descriptions.Item>
          )}
        </Descriptions>
      </Card>

      <Card title="Line Items">
        <Table
          dataSource={mockInvoice.lineItems}
          columns={[
            {
              title: "Description",
              dataIndex: "description",
              key: "description"
            },
            {
              title: "Amount",
              dataIndex: "amount",
              key: "amount",
              render: (amount: number) => (
                <Text strong style={{ color: "#1890ff" }}>
                  ${amount.toFixed(2)}
                </Text>
              )
            }
          ]}
          pagination={false}
          size="small"
        />
      </Card>

      <Card title="Timeline">
        <Timeline
          items={[
            {
              color: 'green',
              children: (
                <div>
                  <Text strong>Invoice Paid</Text>
                  <div>Payment received on {mockInvoice.paidDate}</div>
                </div>
              ),
            },
            {
              color: 'blue',
              children: (
                <div>
                  <Text strong>Invoice Issued</Text>
                  <div>Invoice created on {mockInvoice.issuedDate}</div>
                </div>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
} 