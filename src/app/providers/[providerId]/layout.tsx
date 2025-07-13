"use client";
import { Tabs } from 'antd';
import { UserOutlined, FileTextOutlined, BankOutlined, EnvironmentOutlined, CommentOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    {
      key: 'profile',
      label: (
        <span className="flex items-center gap-2">
          <UserOutlined />
          Profile
        </span>
      ),
      children: children,
    },
    {
      key: 'claims',
      label: (
        <span className="flex items-center gap-2">
          <FileTextOutlined />
          Claims
        </span>
      ),
      children: children,
    },
    {
      key: 'contracts',
      label: (
        <span className="flex items-center gap-2">
          <BankOutlined />
          Contracts
        </span>
      ),
      children: children,
    },
    {
      key: 'locations',
      label: (
        <span className="flex items-center gap-2">
          <EnvironmentOutlined />
          Locations
        </span>
      ),
      children: children,
    },
    {
      key: 'notes',
      label: (
        <span className="flex items-center gap-2">
          <CommentOutlined />
          Notes
        </span>
      ),
      children: children,
    },
    {
      key: 'reviews',
      label: (
        <span className="flex items-center gap-2">
          <CommentOutlined />
          Reviews
        </span>
      ),
      children: children,
    },
  ];

  return (
    <div className="p-6">
      <Tabs defaultActiveKey="profile" items={items} />
    </div>
  );
} 