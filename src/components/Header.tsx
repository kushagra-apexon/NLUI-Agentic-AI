"use client";

import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';
import { Layout, Input, Button, Typography } from 'antd';

export default function Header() {
  const { logout } = useAuth();
  const pathname = usePathname();

  if (pathname === "/login") return null;

  return (
    <Layout.Header
      className="w-full shadow"
      style={{
        background: '#fff',
        boxShadow: '0 2px 8px #f0f1f2',
        padding: '0 24px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Title Section */}
      <Typography.Title
        level={4}
        style={{
          margin: 0,
          fontSize: '1.25rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          flex: 1,
        }}
      >
        US Healthcare Admin Panel
      </Typography.Title>

      {/* Right-side Actions */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexShrink: 0,
          marginLeft: '24px',
        }}
      >
        <Input
          placeholder="Smart Search (coming soon)"
          disabled
          style={{ width: 256 }}
        />
        <Button type="primary" danger onClick={logout}>
          Logout
        </Button>
      </div>
    </Layout.Header>
  );
}
