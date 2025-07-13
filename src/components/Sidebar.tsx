"use client";
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import {
  DashboardOutlined,
  FileTextOutlined,
  DollarOutlined,
  TeamOutlined,
  UserOutlined,
  ShopOutlined,
  SafetyCertificateOutlined,
  FileProtectOutlined,
  BarChartOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const menuItems = [
  {
    key: '/',
    label: 'Dashboard',
    icon: <DashboardOutlined />,
  },
  {
    key: '/claims',
    label: 'Claims',
    icon: <FileTextOutlined />,
  },
  {
    key: '/billing',
    label: 'Billing',
    icon: <DollarOutlined />,
  },
  {
    key: '/providers',
    label: 'Providers',
    icon: <TeamOutlined />,
  },
  {
    key: '/members',
    label: 'Members',
    icon: <UserOutlined />,
  },
  {
    key: '/pharmacies',
    label: 'Pharmacies',
    icon: <ShopOutlined />,
  },
  {
    key: '/authorizations',
    label: 'Authorizations',
    icon: <SafetyCertificateOutlined />,
  },
  {
    key: '/utilization',
    label: 'Utilization',
    icon: <FileProtectOutlined />,
  },
  {
    key: '/reports',
    label: 'Reports',
    icon: <BarChartOutlined />,
  },
  {
    key: '/settings',
    label: 'Settings',
    icon: <SettingOutlined />,
  },
  {
    key: '/users',
    label: 'Users',
    icon: <UsergroupAddOutlined />,
  },
];

export default function Sidebar() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
  };

  return (
    <Sider
      width={180}
      collapsible
      collapsed={collapsed}
      trigger={null}
      style={{ background: '#f5f5f5', minHeight: '100vh' }}
    >
      <div className={`p-4 flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
        {!collapsed && <h1 className="text-xl font-bold">Admin Panel</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-2 text-lg focus:outline-none cursor-pointer"
          style={{ background: 'none', border: 'none' }}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
      </div>
      <Menu
        mode="inline"
        items={menuItems}
        onClick={handleMenuClick}
        style={{ height: '100%', borderRight: 0, background: '#f5f5f5' }}
      />
    </Sider>
  );
} 
