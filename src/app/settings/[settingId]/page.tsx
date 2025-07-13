"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { SettingOutlined, KeyOutlined, CalendarOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock settings data
const mockSettings = [
  {
    id: "SET001",
    name: "System Security",
    category: "Security",
    type: "Configuration",
    status: "Active",
    value: "Enabled",
    description: "Controls system-wide security settings and access permissions",
    lastModified: "2024-01-20 10:30:00",
    modifiedBy: "Admin User",
    priority: "High"
  },
  {
    id: "SET002",
    name: "Email Notifications",
    category: "Communication",
    type: "Feature",
    status: "Active",
    value: "Enabled",
    description: "Controls email notification preferences for system alerts",
    lastModified: "2024-01-18 14:15:00",
    modifiedBy: "System Admin",
    priority: "Medium"
  },
  {
    id: "SET003",
    name: "Data Retention",
    category: "Data",
    type: "Policy",
    status: "Inactive",
    value: "90 days",
    description: "Defines how long system data is retained before automatic deletion",
    lastModified: "2024-01-15 09:45:00",
    modifiedBy: "Data Manager",
    priority: "High"
  }
];

const categoryColors: { [key: string]: string } = {
  Security: "red",
  Communication: "blue",
  Data: "green",
  System: "orange"
};

const statusColors: { [key: string]: string } = {
  Active: "green",
  Inactive: "red",
  Pending: "orange"
};

const priorityColors: { [key: string]: string } = {
  High: "red",
  Medium: "orange",
  Low: "green"
};

export default function SettingDetailPage() {
  const params = useParams();
  const settingId = Array.isArray(params.settingId) ? params.settingId[0] : params.settingId;
  
  // Find the setting by ID
  const setting = mockSettings.find(s => s.id === settingId);
  
  if (!setting) {
    return <div className="text-red-600 p-8">Setting not found.</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><SettingOutlined /> Setting Details</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions
          bordered
          column={1}
          size="middle"
        >
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><KeyOutlined /> Setting ID</span>}>
            {setting.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><SettingOutlined /> Name</span>}>
            {setting.name}
          </Descriptions.Item>
          <Descriptions.Item label="Category">
            <Tag color={categoryColors[setting.category] || "default"}>{setting.category}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Type">
            {setting.type}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[setting.status] || "default"}>{setting.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Value">
            {setting.value}
          </Descriptions.Item>
          <Descriptions.Item label="Priority">
            <Tag color={priorityColors[setting.priority] || "default"}>{setting.priority}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {setting.description}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Last Modified</span>}>
            {setting.lastModified}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Modified By</span>}>
            {setting.modifiedBy}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 