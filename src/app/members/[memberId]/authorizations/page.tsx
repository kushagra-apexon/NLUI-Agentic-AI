"use client";
import { Card, Table, Tag } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock data for authorizations
const mockAuthorizations = [
  {
    id: "AUTH001",
    type: "Prior Authorization",
    status: "Approved",
    requestDate: "2024-01-15",
    approvalDate: "2024-01-18",
    service: "MRI Scan",
    provider: "City Medical Center"
  },
  {
    id: "AUTH002",
    type: "Pre-Certification",
    status: "Pending",
    requestDate: "2024-01-20",
    approvalDate: null,
    service: "Physical Therapy",
    provider: "Rehab Plus"
  },
  {
    id: "AUTH003",
    type: "Prior Authorization",
    status: "Denied",
    requestDate: "2024-01-10",
    approvalDate: "2024-01-12",
    service: "Specialist Consultation",
    provider: "Specialist Group"
  }
];

const statusColors: { [key: string]: string } = {
  Approved: "green",
  Pending: "orange",
  Denied: "red",
};

export default function MemberAuthorizationsPage() {
  const columns = [
    {
      title: 'Authorization ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
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
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Provider',
      dataIndex: 'provider',
      key: 'provider',
    },
    {
      title: 'Request Date',
      dataIndex: 'requestDate',
      key: 'requestDate',
    },
    {
      title: 'Approval Date',
      dataIndex: 'approvalDate',
      key: 'approvalDate',
      render: (date: string | null) => date || 'N/A',
    },
  ];

  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><SafetyCertificateOutlined /> Member Authorizations</span>}
        className="shadow-lg rounded-lg"
      >
        <Table
          dataSource={mockAuthorizations}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
} 