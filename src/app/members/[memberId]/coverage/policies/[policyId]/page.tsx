"use client";
import { Card, Descriptions, Tag, Button } from 'antd';
import { FileTextOutlined, SafetyCertificateOutlined, CalendarOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock policy data
const mockPolicy = {
  id: "POL001",
  type: "Health Insurance",
  status: "Active",
  startDate: "2024-01-01",
  endDate: "2024-12-31",
  premium: "$450/month",
  deductible: "$1,000",
  copay: "$25",
  coverage: "80/20",
  provider: "Blue Cross Blue Shield"
};

export default function PolicyDetailPage() {
  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Policy Details</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions
          title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Policy Information</span>}
          bordered
          column={1}
        >
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> Policy ID</span>}>
            {mockPolicy.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><SafetyCertificateOutlined /> Type</span>}>
            <Tag color="blue">{mockPolicy.type}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color="green">{mockPolicy.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Coverage Period</span>}>
            {mockPolicy.startDate} - {mockPolicy.endDate}
          </Descriptions.Item>
        </Descriptions>
        
        <div className="mt-4">
          <Button type="primary">View Endorsements</Button>
        </div>
      </Card>
    </div>
  );
} 