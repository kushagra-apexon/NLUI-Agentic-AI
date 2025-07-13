"use client";
import { useState } from 'react';
import { Card, Typography, Table, Button, Space, Modal, Descriptions, Tag, Badge } from 'antd';
import { FileTextOutlined, DownloadOutlined, UserOutlined, CalendarOutlined, DollarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const { Title, Text } = Typography;

// Mock claims data for providers
const mockClaims = [
  { 
    id: 'CLM001', 
    claimNumber: 'CLM001', 
    memberName: 'John Smith', 
    memberId: 'M001', 
    serviceType: 'Consultation', 
    status: 'Approved', 
    diagnosis: 'Hypertension', 
    serviceDate: '2024-01-15', 
    submittedDate: '2024-01-16', 
    location: 'City Hospital', 
    amount: 250, 
    paidAmount: 200, 
    processingTime: '2 days',
    documents: ['Medical Report.pdf', 'Lab Results.pdf']
  },
  { 
    id: 'CLM002', 
    claimNumber: 'CLM002', 
    memberName: 'Mary Johnson', 
    memberId: 'M002', 
    serviceType: 'Procedure', 
    status: 'Pending', 
    diagnosis: 'Diabetes Management', 
    serviceDate: '2024-01-14', 
    submittedDate: '2024-01-15', 
    location: 'City Hospital', 
    amount: 500, 
    paidAmount: 0, 
    processingTime: '1 day',
    documents: ['Procedure Report.pdf']
  },
];
const columns = [
  { title: 'Claim Number', dataIndex: 'claimNumber', key: 'claimNumber' },
  { title: 'Member', dataIndex: 'memberName', key: 'memberName' },
  { title: 'Service Type', dataIndex: 'serviceType', key: 'serviceType' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Amount', dataIndex: 'amount', key: 'amount', render: (amount: number) => `$${amount.toFixed(2)}` },
  { title: 'Date', dataIndex: 'serviceDate', key: 'serviceDate' },
];

const totalClaims = 2;
const approvedClaims = 1;
const pendingClaims = 1;
const deniedClaims = 0;
const totalAmount = 750;
const totalPaid = 200;

const serviceTypeColors: { [key: string]: string } = {
  Consultation: "blue",
  Procedure: "purple",
  Surgery: "red",
  "Follow-up": "green",
  "Specialist Consultation": "cyan"
};

export default function ProviderClaimsPage() {
  const [selectedClaim, setSelectedClaim] = useState<typeof mockClaims[0] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showClaimDetail = (claim: typeof mockClaims[0]) => {
    setSelectedClaim(claim);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedClaim(null);
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#1890ff" }}>{totalClaims}</Title>
            <Text type="secondary">Total Claims</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#52c41a" }}>{approvedClaims}</Title>
            <Text type="secondary">Approved</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#faad14" }}>{pendingClaims}</Title>
            <Text type="secondary">Pending</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Title level={3} style={{ margin: 0, color: "#ff4d4f" }}>{deniedClaims}</Title>
            <Text type="secondary">Denied</Text>
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <FileTextOutlined /> Provider Claims
          </Title>
          <Space>
            <Button type="primary" icon={<FileTextOutlined />}>
              New Claim
            </Button>
            <Button icon={<DownloadOutlined />}>
              Export
            </Button>
          </Space>
        </div>

        {/* Financial Summary */}
        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Text strong>Total Billed:</Text>
              <div className="text-lg font-bold text-blue-600">${totalAmount.toFixed(2)}</div>
            </div>
            <div>
              <Text strong>Total Paid:</Text>
              <div className="text-lg font-bold text-green-600">${totalPaid.toFixed(2)}</div>
            </div>
            <div>
              <Text strong>Collection Rate:</Text>
              <div className="text-lg font-bold text-purple-600">
                {totalAmount > 0 ? ((totalPaid / totalAmount) * 100).toFixed(1) : 0}%
              </div>
            </div>
          </div>
        </div>

        <Table
          dataSource={mockClaims}
          columns={columns}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} claims`
          }}
          className="cursor-pointer"
          onRow={(record) => ({
            onClick: () => showClaimDetail(record),
            style: { cursor: "pointer" }
          })}
        />
      </Card>

      <Modal
        title={
          <span>
            <FileTextOutlined /> Claim Details - {selectedClaim?.claimNumber}
          </span>
        }
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>
            Close
          </Button>,
          <Button key="download" type="primary" icon={<DownloadOutlined />}>
            Download Documents
          </Button>
        ]}
        width={800}
      >
        {selectedClaim && (
          <div className="space-y-6">
            <Descriptions bordered column={2}>
              <Descriptions.Item label="Claim Number" span={2}>
                <Text strong>{selectedClaim.claimNumber}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Member Name">
                <UserOutlined /> {selectedClaim.memberName}
              </Descriptions.Item>
              <Descriptions.Item label="Member ID">
                {selectedClaim.memberId}
              </Descriptions.Item>
              <Descriptions.Item label="Service Type">
                <Tag color={serviceTypeColors[selectedClaim.serviceType] || "default"}>
                  {selectedClaim.serviceType}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Badge 
                  status={selectedClaim.status === "Approved" ? "success" : selectedClaim.status === "Pending" ? "processing" : selectedClaim.status === "Denied" ? "error" : "default"} 
                  text={selectedClaim.status}
                />
              </Descriptions.Item>
              <Descriptions.Item label="Diagnosis" span={2}>
                {selectedClaim.diagnosis}
              </Descriptions.Item>
              <Descriptions.Item label="Service Date">
                <CalendarOutlined /> {selectedClaim.serviceDate}
              </Descriptions.Item>
              <Descriptions.Item label="Submitted Date">
                <CalendarOutlined /> {selectedClaim.submittedDate}
              </Descriptions.Item>
              <Descriptions.Item label="Location" span={2}>
                {selectedClaim.location}
              </Descriptions.Item>
              <Descriptions.Item label="Billed Amount" span={2}>
                <Text strong style={{ fontSize: "16px", color: "#1890ff" }}>
                  <DollarOutlined /> ${selectedClaim.amount.toFixed(2)}
                </Text>
              </Descriptions.Item>
              {selectedClaim.paidAmount > 0 && (
                <Descriptions.Item label="Paid Amount" span={2}>
                  <Text strong style={{ fontSize: "16px", color: "#52c41a" }}>
                    <DollarOutlined /> ${selectedClaim.paidAmount.toFixed(2)}
                  </Text>
                </Descriptions.Item>
              )}
              <Descriptions.Item label="Processing Time" span={2}>
                <div className="flex items-center gap-2">
                  <ClockCircleOutlined />
                  {selectedClaim.processingTime}
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Documents" span={2}>
                <div className="space-y-2">
                  {selectedClaim.documents.map((doc: string, index: number) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="flex items-center gap-2">
                        <FileTextOutlined />
                        {doc}
                      </span>
                      <Button size="small" icon={<DownloadOutlined />}>
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </Descriptions.Item>
            </Descriptions>
          </div>
        )}
      </Modal>
    </div>
  );
} 