"use client";
import { Card, Table, Tag } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import { useRouter, useParams } from 'next/navigation';
import "antd/dist/reset.css";

// Mock data for orders
const mockOrders = [
  {
    id: "ORD001",
    memberId: "MEM001",
    items: "Aspirin, Ibuprofen",
    total: "$45.00",
    status: "Delivered",
    date: "2024-01-15"
  },
  {
    id: "ORD002",
    memberId: "MEM002",
    items: "Vitamin C, Calcium",
    total: "$32.50",
    status: "In Transit",
    date: "2024-01-18"
  },
  {
    id: "ORD003",
    memberId: "MEM003",
    items: "Prescription Drug",
    total: "$120.00",
    status: "Processing",
    date: "2024-01-20"
  }
];

const statusColors: { [key: string]: string } = {
  Delivered: "green",
  "In Transit": "blue",
  Processing: "orange",
};

export default function PharmacyOrdersPage() {
  const router = useRouter();
  const params = useParams();
  const pharmacyId = Array.isArray(params.pharmacyId) ? params.pharmacyId[0] : params.pharmacyId;

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Member ID',
      dataIndex: 'memberId',
      key: 'memberId',
    },
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
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
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><ShoppingOutlined /> Pharmacy Orders</span>}
        className="shadow-lg rounded-lg"
      >
        <Table
          dataSource={mockOrders}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          onRow={record => ({
            onClick: () => router.push(`/pharmacies/${pharmacyId}/orders/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 