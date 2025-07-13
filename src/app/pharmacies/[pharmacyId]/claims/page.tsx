"use client";
import { Card, Table, Tag } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock data for pharmacy claims
const mockClaims = [
  {
    id: "CLM001",
    memberId: "MEM001",
    service: "Prescription Drug",
    amount: "$150.00",
    status: "Paid",
    date: "2024-01-15"
  },
  {
    id: "CLM002",
    memberId: "MEM002",
    service: "Prescription Drug",
    amount: "$75.00",
    status: "Pending",
    date: "2024-01-18"
  },
  {
    id: "CLM003",
    memberId: "MEM003",
    service: "Prescription Drug",
    amount: "$200.00",
    status: "Denied",
    date: "2024-01-20"
  }
];

const statusColors: { [key: string]: string } = {
  Paid: "green",
  Pending: "orange",
  Denied: "red",
};

export default function PharmacyClaimsPage() {
  const columns = [
    {
      title: 'Claim ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Member ID',
      dataIndex: 'memberId',
      key: 'memberId',
    },
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
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
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">25</div>
            <div className="text-gray-600">Total Claims</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">18</div>
            <div className="text-gray-600">Paid Claims</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">5</div>
            <div className="text-gray-600">Pending Claims</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">2</div>
            <div className="text-gray-600">Denied Claims</div>
          </div>
        </Card>
      </div>
      
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Pharmacy Claims</span>}
        className="shadow-lg rounded-lg"
      >
        <Table
          dataSource={mockClaims}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
} 