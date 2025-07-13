"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions, Table } from 'antd';
import { FileTextOutlined, UserOutlined, CalendarOutlined, AlertOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";
import { useRouter } from 'next/navigation';

// Mock appeal data
const mockAppeals = [
  {
    id: "APL001",
    authId: "AUTH001",
    memberName: "John Smith",
    memberId: "MEM001",
    reason: "Denial of Coverage",
    status: "Under Review",
    submittedDate: "2024-01-15",
    dueDate: "2024-02-15",
    priority: "High",
    description: "Appeal for denied cardiac procedure coverage"
  },
  {
    id: "APL002",
    authId: "AUTH002",
    memberName: "Sarah Johnson",
    memberId: "MEM002",
    reason: "Incorrect Billing",
    status: "Approved",
    submittedDate: "2024-01-10",
    dueDate: "2024-02-10",
    priority: "Medium",
    description: "Appeal for billing error correction"
  }
];

const statusColors: { [key: string]: string } = {
  "Under Review": "orange",
  "Approved": "green",
  "Denied": "red",
  "Pending": "blue"
};

const priorityColors: { [key: string]: string } = {
  High: "red",
  Medium: "orange",
  Low: "green"
};

const mockReviews = [
  {
    id: 'REV001',
    by: 'Appeals Specialist',
    date: '2024-01-18',
    status: 'In Progress',
    comments: 'Initial review started.'
  },
  {
    id: 'REV002',
    by: 'Medical Director',
    date: '2024-01-19',
    status: 'Completed',
    comments: 'Review completed and approved.'
  }
];
const reviewColumns = [
  { title: 'Review ID', dataIndex: 'id', key: 'id' },
  { title: 'By', dataIndex: 'by', key: 'by' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Comments', dataIndex: 'comments', key: 'comments' },
];

export default function AuthorizationAppealDetailPage() {
  const params = useParams();
  const router = useRouter();
  const appealId = Array.isArray(params.appealId) ? params.appealId[0] : params.appealId;
  const authId = Array.isArray(params.authId) ? params.authId[0] : params.authId;

  const appeal = mockAppeals.find(a => a.id === appealId);

  if (!appeal) {
    return <div className="text-red-600 p-8">Appeal not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8 space-y-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><AlertOutlined /> Appeal Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> Appeal ID</span>}>
            {appeal.id}
          </Descriptions.Item>
          <Descriptions.Item label="Authorization ID">
            {appeal.authId}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Member</span>}>
            {appeal.memberName} ({appeal.memberId})
          </Descriptions.Item>
          <Descriptions.Item label="Reason">
            {appeal.reason}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[appeal.status] || "default"}>{appeal.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Priority">
            <Tag color={priorityColors[appeal.priority] || "default"}>{appeal.priority}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {appeal.description}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Submitted Date</span>}>
            {appeal.submittedDate}
          </Descriptions.Item>
          <Descriptions.Item label="Due Date">
            {appeal.dueDate}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title="Reviews">
        <Table
          dataSource={mockReviews}
          columns={reviewColumns}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/authorizations/${authId}/appeals/${appealId}/review/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 