"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions, Button } from 'antd';
import { FileTextOutlined, BarChartOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import "antd/dist/reset.css";

// Mock reports data
const mockReports = [
  {
    id: "RPT001",
    name: "Monthly Claims Summary",
    type: "Claims",
    status: "Completed",
    schedule: "Monthly",
    lastRun: "2024-01-15 10:30:00",
    fileSize: "2.5 MB",
    recordCount: "15,432",
    executionTime: "2m 15s",
    format: "PDF",
    createdBy: "Admin User",
    description: "Comprehensive monthly summary of all processed claims"
  },
  {
    id: "RPT002",
    name: "Provider Performance Analysis",
    type: "Analytics",
    status: "Running",
    schedule: "Weekly",
    lastRun: "2024-01-22 08:00:00",
    fileSize: "1.8 MB",
    recordCount: "8,756",
    executionTime: "1m 45s",
    format: "Excel",
    createdBy: "Analytics Team",
    description: "Detailed analysis of provider performance metrics"
  },
  {
    id: "RPT003",
    name: "Billing Reconciliation",
    type: "Billing",
    status: "Failed",
    schedule: "Daily",
    lastRun: "2024-01-25 06:00:00",
    fileSize: "N/A",
    recordCount: "N/A",
    executionTime: "N/A",
    format: "CSV",
    createdBy: "Finance Team",
    description: "Daily reconciliation of billing transactions"
  }
];

const typeColors: { [key: string]: string } = {
  Claims: "blue",
  Analytics: "green",
  Billing: "orange",
  Reports: "purple"
};

const statusColors: { [key: string]: string } = {
  Completed: "green",
  Running: "blue",
  Failed: "red",
  Scheduled: "orange"
};

export default function ReportDetailPage() {
  const params = useParams();
  const router = useRouter();
  const reportId = Array.isArray(params.reportId) ? params.reportId[0] : params.reportId;
  
  // Find the report by ID
  const report = mockReports.find(r => r.id === reportId);
  
  if (!report) {
    return <div className="text-red-600 p-8">Report not found.</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileTextOutlined /> Report Details</span>}
        className="shadow-lg rounded-lg"
        extra={
          <Button 
            type="primary" 
            icon={<BarChartOutlined />}
            onClick={() => router.push(`/reports/${reportId}/overview`)}
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
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> Report ID</span>}>
            {report.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> Name</span>}>
            {report.name}
          </Descriptions.Item>
          <Descriptions.Item label="Type">
            <Tag color={typeColors[report.type] || "default"}>{report.type}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[report.status] || "default"}>{report.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Schedule">
            {report.schedule}
          </Descriptions.Item>
          <Descriptions.Item label="Format">
            {report.format}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {report.description}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Last Run</span>}>
            {report.lastRun}
          </Descriptions.Item>
          <Descriptions.Item label="File Size">
            {report.fileSize}
          </Descriptions.Item>
          <Descriptions.Item label="Record Count">
            {report.recordCount}
          </Descriptions.Item>
          <Descriptions.Item label="Execution Time">
            {report.executionTime}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Created By</span>}>
            {report.createdBy}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 