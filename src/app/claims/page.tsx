"use client";
import "antd/dist/reset.css";
import { Card, Table, Tag, Typography } from 'antd';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

const mockClaims = [
  { id: "CLM001", status: "Approved", amount: "$1,250.00" },
  { id: "CLM002", status: "Pending", amount: "$850.00" },
  { id: "CLM003", status: "Denied", amount: "$500.00" },
];

const columns = [
  { title: 'Claim ID', dataIndex: 'id', key: 'id' },
  { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'Approved' ? 'green' : status === 'Pending' ? 'orange' : 'red'}>
        {status}
      </Tag>
    )
  },
];

export default function ClaimsPage() {
  const router = useRouter();
  return (
    <div className="p-6">
      <Card>
        <Title level={2}>Claims</Title>
        <Table
          dataSource={mockClaims}
          columns={columns}
          rowKey="id"
          onRow={record => ({
            onClick: () => router.push(`/claims/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 
