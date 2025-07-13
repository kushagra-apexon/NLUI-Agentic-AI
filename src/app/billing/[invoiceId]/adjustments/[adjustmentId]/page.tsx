"use client";
import { Card, Typography, Tag, Descriptions, Table } from 'antd';
import { useRouter, useParams } from 'next/navigation';

const { Title, Text } = Typography;

// Mock data for adjustment detail
const mockAdjustment = {
  id: 'ADJ001',
  type: 'Discount',
  amount: -100,
  status: 'Applied',
  date: '2024-01-15',
  description: 'Promotional discount applied to invoice.'
};

// Mock data for adjustment history
const mockHistories = [
  { id: 'HIST001', action: 'Created', date: '2024-01-15', by: 'Finance Admin' },
  { id: 'HIST002', action: 'Reviewed', date: '2024-01-16', by: 'Manager' },
];
const historyColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Action', dataIndex: 'action', key: 'action' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'By', dataIndex: 'by', key: 'by' },
];

export default function AdjustmentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const invoiceId = params.invoiceId;
  const adjustmentId = params.adjustmentId;
  return (
    <div className="p-6 space-y-8">
      <Card>
        <Title level={4}>Adjustment Detail</Title>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="ID">{mockAdjustment.id}</Descriptions.Item>
          <Descriptions.Item label="Type">{mockAdjustment.type}</Descriptions.Item>
          <Descriptions.Item label="Amount">
            <Text strong type={mockAdjustment.amount < 0 ? 'danger' : 'success'}>
              ${mockAdjustment.amount.toFixed(2)}
            </Text>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={mockAdjustment.status === 'Applied' ? 'green' : 'orange'}>{mockAdjustment.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Date">{mockAdjustment.date}</Descriptions.Item>
          <Descriptions.Item label="Description">{mockAdjustment.description}</Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title="Adjustment History">
        <Table
          dataSource={mockHistories}
          columns={historyColumns}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/billing/${invoiceId}/adjustments/${adjustmentId}/history/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 