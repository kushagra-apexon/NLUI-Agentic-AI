// Attachments List Page for a Claim
"use client";
import { useParams, useRouter } from 'next/navigation';
import { Card, Table } from 'antd';
import "antd/dist/reset.css";

// Mock attachments for demonstration
const attachments = [
  { id: 'ATT-001', name: 'Lab Report.pdf', type: 'PDF', uploaded: '2024-01-15' },
  { id: 'ATT-002', name: 'X-Ray.jpg', type: 'Image', uploaded: '2024-01-16' },
];
const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Uploaded', dataIndex: 'uploaded', key: 'uploaded' },
];

export default function AttachmentsListPage() {
  const { claimId } = useParams();
  const router = useRouter();
  
  
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold">Attachments for Claim #{claimId}</span>}
        className="shadow-lg rounded-lg"
        styles={{ body: { padding: 0 } }}
      >
        <Table
          columns={columns}
          dataSource={attachments}
          rowKey="id"
          pagination={false}
          className="rounded-b-lg"
          onRow={record => ({
            onClick: () => router.push(`/claims/${claimId}/attachments/${record.id}`),
            style: { cursor: "pointer" },
          })}
          rowClassName={(_, idx) => idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
          bordered
        />
      </Card>
    </div>
  );
} 