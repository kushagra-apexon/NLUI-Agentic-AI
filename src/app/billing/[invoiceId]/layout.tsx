"use client";
import React from 'react';
import { Card, Button, Space, Typography, Tag, Row, Col, Descriptions, Tabs } from 'antd';
import { ArrowLeftOutlined, EditOutlined, PrinterOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useParams, usePathname } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';

const { Title, Text } = Typography;

// Mock data for invoice details
const mockInvoice = {
  id: "INV001",
  amount: "$1,250.00",
  status: "Paid",
  dueDate: "2024-01-31",
  createdDate: "2024-01-15",
  customerName: "ABC Healthcare"
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Paid': return 'green';
    case 'Pending': return 'orange';
    case 'Overdue': return 'red';
    default: return 'default';
  }
};

export default function InvoiceLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  const invoiceId = params.invoiceId as string;

  const getActiveKey = () => {
    if (pathname.includes('/payments')) return 'payments';
    if (pathname.includes('/notes')) return 'notes';
    if (pathname.includes('/adjustments')) return 'adjustments';
    return 'overview';
  };

  const handleTabChange = (key: string) => {
    const basePath = `/billing/${invoiceId}`;
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
      key: 'payments',
      label: 'Payments',
      children: children
    },
    {
      key: 'notes',
      label: 'Notes',
      children: children
    },
    {
      key: 'adjustments',
      label: 'Adjustments',
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
                Back to Invoices
              </Button>
              <div>
                <Title level={3} style={{ margin: 0 }}>
                  Invoice: {mockInvoice.id}
                </Title>
                <Text type="secondary">
                  {mockInvoice.customerName} - {mockInvoice.amount}
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
                <Tag color={getStatusColor(mockInvoice.status)}>
                  {mockInvoice.status}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Amount">
                {mockInvoice.amount}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={6}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="Due Date">
                {mockInvoice.dueDate}
              </Descriptions.Item>
              <Descriptions.Item label="Created Date">
                {mockInvoice.createdDate}
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