"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions } from 'antd';
import { FileSearchOutlined, UserOutlined, CalendarOutlined, HistoryOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";
import { Table } from 'antd';
import { useRouter } from 'next/navigation';

// Mock audit data
const mockAudits = [
  {
    id: "AUD001",
    itemId: "ITEM001",
    orderId: "ORD001",
    pharmacyId: "PHM001",
    action: "Inspected",
    by: "Pharmacy Admin",
    date: "2024-01-25 10:00:00",
    status: "Passed",
    notes: "All items verified and passed inspection."
  },
  {
    id: "AUD002",
    itemId: "ITEM002",
    orderId: "ORD002",
    pharmacyId: "PHM001",
    action: "Flagged",
    by: "Quality Control",
    date: "2024-01-26 11:30:00",
    status: "Flagged",
    notes: "Discrepancy found in item count."
  },
  {
    id: "AUD003",
    itemId: "ITEM003",
    orderId: "ORD003",
    pharmacyId: "PHM001",
    action: "Verified",
    by: "Inventory Manager",
    date: "2024-01-27 09:15:00",
    status: "Passed",
    notes: "All good."
  }
];

// Mock reviews for this audit
const mockReviews = [
  { id: 'REV001', by: 'Quality Manager', date: '2024-01-26 14:00:00', status: 'Approved' },
  { id: 'REV002', by: 'Pharmacy Admin', date: '2024-01-27 10:30:00', status: 'Pending' },
];
const reviewColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'By', dataIndex: 'by', key: 'by' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

const statusColors: { [key: string]: string } = {
  Passed: "green",
  Flagged: "orange",
  Failed: "red"
};

export default function PharmacyOrderItemAuditDetailPage() {
  const params = useParams();
  const router = useRouter();
  const auditId = Array.isArray(params.auditId) ? params.auditId[0] : params.auditId;
  const pharmacyId = params.pharmacyId;
  const orderId = params.orderId;
  const itemId = params.itemId;

  const audit = mockAudits.find(a => a.id === auditId);

  if (!audit) {
    return <div className="text-red-600 p-8">Audit not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8 space-y-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><FileSearchOutlined /> Audit Detail</span>}
        className="shadow-lg rounded-lg"
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileSearchOutlined /> Audit ID</span>}>
            {audit.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><HistoryOutlined /> Item ID</span>}>
            {audit.itemId}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><HistoryOutlined /> Order ID</span>}>
            {audit.orderId}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><HistoryOutlined /> Pharmacy ID</span>}>
            {audit.pharmacyId}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> By</span>}>
            {audit.by}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Date</span>}>
            {audit.date}
          </Descriptions.Item>
          <Descriptions.Item label="Action">
            {audit.action}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[audit.status] || "default"}>{audit.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Notes">
            {audit.notes}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title="Audit Reviews">
        <Table
          dataSource={mockReviews}
          columns={reviewColumns}
          rowKey="id"
          pagination={false}
          onRow={record => ({
            onClick: () => router.push(`/pharmacies/${pharmacyId}/orders/${orderId}/items/${itemId}/audit/${auditId}/review/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 