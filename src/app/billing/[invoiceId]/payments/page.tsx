"use client";
import { Card, Typography, Table, Button } from 'antd';
import { DollarOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const { Title, Text } = Typography;

// Mock payments data
const mockPayments = [
  { id: 'PAY001', amount: 1000, method: 'Credit Card', status: 'Completed', date: '2024-01-20' },
  { id: 'PAY002', amount: 500, method: 'Bank Transfer', status: 'Pending', date: '2024-01-21' },
];
const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Amount', dataIndex: 'amount', key: 'amount', render: (amount: number) => `$${amount.toFixed(2)}` },
  { title: 'Method', dataIndex: 'method', key: 'method' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
];

const totalPayments = 2;
const completedPayments = 1;
const pendingPayments = 1;
const totalAmount = 1500;

export default function BillingPaymentsTab() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#1890ff" }}>{totalPayments}</Title>
            <Text type="secondary">Total Payments</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#52c41a" }}>{completedPayments}</Title>
            <Text type="secondary">Completed</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#faad14" }}>{pendingPayments}</Title>
            <Text type="secondary">Pending</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#1890ff" }}>${totalAmount.toFixed(2)}</Title>
            <Text type="secondary">Total Amount</Text>
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <DollarOutlined /> Payment History
          </Title>
          <Button type="primary">Record Payment</Button>
        </div>
        <Table
          dataSource={mockPayments}
          columns={columns}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} payments`
          }}
        />
      </Card>
    </div>
  );
} 