"use client";
import { useParams, useRouter } from 'next/navigation';
import { Table, Tag, Card } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const mockItems = [
  {
    id: "ITEM001",
    name: "Aspirin 100mg",
    quantity: 50,
    unitPrice: "$0.25",
    totalPrice: "$12.50",
    status: "In Stock"
  },
  {
    id: "ITEM002",
    name: "Ibuprofen 200mg",
    quantity: 100,
    unitPrice: "$0.30",
    totalPrice: "$30.00",
    status: "Low Stock"
  },
  {
    id: "ITEM003",
    name: "Acetaminophen 500mg",
    quantity: 75,
    unitPrice: "$0.20",
    totalPrice: "$15.00",
    status: "In Stock"
  }
];

const statusColors = {
  "In Stock": "green",
  "Low Stock": "orange",
  "Out of Stock": "red"
};

export default function PharmacyOrderItemsListPage() {
  const params = useParams();
  const router = useRouter();
  const { pharmacyId, orderId } = params;

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Unit Price', dataIndex: 'unitPrice', key: 'unitPrice' },
    { title: 'Total Price', dataIndex: 'totalPrice', key: 'totalPrice' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Tag color={statusColors[status as keyof typeof statusColors] || 'default'}>{status}</Tag> },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <Card title={<span className="text-lg font-bold flex items-center gap-2"><ShoppingOutlined /> Order Items</span>}>
        <Table
          columns={columns}
          dataSource={mockItems}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/pharmacies/${pharmacyId}/orders/${orderId}/items/${record.id}`),
            style: { cursor: 'pointer' }
          })}
        />
      </Card>
    </div>
  );
} 