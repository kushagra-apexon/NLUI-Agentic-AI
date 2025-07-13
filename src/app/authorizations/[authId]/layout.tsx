"use client";
import React from 'react';
import { Tabs } from 'antd';
import { useParams, usePathname } from 'next/navigation';
import Breadcrumb from "@/components/Breadcrumb";
import "antd/dist/reset.css";


export default function AuthorizationDetailLayout({ children }: { children: React.ReactNode }) {
  const { authId } = useParams();
  const pathname = usePathname();
  const base = pathname.split('/').slice(0, 4).join('/');

  const tabs = [
    { path: `${base}/details`, name: 'Details' },
    { path: `${base}/permissions`, name: 'Permissions' },
    { path: `${base}/history`, name: 'History' },
  ];

  const activeKey = tabs.find(tab => pathname.endsWith(tab.path))?.key || tabs[0].key;

  return (
    <div className="p-8">
      <Breadcrumb />
      <h2 className="text-xl font-semibold mb-4">Authorization #{authId}</h2>
      <Tabs
        activeKey={activeKey}
        onChange={key => {
          window.location.href = `${base}/${key}`;
        }}
        className="mb-6"
        items={tabs.map(tab => ({
          key: tab.path,
          label: tab.name,
        }))}
      />
      <div>{children}</div>
    </div>
  );
} 