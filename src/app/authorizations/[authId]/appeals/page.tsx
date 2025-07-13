"use client";
import { Card, Table, Tag, Button } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";
import { useRouter, useParams } from 'next/navigation';

// Mock data for appeals
const mockAppeals = [
  {
    id: "APL001",
    memberId: "MEM001",
    reason: "Claim Denied",
    status: "Pending",
    submittedDate: "2024-01-15",
    description: "Appeal for denied MRI claim"
  },
  {
    id: "APL002",
    memberId: "MEM002",
    reason: "Coverage Dispute",
    status: "Under Review",
    submittedDate: "2024-01-18",
    description: "Dispute over coverage for specialist visit"
  },
  {
    id: "APL003",
    memberId: "MEM003",
    reason: "Payment Issue",
    status: "Approved",
    submittedDate: "2024-01-10",
    description: "Appeal for payment processing delay"
  }
];

const statusColors: { [key: string]: string } = {
  Pending: "orange",
  "Under Review": "blue",
  Approved: "green",
  Denied: "red",
};

export default function AuthorizationAppealsPage() {
  const router = useRouter();
  const params = useParams();
  const authId = Array.isArray(params.authId) ? params.authId[0] : params.authId;
  const columns = [
    {
      title: 'Appeal ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Member ID',
      dataIndex: 'memberId',
      key: 'memberId',
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'reason',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={statusColors[status] || "default"}>{status}</Tag>
      ),
    },
    {
      title: 'Submitted Date',
      dataIndex: 'submittedDate',
      key: 'submittedDate',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Button type="primary" size="small">
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Authorization Appeals</span>}
        className="shadow-lg rounded-lg"
      >
        <Table
          dataSource={mockAppeals}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          onRow={record => ({
            onClick: () => router.push(`/authorizations/${authId}/appeals/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 