"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { ShoppingCartOutlined, UserOutlined, CalendarOutlined, DollarOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";
import { Table } from 'antd';
import { useRouter } from 'next/navigation';

// Mock order data
const mockOrders = [
  {
    id: "ORD001",
    pharmacyId: "PHM001",
    customerName: "John Smith",
    customerId: "CUST001",
    totalAmount: "$125.50",
    status: "Delivered",
    orderDate: "2024-01-15",
    deliveryDate: "2024-01-18",
    items: 5,
    paymentMethod: "Credit Card",
    shippingAddress: "123 Oak Street, Suburbia, NY 10001"
  },
  {
    id: "ORD002",
    pharmacyId: "PHM001",
    customerName: "Sarah Johnson",
    customerId: "CUST002",
    totalAmount: "$89.75",
    status: "Processing",
    orderDate: "2024-01-20",
    deliveryDate: null,
    items: 3,
    paymentMethod: "PayPal",
    shippingAddress: "456 Pine Avenue, Downtown, NY 10002"
  },
  {
    id: "ORD003",
    pharmacyId: "PHM001",
    customerName: "Michael Lee",
    customerId: "CUST003",
    totalAmount: "$120.00",
    status: "In Transit",
    orderDate: "2024-01-22",
    deliveryDate: null,
    items: 2,
    paymentMethod: "Cash",
    shippingAddress: "789 Maple Street, Uptown, NY 10003"
  }
];

// Mock items for this order
const mockItems = [
  { id: 'ITEM001', name: 'Aspirin 100mg', quantity: 2, unitPrice: '$5.00', totalPrice: '$10.00', status: 'In Stock' },
  { id: 'ITEM002', name: 'Ibuprofen 200mg', quantity: 1, unitPrice: '$8.50', totalPrice: '$8.50', status: 'In Stock' },
  { id: 'ITEM003', name: 'Vitamin C 500mg', quantity: 3, unitPrice: '$12.00', totalPrice: '$36.00', status: 'Low Stock' },
];
const itemColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
  { title: 'Unit Price', dataIndex: 'unitPrice', key: 'unitPrice' },
  { title: 'Total Price', dataIndex: 'totalPrice', key: 'totalPrice' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

const statusColors: { [key: string]: string } = {
  Delivered: "green",
  Processing: "orange",
  Shipped: "blue",
  Cancelled: "red"
};

export default function PharmacyOrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = Array.isArray(params.orderId) ? params.orderId[0] : params.orderId;
  const pharmacyId = params.pharmacyId;

  const order = mockOrders.find(o => o.id === orderId);

  if (!order) {
    return <div className="text-red-600 p-8">Order not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8 space-y-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><ShoppingCartOutlined /> Order Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><ShoppingCartOutlined /> Order ID</span>}>
            {order.id}
          </Descriptions.Item>
          <Descriptions.Item label="Pharmacy ID">
            {order.pharmacyId}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Customer</span>}>
            {order.customerName} ({order.customerId})
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><DollarOutlined /> Total Amount</span>}>
            {order.totalAmount}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[order.status] || "default"}>{order.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Items">
            {order.items} items
          </Descriptions.Item>
          <Descriptions.Item label="Payment Method">
            {order.paymentMethod}
          </Descriptions.Item>
          <Descriptions.Item label="Shipping Address">
            {order.shippingAddress}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Order Date</span>}>
            {order.orderDate}
          </Descriptions.Item>
          <Descriptions.Item label="Delivery Date">
            {order.deliveryDate || "Pending"}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title="Order Items">
        <Table
          dataSource={mockItems}
          columns={itemColumns}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/pharmacies/${pharmacyId}/orders/${orderId}/items/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 