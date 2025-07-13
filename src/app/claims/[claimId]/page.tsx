"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions, Button } from 'antd';
import { FileTextOutlined, UserOutlined, DollarOutlined, CalendarOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import "antd/dist/reset.css";

// Mock claims data
const mockClaims = [
  {
    id: "CLM001",
    memberName: "John Smith",
    memberId: "MEM001",
    providerName: "Dr. Sarah Johnson",
    providerId: "PRV001",
    serviceType: "Cardiology",
    status: "Approved",
    amount: "$1,250.00",
    submittedDate: "2024-01-15",
    processedDate: "2024-01-18",
    description: "Cardiac consultation and diagnostic tests",
    claimType: "Medical",
    priority: "Standard",
    attachments: 3
  },
  {
    id: "CLM002",
    memberName: "Sarah Johnson",
    memberId: "MEM002",
    providerName: "Dr. Michael Chen",
    providerId: "PRV002",
    serviceType: "Orthopedics",
    status: "Pending",
    amount: "$2,100.00",
    submittedDate: "2024-01-20",
    processedDate: null,
    description: "Knee surgery and rehabilitation",
    claimType: "Surgical",
    priority: "High",
    attachments: 5
  },
  {
    id: "CLM003",
    memberName: "Michael Brown",
    memberId: "MEM003",
    providerName: "Dr. Emily Rodriguez",
    providerId: "PRV003",
    serviceType: "Pediatrics",
    status: "Denied",
    amount: "$450.00",
    submittedDate: "2024-01-10",
    processedDate: "2024-01-12",
    description: "Routine pediatric checkup",
    claimType: "Medical",
    priority: "Standard",
    attachments: 2
  }
];

const statusColors: { [key: string]: string } = {
  Approved: "green",
  Pending: "orange",
  Denied: "red",
  UnderReview: "blue"
};

const claimTypeColors: { [key: string]: string } = {
  Medical: "blue",
  Surgical: "red",
  Dental: "green",
  Vision: "purple"
};

const priorityColors: { [key: string]: string } = {
  High: "red",
  Standard: "blue",
  Low: "green"
};

export default function ClaimDetailPage() {
  const params = useParams();
  const router = useRouter();
  const claimId = Array.isArray(params.claimId) ? params.claimId[0] : params.claimId;
  
  // Find the claim by ID
  const claim = mockClaims.find(c => c.id === claimId);
  
  if (!claim) {
    return <div className="text-red-600 p-8">Claim not found.</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Claim Details</span>}
        className="shadow-lg rounded-lg"
        extra={
          <Button 
            type="primary" 
            icon={<CheckCircleOutlined />}
            onClick={() => router.push(`/claims/${claimId}/overview`)}
          >
            View Overview
          </Button>
        }
      >
        <Descriptions
          bordered
          column={1}
          size="middle"
        >
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> Claim ID</span>}>
            {claim.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Member</span>}>
            {claim.memberName} ({claim.memberId})
          </Descriptions.Item>
          <Descriptions.Item label="Provider">
            {claim.providerName} ({claim.providerId})
          </Descriptions.Item>
          <Descriptions.Item label="Service Type">
            {claim.serviceType}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[claim.status] || "default"}>{claim.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><DollarOutlined /> Amount</span>}>
            {claim.amount}
          </Descriptions.Item>
          <Descriptions.Item label="Claim Type">
            <Tag color={claimTypeColors[claim.claimType] || "default"}>{claim.claimType}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Priority">
            <Tag color={priorityColors[claim.priority] || "default"}>{claim.priority}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {claim.description}
          </Descriptions.Item>
          <Descriptions.Item label="Attachments">
            {claim.attachments} files
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Submitted Date</span>}>
            {claim.submittedDate}
          </Descriptions.Item>
          <Descriptions.Item label="Processed Date">
            {claim.processedDate || "Pending"}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 