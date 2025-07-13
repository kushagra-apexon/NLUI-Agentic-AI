"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions, Button } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined, CalendarOutlined, IdcardOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import "antd/dist/reset.css";

// Mock member data
const mockMembers = [
  {
    id: "MEM001",
    name: "John Smith",
    memberId: "M123456789",
    status: "Active",
    plan: "Premium Health Plan",
    group: "Corporate Group A",
    address: "123 Oak Street, Suburbia, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "john.smith@email.com",
    dateOfBirth: "1985-03-15",
    gender: "Male",
    dependents: 2,
    joinDate: "2020-01-15",
    lastVisit: "2024-01-20",
    description: "Primary member with family coverage"
  },
  {
    id: "MEM002",
    name: "Sarah Johnson",
    memberId: "M987654321",
    status: "Active",
    plan: "Standard Health Plan",
    group: "Individual Plan",
    address: "456 Pine Avenue, Downtown, NY 10002",
    phone: "+1 (555) 234-5678",
    email: "sarah.johnson@email.com",
    dateOfBirth: "1990-07-22",
    gender: "Female",
    dependents: 0,
    joinDate: "2021-03-20",
    lastVisit: "2024-01-18",
    description: "Individual member with standard coverage"
  },
  {
    id: "MEM003",
    name: "Michael Brown",
    memberId: "M555666777",
    status: "Inactive",
    plan: "Basic Health Plan",
    group: "Small Business Group",
    address: "789 Elm Street, Business District, NY 10003",
    phone: "+1 (555) 345-6789",
    email: "michael.brown@email.com",
    dateOfBirth: "1978-11-10",
    gender: "Male",
    dependents: 1,
    joinDate: "2019-06-10",
    lastVisit: "2023-12-15",
    description: "Former member with basic coverage"
  }
];

const statusColors: { [key: string]: string } = {
  Active: "green",
  Inactive: "red",
  Pending: "orange"
};

const planColors: { [key: string]: string } = {
  "Premium Health Plan": "gold",
  "Standard Health Plan": "blue",
  "Basic Health Plan": "green"
};

export default function MemberDetailPage() {
  const params = useParams();
  const router = useRouter();
  const memberId = Array.isArray(params.memberId) ? params.memberId[0] : params.memberId;
  
  // Find the member by ID
  const member = mockMembers.find(m => m.id === memberId);
  
  if (!member) {
    return <div className="text-red-600 p-8">Member not found.</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><UserOutlined /> Member Details</span>}
        className="shadow-lg rounded-lg"
        extra={
          <Button 
            type="primary" 
            icon={<UserOutlined />}
            onClick={() => router.push(`/members/${memberId}/profile`)}
          >
            View Profile
          </Button>
        }
      >
        <Descriptions
          bordered
          column={1}
          size="middle"
        >
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Member ID</span>}>
            {member.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><IdcardOutlined /> Member Number</span>}>
            {member.memberId}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Name</span>}>
            {member.name}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[member.status] || "default"}>{member.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Plan">
            <Tag color={planColors[member.plan] || "default"}>{member.plan}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Group">
            {member.group}
          </Descriptions.Item>
          <Descriptions.Item label="Gender">
            {member.gender}
          </Descriptions.Item>
          <Descriptions.Item label="Dependents">
            {member.dependents}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><EnvironmentOutlined /> Address</span>}>
            {member.address}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><PhoneOutlined /> Phone</span>}>
            {member.phone}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><MailOutlined /> Email</span>}>
            {member.email}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {member.description}
          </Descriptions.Item>
          <Descriptions.Item label="Date of Birth">
            {member.dateOfBirth}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Join Date</span>}>
            {member.joinDate}
          </Descriptions.Item>
          <Descriptions.Item label="Last Visit">
            {member.lastVisit}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 