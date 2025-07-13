"use client";
import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';
import { Layout, Input, Button, Typography } from 'antd';

export default function Header() {
  const { logout } = useAuth();
  const pathname = usePathname();
  if (pathname === "/login") return null;
  return (
    <Layout.Header className="bg-white shadow-md w-full mb-6 px-8 overflow-x-hidden" style={{ background: '#fff', boxShadow: '0 2px 8px #f0f1f2', marginBottom: 32, paddingTop: 0, paddingBottom: 0 }}>
      <div className="flex items-center h-20 w-full min-w-0 justify-between">
        <Typography.Title level={4} className="!mb-0 !text-xl truncate min-w-0 flex-1 flex items-center" style={{ margin: 0 }}>
          US Healthcare Admin Panel
        </Typography.Title>
        <div className="flex items-center gap-4 flex-shrink-0">
          <Input
            placeholder="Smart Search (coming soon)"
            className="w-64 min-w-0 max-w-xs"
            disabled
          />
          <Button type="primary" danger onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </Layout.Header>
  );
} 
