"use client";
import { useParams } from 'next/navigation';
import { Card, Tag } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

export default function ClaimAdjudicationTab() {
  const { claimId } = useParams();
  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><SafetyCertificateOutlined /> Adjudication</span>}
        className="shadow-lg rounded-lg"
      >
        <div className="space-y-4">
          <div>
            <span className="font-semibold">Claim ID:</span> {claimId}
          </div>
          <div>
            <span className="font-semibold">Adjudication Status:</span> <Tag color="blue">Processed</Tag>
          </div>
          <div>
            <span className="font-semibold">Notes:</span> This claim was adjudicated successfully. (mock data)
          </div>
        </div>
      </Card>
    </div>
  );
} 