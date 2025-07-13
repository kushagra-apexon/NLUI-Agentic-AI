"use client";
import { useParams, useRouter } from 'next/navigation';
import { Card, Table } from 'antd';
import { AuditOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock audits for demonstration
const audits = [
  { id: 'AUD001', action: 'Viewed', by: 'John Doe', date: '2024-01-15', details: 'Viewed attachment' },
  { id: 'AUD002', action: 'Downloaded', by: 'Jane Smith', date: '2024-01-16', details: 'Downloaded attachment' },
];
const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Action', dataIndex: 'action', key: 'action' },
  { title: 'By', dataIndex: 'by', key: 'by' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
];

export default function AttachmentAuditTab() {
  const { claimId, attachmentId } = useParams();
  const router = useRouter();
  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><AuditOutlined /> Audit for Attachment #{attachmentId}</span>}
        className="shadow-lg rounded-lg"
        styles={{ body: { padding: 0 } }}
      >
        <Table
          columns={columns}
          dataSource={audits}
          rowKey="id"
          pagination={false}
          className="rounded-b-lg"
          onRow={record => ({
            onClick: () => router.push(`/claims/${claimId}/attachments/${attachmentId}/audit/${record.id}`),
            style: { cursor: "pointer" },
          })}
          rowClassName={(_, idx) => idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
          bordered
        />
      </Card>
    </div>
  );
} 