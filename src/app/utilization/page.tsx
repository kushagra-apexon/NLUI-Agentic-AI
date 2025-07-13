"use client";
import "antd/dist/reset.css";
import { Card, Table, Tag, Typography } from 'antd';

const { Title } = Typography;

const mockUtilizations = [
  { id: "UTL001", status: "Pending", type: "Review" },
  { id: "UTL002", status: "Denied", type: "Approval" },
  { id: "UTL003", status: "In Review", type: "Audit" },
];

function getStatusColor(status: string) {
  switch (status) {
    case 'Approved': return 'green';
    case 'Denied': return 'red';
    case 'Pending': return 'orange';
    case 'In Review': return 'blue';
    default: return 'default';
  }
}

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Tag color={getStatusColor(status)}>{status}</Tag> },
];

export default function UtilizationPage() {
  return (
    <div className="p-6">
      <Card>
        <Title level={2}>Utilization Requests</Title>
        <Table dataSource={mockUtilizations} columns={columns} rowKey="id" />
      </Card>
    </div>
  );
} 
