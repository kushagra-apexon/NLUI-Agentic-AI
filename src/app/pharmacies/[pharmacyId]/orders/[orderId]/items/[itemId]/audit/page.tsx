"use client";
import { useParams, useRouter } from 'next/navigation';
import { Table, Tag, Card } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const mockAudits = [
  {
    id: "AUD001",
    action: "Inspected",
    by: "Pharmacy Admin",
    date: "2024-01-25 10:00:00",
    status: "Passed"
  },
  {
    id: "AUD002",
    action: "Flagged",
    by: "Quality Control",
    date: "2024-01-26 11:30:00",
    status: "Flagged"
  },
  {
    id: "AUD003",
    action: "Verified",
    by: "Inventory Manager",
    date: "2024-01-27 09:15:00",
    status: "Passed"
  }
];

const statusColors = {
  Passed: "green",
  Flagged: "orange",
  Failed: "red"
};

export default function PharmacyOrderItemAuditListPage() {
  const params = useParams();
  const router = useRouter();
  const { pharmacyId, orderId, itemId } = params;

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Action', dataIndex: 'action', key: 'action' },
    { title: 'By', dataIndex: 'by', key: 'by' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Tag color={statusColors[status as keyof typeof statusColors] || 'default'}>{status}</Tag> },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <Card title={<span className="text-lg font-bold flex items-center gap-2"><FileSearchOutlined /> Item Audits</span>}>
        <Table
          columns={columns}
          dataSource={mockAudits}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/pharmacies/${pharmacyId}/orders/${orderId}/items/${itemId}/audit/${record.id}`),
            style: { cursor: 'pointer' }
          })}
        />
      </Card>
    </div>
  );
} 