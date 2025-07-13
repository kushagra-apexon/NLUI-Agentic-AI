"use client";
import { Card, Table, Space, Button } from 'antd';
import { MedicineBoxOutlined, AlertOutlined, PlusOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock data for inventory
const mockInventory = [
  {
    id: "INV001",
    name: "Aspirin 500mg",
    category: "Pain Relief",
    quantity: 150,
    status: "In Stock",
    expiryDate: "2024-12-31"
  },
  {
    id: "INV002",
    name: "Ibuprofen 400mg",
    category: "Pain Relief",
    quantity: 75,
    status: "Low Stock",
    expiryDate: "2024-11-30"
  },
  {
    id: "INV003",
    name: "Vitamin C 1000mg",
    category: "Vitamins",
    quantity: 200,
    status: "In Stock",
    expiryDate: "2025-01-15"
  }
];

export default function PharmacyInventoryPage() {
  const columns = [
    {
      title: 'Item ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <span className="flex items-center gap-2">
          <MedicineBoxOutlined />
          <span className={status === "Low Stock" ? "text-orange-600" : status === "Out of Stock" ? "text-red-600" : "text-green-600"}>
            {status}
          </span>
        </span>
      ),
    },
    {
      title: 'Expiry Date',
      dataIndex: 'expiryDate',
      key: 'expiryDate',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button type="primary" size="small" icon={<AlertOutlined />}>
            Alert
          </Button>
          <Button size="small" icon={<PlusOutlined />}>
            Add
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">425</div>
            <div className="text-gray-600">Total Items</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">380</div>
            <div className="text-gray-600">In Stock</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">35</div>
            <div className="text-gray-600">Low Stock</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">10</div>
            <div className="text-gray-600">Out of Stock</div>
          </div>
        </Card>
      </div>
      
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><MedicineBoxOutlined /> Inventory Management</span>}
        className="shadow-lg rounded-lg"
      >
        <Table
          dataSource={mockInventory}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
} 