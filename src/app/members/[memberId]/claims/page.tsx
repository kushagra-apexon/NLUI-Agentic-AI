"use client";
import { useRouter } from 'next/navigation';
import { Card, Table } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock member claims data
const memberClaims = [
  { id: 'CLM001', claimNumber: 'CLM-001', serviceType: 'Consultation', status: 'Approved', amount: 250, date: '2024-01-15' },
  { id: 'CLM002', claimNumber: 'CLM-002', serviceType: 'Procedure', status: 'Pending', amount: 500, date: '2024-01-16' },
];
const columns = [
  { title: 'Claim Number', dataIndex: 'claimNumber', key: 'claimNumber' },
  { title: 'Service Type', dataIndex: 'serviceType', key: 'serviceType' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Amount', dataIndex: 'amount', key: 'amount', render: (amount: number) => `$${amount.toFixed(2)}` },
  { title: 'Date', dataIndex: 'date', key: 'date' },
];

export default function MemberClaimsPage() {
  const router = useRouter();
  
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Claims</span>}
        className="shadow-lg rounded-lg"
        styles={{ body: { padding: 0 } }}
      >
        <Table
          columns={columns}
          dataSource={memberClaims}
          rowKey="id"
          pagination={false}
          className="rounded-b-lg"
          onRow={record => ({
            onClick: () => router.push(`/claims/${record.id}`),
            style: { cursor: "pointer" },
          })}
          rowClassName={(_, idx) => idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
          bordered
        />
      </Card>
    </div>
  );
} 