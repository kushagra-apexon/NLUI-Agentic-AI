"use client";
import { Card, Tag } from 'antd';
import { ClockCircleOutlined, ExclamationCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const mockStatus = 'process';

function getStatusIcon(status: string) {
  switch (status) {
    case 'process':
      return <ClockCircleOutlined style={{ color: '#1890ff' }} />;
    case 'waiting':
      return <ExclamationCircleOutlined style={{ color: '#faad14' }} />;
    case 'success':
      return <CheckCircleOutlined style={{ color: '#52c41a' }} />;
    case 'error':
      return <CloseCircleOutlined style={{ color: '#ff4d4f' }} />;
    default:
      return null;
  }
}

export default function UtilizationStatusPage() {
  return (
    <div className="p-6">
      <Card>
        <div className="flex items-center gap-2">
          {getStatusIcon(mockStatus)}
          <Tag>{mockStatus}</Tag>
        </div>
      </Card>
    </div>
  );
} 