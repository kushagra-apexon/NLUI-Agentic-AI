"use client";
import { Tabs } from 'antd';
import { UserOutlined, FileTextOutlined, SafetyCertificateOutlined, HistoryOutlined } from '@ant-design/icons';
import { useRouter, useParams, usePathname } from 'next/navigation';
import "antd/dist/reset.css";

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const memberId = Array.isArray(params.memberId) ? params.memberId[0] : params.memberId;

  // Determine active tab based on current pathname
  const getActiveKey = () => {
    if (pathname.includes('/authorizations')) return 'authorizations';
    if (pathname.includes('/claims')) return 'claims';
    if (pathname.includes('/coverage')) return 'coverage';
    if (pathname.includes('/documents')) return 'documents';
    if (pathname.includes('/history')) return 'history';
    if (pathname.includes('/profile')) return 'profile';
    return 'overview';
  };

  const handleTabChange = (key: string) => {
    const basePath = `/members/${memberId}`;
    if (key === 'overview') {
      router.push(basePath);
    } else {
      router.push(`${basePath}/${key}`);
    }
  };

  const items = [
    {
      key: 'overview',
      label: (
        <span className="flex items-center gap-2">
          <UserOutlined />
          Overview
        </span>
      ),
      children: children,
    },
    {
      key: 'authorizations',
      label: (
        <span className="flex items-center gap-2">
          <SafetyCertificateOutlined />
          Authorizations
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
      key: 'coverage',
      label: (
        <span className="flex items-center gap-2">
          <SafetyCertificateOutlined />
          Coverage
        </span>
      ),
      children: children,
    },
    {
      key: 'documents',
      label: (
        <span className="flex items-center gap-2">
          <FileTextOutlined />
          Documents
        </span>
      ),
      children: children,
    },
    {
      key: 'history',
      label: (
        <span className="flex items-center gap-2">
          <HistoryOutlined />
          History
        </span>
      ),
      children: children,
    },
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
  ];

  return (
    <div className="p-6">
      <Tabs 
        activeKey={getActiveKey()} 
        onChange={handleTabChange}
        items={items} 
      />
    </div>
  );
} 