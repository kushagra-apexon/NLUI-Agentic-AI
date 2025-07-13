"use client";
import { Button, Space } from 'antd';
import { UserOutlined, FileTextOutlined, MedicineBoxOutlined, ShoppingOutlined, CommentOutlined } from '@ant-design/icons';
import { useRouter, useParams, usePathname } from 'next/navigation';
import "antd/dist/reset.css";
import Breadcrumb from '@/components/Breadcrumb';

export default function PharmacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const pharmacyId = Array.isArray(params.pharmacyId) ? params.pharmacyId[0] : params.pharmacyId;

  const handleTabClick = (key: string) => {
    console.log('Tab clicked:', key);
    switch (key) {
      case 'profile':
        console.log('Navigating to profile');
        router.push(`/pharmacies/${pharmacyId}/profile`);
        break;
      case 'claims':
        console.log('Navigating to claims');
        router.push(`/pharmacies/${pharmacyId}/claims`);
        break;
      case 'inventory':
        console.log('Navigating to inventory');
        router.push(`/pharmacies/${pharmacyId}/inventory`);
        break;
      case 'orders':
        console.log('Navigating to orders');
        router.push(`/pharmacies/${pharmacyId}/orders`);
        break;
      case 'reviews':
        console.log('Navigating to reviews');
        router.push(`/pharmacies/${pharmacyId}/reviews`);
        break;
    }
  };

  // Determine active tab based on current route
  const getActiveKey = () => {
    if (pathname.includes('/profile')) return 'profile';
    if (pathname.includes('/claims')) return 'claims';
    if (pathname.includes('/inventory')) return 'inventory';
    if (pathname.includes('/orders')) return 'orders';
    if (pathname.includes('/reviews')) return 'reviews';
    return 'profile'; // default
  };

  const activeKey = getActiveKey();

  return (
    <div className="p-6">
      <Breadcrumb />
      <div className="mb-6">
        <Space wrap>
          <Button 
            type={activeKey === 'profile' ? 'primary' : 'default'}
            icon={<UserOutlined />}
            onClick={() => handleTabClick('profile')}
            style={{ cursor: 'pointer' }}
          >
            Profile
          </Button>
          <Button 
            type={activeKey === 'claims' ? 'primary' : 'default'}
            icon={<FileTextOutlined />}
            onClick={() => handleTabClick('claims')}
            style={{ cursor: 'pointer' }}
          >
            Claims
          </Button>
          <Button 
            type={activeKey === 'inventory' ? 'primary' : 'default'}
            icon={<MedicineBoxOutlined />}
            onClick={() => handleTabClick('inventory')}
            style={{ cursor: 'pointer' }}
          >
            Inventory
          </Button>
          <Button 
            type={activeKey === 'orders' ? 'primary' : 'default'}
            icon={<ShoppingOutlined />}
            onClick={() => handleTabClick('orders')}
            style={{ cursor: 'pointer' }}
          >
            Orders
          </Button>
          <Button 
            type={activeKey === 'reviews' ? 'primary' : 'default'}
            icon={<CommentOutlined />}
            onClick={() => handleTabClick('reviews')}
            style={{ cursor: 'pointer' }}
          >
            Reviews
          </Button>
        </Space>
      </div>
      <div className="mt-6">
        {children}
      </div>
    </div>
  );
} 