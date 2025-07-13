"use client";
import { Card, Typography, Table, Button, Space } from 'antd';
import { DollarOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";
import { useRouter, useParams } from 'next/navigation';

const { Title, Text } = Typography;

// Mock adjustments data
const mockAdjustments = [
  { id: 'ADJ001', type: 'Discount', amount: -100, status: 'Applied', date: '2024-01-15' },
  { id: 'ADJ002', type: 'Late Fee', amount: 50, status: 'Applied', date: '2024-01-16' },
];
const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Amount', dataIndex: 'amount', key: 'amount', render: (amount: number) => `$${amount.toFixed(2)}` },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
];

const totalAdjustments = 2;
const appliedAdjustments = 2;
const totalAdjustmentAmount = -50;

export default function BillingAdjustmentsTab() {
  const router = useRouter();
  const params = useParams();
  const invoiceId = params.invoiceId;
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#1890ff" }}>{totalAdjustments}</Title>
            <Text type="secondary">Total Adjustments</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#52c41a" }}>{appliedAdjustments}</Title>
            <Text type="secondary">Applied</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: totalAdjustmentAmount < 0 ? "#52c41a" : "#ff4d4f" }}>
              ${totalAdjustmentAmount.toFixed(2)}
            </Title>
            <Text type="secondary">Net Adjustment</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#faad14" }}>3</Title>
            <Text type="secondary">Types</Text>
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <DollarOutlined /> Invoice Adjustments
          </Title>
          <Space>
            <Button icon={<MinusOutlined />}>Add Credit</Button>
            <Button icon={<PlusOutlined />}>Add Fee</Button>
          </Space>
        </div>
        <Table
          dataSource={mockAdjustments}
          columns={columns}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} adjustments`
          }}
          onRow={record => ({
            onClick: () => router.push(`/billing/${invoiceId}/adjustments/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 