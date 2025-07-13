"use client";
import { usePathname, useRouter } from 'next/navigation';
import { Breadcrumb as AntdBreadcrumb } from 'antd';

export default function Breadcrumb() {
  const pathname = usePathname();
  const router = useRouter();
  
  const segments = pathname.split('/').filter(Boolean);

  const items = [
    {
      title: 'Home',
      onClick: () => router.push('/'),
    },
    ...segments.map((seg, idx) => {
      const path = '/' + segments.slice(0, idx + 1).join('/');
      let label = seg.replace(/\[|\]/g, "");
      label = label.replace(/([A-Z])/g, " $1").replace(/-/g, " ").replace(/_/g, " ");
      label = label.charAt(0).toUpperCase() + label.slice(1);
      return {
        title: label,
        onClick: idx !== segments.length - 1 ? () => router.push(path) : undefined,
      };
    })
  ];

  return (
    <AntdBreadcrumb
      className="m-10 text-sm"
      items={items}
      separator="/"
      itemRender={(route, params, routes) => {
        const isLast = routes.indexOf(route) === routes.length - 1;
        if (route.onClick && !isLast) {
          return (
            <span style={{ cursor: 'pointer', color: '#1677ff' }} onClick={route.onClick}>
              {route.title}
            </span>
          );
        }
        return <span>{route.title}</span>;
      }}
    />
  );
} 
