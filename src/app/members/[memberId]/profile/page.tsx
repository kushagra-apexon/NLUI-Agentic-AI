"use client";
import { Card, Descriptions, Tag } from 'antd';
import { UserOutlined, IdcardOutlined, CalendarOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock member data
const mockMember = {
  id: "MEM001",
  name: "John Smith",
  memberId: "MEM001",
  dateOfBirth: "1985-03-15",
  planType: "Premium Health Plan",
  status: "Active",
  email: "john.smith@email.com",
  phone: "(555) 123-4567",
  address: "123 Main St, City, State 12345"
};

export default function MemberProfilePage() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><UserOutlined /> Member Profile</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions
          title={<span className="text-lg font-bold flex items-center gap-2"><UserOutlined /> Member Information</span>}
          bordered
          column={1}
        >
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><IdcardOutlined /> Member ID</span>}>
            {mockMember.memberId}
          </Descriptions.Item>
          <Descriptions.Item label="Name">
            {mockMember.name}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Date of Birth</span>}>
            {mockMember.dateOfBirth}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><SafetyCertificateOutlined /> Plan Type</span>}>
            <Tag color="blue">{mockMember.planType}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color="green">{mockMember.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {mockMember.email}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            {mockMember.phone}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {mockMember.address}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 