"use client";
import { useParams } from 'next/navigation';
import { Card, Button } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

export default function MemberCoveragePage() {
  const { memberId } = useParams();
  
  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><SafetyCertificateOutlined /> Member Coverage</span>}
        className="shadow-lg rounded-lg"
      >
        <div className="space-y-4">
          <p>Coverage information for member {memberId}</p>
          <Button type="primary">View Policies</Button>
        </div>
      </Card>
    </div>
  );
} 