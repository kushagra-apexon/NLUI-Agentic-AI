"use client";
import { useParams } from 'next/navigation';
import { Card, Descriptions, Tag } from 'antd';
import { FileTextOutlined, SafetyCertificateOutlined, CalendarOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock endorsement data
const mockEndorsement = {
  id: "END001",
  type: "Benefit Enhancement",
  status: "Active",
  effectiveDate: "2024-01-15",
  description: "Increased coverage for prescription drugs from $50 to $100 per month",
  policyId: "POL001",
  memberId: "MEM001",
  createdBy: "System Admin",
  createdDate: "2024-01-10"
};

export default function EndorsementDetailPage() {
  const params = useParams();
  const endorsementId = Array.isArray(params.endorsementId) ? params.endorsementId[0] : params.endorsementId;
  const policyId = Array.isArray(params.policyId) ? params.policyId[0] : params.policyId;
  const memberId = Array.isArray(params.memberId) ? params.memberId[0] : params.memberId;

  const isMatch =
    endorsementId === mockEndorsement.id &&
    policyId === mockEndorsement.policyId &&
    memberId === mockEndorsement.memberId;

  if (!isMatch) {
    return <div className="text-red-600 p-8">Endorsement not found.</div>;
  }

  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Endorsement Details</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions
          title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Endorsement Information</span>}
          bordered
          column={1}
        >
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> Endorsement ID</span>}>
            {mockEndorsement.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><SafetyCertificateOutlined /> Type</span>}>
            <Tag color="green">{mockEndorsement.type}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Effective Date</span>}>
            {mockEndorsement.effectiveDate}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {mockEndorsement.description}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 