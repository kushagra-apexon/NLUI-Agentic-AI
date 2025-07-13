"use client";
import { Card, Table, Tag } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock data for endorsements
const mockEndorsements = [
  {
    id: "END001",
    type: "Benefit Enhancement",
    status: "Active",
    effectiveDate: "2024-01-15",
    description: "Increased coverage for prescription drugs"
  },
  {
    id: "END002",
    type: "Network Addition",
    status: "Active",
    effectiveDate: "2024-02-01",
    description: "Added new provider network"
  },
  {
    id: "END003",
    type: "Coverage Reduction",
    status: "Pending",
    effectiveDate: "2024-03-01",
    description: "Reduced coverage for elective procedures"
  }
];

const typeColors: { [key: string]: string } = {
  "Benefit Enhancement": "green",
  "Network Addition": "blue",
  "Coverage Reduction": "orange",
};

export default function PolicyEndorsementsPage() {
  const columns = [
    {
      title: 'Endorsement ID',
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
      title: 'Effective Date',
      dataIndex: 'effectiveDate',
      key: 'effectiveDate',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><SafetyCertificateOutlined /> Policy Endorsements</span>}
        className="shadow-lg rounded-lg"
      >
        <Table
          dataSource={mockEndorsements}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
} 