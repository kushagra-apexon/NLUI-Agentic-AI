"use client";
import "antd/dist/reset.css";
import { Card, Table, Tag, Typography } from 'antd';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

const mockUsers = [
  { id: "USR001", name: "John Doe", status: "Active", email: "john.doe@example.com" },
  { id: "USR002", name: "Jane Smith", status: "Inactive", email: "jane.smith@example.com" },
  { id: "USR003", name: "Alice Brown", status: "Pending", email: "alice.brown@example.com" },
];

function getStatusColor(status: string) {
  switch (status) {
    case 'Active': return 'green';
    case 'Inactive': return 'red';
    case 'Pending': return 'orange';
    case 'Suspended': return 'red';
    default: return 'default';
  }
}

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Tag color={getStatusColor(status)}>{status}</Tag> },
];

export default function UsersPage() {
  const router = useRouter();
  return (
    <div className="p-6">
      <Card>
        <Title level={2}>Users</Title>
        <Table
          dataSource={mockUsers}
          columns={columns}
          rowKey="id"
          onRow={record => ({
            onClick: () => router.push(`/users/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 
