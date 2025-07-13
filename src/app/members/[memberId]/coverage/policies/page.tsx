"use client";
import { Card, Table, Tag } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock data for policies
const mockPolicies = [
  {
    id: "POL001",
    type: "Health Insurance",
    status: "Active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    premium: "$450/month"
  },
  {
    id: "POL002",
    type: "Dental Insurance",
    status: "Active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    premium: "$25/month"
  },
  {
    id: "POL003",
    type: "Vision Insurance",
    status: "Inactive",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    premium: "$15/month"
  }
];

const typeColors: { [key: string]: string } = {
  "Health Insurance": "blue",
  "Dental Insurance": "green",
  "Vision Insurance": "purple",
};

export default function MemberPoliciesPage() {
  const columns = [
    {
      title: 'Policy ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => (
        <Tag color={typeColors[type] || "default"}>{type}</Tag>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Premium',
      dataIndex: 'premium',
      key: 'premium',
    },
  ];

  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><SafetyCertificateOutlined /> Member Policies</span>}
        className="shadow-lg rounded-lg"
      >
        <Table
          dataSource={mockPolicies}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
} 