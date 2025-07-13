"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, CalendarOutlined, TeamOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock user data
const mockUsers = [
  {
    id: "USR001",
    name: "John Smith",
    email: "john.smith@healthcare.com",
    phone: "+1 (555) 123-4567",
    role: "Administrator",
    status: "Active",
    department: "IT",
    joinDate: "2023-01-15",
    lastLogin: "2024-01-25 14:30:00"
  },
  {
    id: "USR002",
    name: "Sarah Johnson",
    email: "sarah.johnson@healthcare.com",
    phone: "+1 (555) 234-5678",
    role: "Manager",
    status: "Active",
    department: "Claims",
    joinDate: "2023-03-20",
    lastLogin: "2024-01-25 12:15:00"
  },
  {
    id: "USR003",
    name: "Michael Brown",
    email: "michael.brown@healthcare.com",
    phone: "+1 (555) 345-6789",
    role: "Analyst",
    status: "Inactive",
    department: "Billing",
    joinDate: "2023-06-10",
    lastLogin: "2024-01-20 09:45:00"
  }
];

const roleColors: { [key: string]: string } = {
  Administrator: "red",
  Manager: "blue",
  Analyst: "green",
  User: "default"
};

const statusColors: { [key: string]: string } = {
  Active: "green",
  Inactive: "red",
  Pending: "orange"
};

export default function UserDetailPage() {
  const params = useParams();
  const userId = Array.isArray(params.userId) ? params.userId[0] : params.userId;
  
  // Find the user by ID
  const user = mockUsers.find(u => u.id === userId);
  
  if (!user) {
    return <div className="text-red-600 p-8">User not found.</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><UserOutlined /> User Details</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions
          bordered
          column={1}
          size="middle"
        >
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> User ID</span>}>
            {user.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Name</span>}>
            {user.name}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><MailOutlined /> Email</span>}>
            {user.email}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><PhoneOutlined /> Phone</span>}>
            {user.phone}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><TeamOutlined /> Role</span>}>
            <Tag color={roleColors[user.role] || "default"}>{user.role}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[user.status] || "default"}>{user.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Department">
            {user.department}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Join Date</span>}>
            {user.joinDate}
          </Descriptions.Item>
          <Descriptions.Item label="Last Login">
            {user.lastLogin}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 