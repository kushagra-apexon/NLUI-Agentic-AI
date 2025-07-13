"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions, Button } from 'antd';
import { ClockCircleOutlined, UserOutlined, CalendarOutlined, CheckCircleOutlined, FileTextOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import "antd/dist/reset.css";

// Mock utilization request data
const mockUtilizationRequests = [
  {
    id: "UTL001",
    memberName: "John Smith",
    memberId: "MEM001",
    providerName: "Dr. Sarah Johnson",
    providerId: "PRV001",
    serviceType: "Cardiology",
    status: "Approved",
    requestDate: "2024-01-15",
    reviewDate: "2024-01-18",
    urgency: "Standard",
    description: "Cardiac consultation and diagnostic tests",
    requestType: "Pre-authorization",
    duration: "30 days",
    cost: "$1,250.00",
    notes: "Approved for standard cardiac workup"
  },
  {
    id: "UTL002",
    memberName: "Sarah Johnson",
    memberId: "MEM002",
    providerName: "Dr. Michael Chen",
    providerId: "PRV002",
    serviceType: "Orthopedics",
    status: "Pending",
    requestDate: "2024-01-20",
    reviewDate: null,
    urgency: "Urgent",
    description: "Knee surgery and rehabilitation",
    requestType: "Surgery",
    duration: "90 days",
    cost: "$15,000.00",
    notes: "Under review for medical necessity"
  },
  {
    id: "UTL003",
    memberName: "Michael Brown",
    memberId: "MEM003",
    providerName: "Dr. Emily Rodriguez",
    providerId: "PRV003",
    serviceType: "Pediatrics",
    status: "Denied",
    requestDate: "2024-01-10",
    reviewDate: "2024-01-12",
    urgency: "Standard",
    description: "Routine pediatric checkup",
    requestType: "Consultation",
    duration: "1 day",
    cost: "$450.00",
    notes: "Denied - not medically necessary"
  }
];

const statusColors: { [key: string]: string } = {
  Approved: "green",
  Pending: "orange",
  Denied: "red",
  UnderReview: "blue"
};

const urgencyColors: { [key: string]: string } = {
  Urgent: "red",
  Standard: "blue",
  Routine: "green"
};

const requestTypeColors: { [key: string]: string } = {
  "Pre-authorization": "blue",
  Surgery: "red",
  Consultation: "green",
  Treatment: "purple"
};

export default function UtilizationRequestDetailPage() {
  const params = useParams();
  const router = useRouter();
  const requestId = Array.isArray(params.requestId) ? params.requestId[0] : params.requestId;
  
  // Find the utilization request by ID
  const request = mockUtilizationRequests.find(r => r.id === requestId);
  
  if (!request) {
    return <div className="text-red-600 p-8">Utilization request not found.</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><ClockCircleOutlined /> Utilization Request Details</span>}
        className="shadow-lg rounded-lg"
        extra={
          <Button 
            type="primary" 
            icon={<CheckCircleOutlined />}
            onClick={() => router.push(`/utilization/${requestId}/overview`)}
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
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> Request ID</span>}>
            {request.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Member</span>}>
            {request.memberName} ({request.memberId})
          </Descriptions.Item>
          <Descriptions.Item label="Provider">
            {request.providerName} ({request.providerId})
          </Descriptions.Item>
          <Descriptions.Item label="Service Type">
            {request.serviceType}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[request.status] || "default"}>{request.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Urgency">
            <Tag color={urgencyColors[request.urgency] || "default"}>{request.urgency}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Request Type">
            <Tag color={requestTypeColors[request.requestType] || "default"}>{request.requestType}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Duration">
            {request.duration}
          </Descriptions.Item>
          <Descriptions.Item label="Cost">
            {request.cost}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {request.description}
          </Descriptions.Item>
          <Descriptions.Item label="Notes">
            {request.notes}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Request Date</span>}>
            {request.requestDate}
          </Descriptions.Item>
          <Descriptions.Item label="Review Date">
            {request.reviewDate || "Pending"}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 