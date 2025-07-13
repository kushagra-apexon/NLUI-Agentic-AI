"use client";
import { Card, Descriptions, Tag, Button, Progress } from 'antd';
import { FileTextOutlined, UserOutlined, CalendarOutlined, DollarOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock claim data
const mockClaim = {
  id: "CLM001",
  memberId: "MEM001",
  memberName: "John Smith",
  service: "MRI Scan",
  provider: "City Medical Center",
  status: "Approved",
  submittedDate: "2024-01-15",
  processedDate: "2024-01-18",
  amount: "$1,500.00",
  paidAmount: "$1,200.00",
  memberResponsibility: "$300.00",
  progress: 100
};

export default function ClaimOverviewPage() {
  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Claim Overview</span>}
        className="shadow-lg rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Descriptions
              title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Claim Information</span>}
              bordered
              column={1}
            >
              <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> Claim ID</span>}>
                {mockClaim.id}
              </Descriptions.Item>
              <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Member</span>}>
                {mockClaim.memberName} ({mockClaim.memberId})
              </Descriptions.Item>
              <Descriptions.Item label="Service">
                {mockClaim.service}
              </Descriptions.Item>
              <Descriptions.Item label="Provider">
                {mockClaim.provider}
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag color="green">{mockClaim.status}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Submitted Date</span>}>
                {mockClaim.submittedDate}
              </Descriptions.Item>
              <Descriptions.Item label="Processed Date">
                {mockClaim.processedDate}
              </Descriptions.Item>
            </Descriptions>
          </div>
          
          <div>
            <Card title={<span className="font-semibold flex items-center gap-2"><DollarOutlined /> Financial Summary</span>}>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-semibold">{mockClaim.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Paid Amount:</span>
                  <span className="font-semibold text-green-600">{mockClaim.paidAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Member Responsibility:</span>
                  <span className="font-semibold text-red-600">{mockClaim.memberResponsibility}</span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-2">
                    <span>Processing Progress:</span>
                    <span>{mockClaim.progress}%</span>
                  </div>
                  <Progress percent={mockClaim.progress} status="success" />
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="mt-6 flex gap-4">
          <Button type="primary">View Details</Button>
          <Button>Download Report</Button>
          <Button>Print Summary</Button>
        </div>
      </Card>
    </div>
  );
} 