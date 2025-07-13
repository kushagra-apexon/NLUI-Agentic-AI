"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { ShoppingOutlined, UserOutlined, CalendarOutlined, DollarOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";
import { Table } from 'antd';
import { useRouter } from 'next/navigation';

// Mock item data
const mockItems = [
  {
    id: "ITEM001",
    orderId: "ORD001",
    pharmacyId: "PHM001",
    name: "Aspirin 100mg",
    quantity: 50,
    unitPrice: "$0.25",
    totalPrice: "$12.50",
    status: "In Stock",
    supplier: "Generic Pharma",
    expiryDate: "2025-12-31",
    description: "Standard aspirin tablets for pain relief"
  },
  {
    id: "ITEM002",
    orderId: "ORD002",
    pharmacyId: "PHM001",
    name: "Ibuprofen 200mg",
    quantity: 100,
    unitPrice: "$0.30",
    totalPrice: "$30.00",
    status: "Low Stock",
    supplier: "MediCorp",
    expiryDate: "2025-06-30",
    description: "Anti-inflammatory medication"
  },
  {
    id: "ITEM003",
    orderId: "ORD003",
    pharmacyId: "PHM001",
    name: "Vitamin C 500mg",
    quantity: 75,
    unitPrice: "$0.20",
    totalPrice: "$15.00",
    status: "In Stock",
    supplier: "HealthPlus",
    expiryDate: "2025-09-30",
    description: "Vitamin supplement"
  }
];

const statusColors: { [key: string]: string } = {
  "In Stock": "green",
  "Low Stock": "orange",
  "Out of Stock": "red"
};

// Mock audits for this item
const mockAudits = [
  { id: 'AUD001', action: 'Inspected', by: 'Pharmacy Admin', date: '2024-01-25 10:00:00', status: 'Passed' },
  { id: 'AUD002', action: 'Flagged', by: 'Quality Control', date: '2024-01-26 11:30:00', status: 'Flagged' },
  { id: 'AUD003', action: 'Verified', by: 'Inventory Manager', date: '2024-01-27 09:15:00', status: 'Passed' },
];
const auditColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Action', dataIndex: 'action', key: 'action' },
  { title: 'By', dataIndex: 'by', key: 'by' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

export default function PharmacyOrderItemDetailPage() {
  const params = useParams();
  const router = useRouter();
  const itemId = Array.isArray(params.itemId) ? params.itemId[0] : params.itemId;
  const pharmacyId = params.pharmacyId;
  const orderId = params.orderId;

  const item = mockItems.find(i => i.id === itemId);

  if (!item) {
    return <div className="text-red-600 p-8">Item not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8 space-y-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><ShoppingOutlined /> Item Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><ShoppingOutlined /> Item ID</span>}>
            {item.id}
          </Descriptions.Item>
          <Descriptions.Item label="Name">
            {item.name}
          </Descriptions.Item>
          <Descriptions.Item label="Order ID">
            {item.orderId}
          </Descriptions.Item>
          <Descriptions.Item label="Pharmacy ID">
            {item.pharmacyId}
          </Descriptions.Item>
          <Descriptions.Item label="Quantity">
            {item.quantity}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><DollarOutlined /> Unit Price</span>}>
            {item.unitPrice}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><DollarOutlined /> Total Price</span>}>
            {item.totalPrice}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[item.status] || "default"}>{item.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Supplier">
            {item.supplier}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {item.description}
          </Descriptions.Item>
          <Descriptions.Item label="Expiry Date">
            {item.expiryDate}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title="Item Audits">
        <Table
          dataSource={mockAudits}
          columns={auditColumns}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/pharmacies/${pharmacyId}/orders/${orderId}/items/${itemId}/audit/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 