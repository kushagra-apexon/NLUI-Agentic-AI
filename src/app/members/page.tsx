"use client";
import "antd/dist/reset.css";
import { Card, Table, Tag, Typography } from 'antd';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

const mockMembers = [
  { id: "MEM001", name: "John Doe", status: "Active", plan: "Premium" },
  { id: "MEM002", name: "Jane Smith", status: "Active", plan: "Standard" },
  { id: "MEM003", name: "Bob Johnson", status: "Inactive", plan: "Basic" },
];

const columns = [
  { title: 'Member ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Plan', dataIndex: 'plan', key: 'plan' },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'Active' ? 'green' : 'red'}>
        {status}
      </Tag>
    )
  },
];

export default function MembersPage() {
  const router = useRouter();
  return (
    <div className="p-6">
      <Card>
        <Title level={2}>Members</Title>
        <Table
          dataSource={mockMembers}
          columns={columns}
          rowKey="id"
          onRow={record => ({
            onClick: () => router.push(`/members/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 
