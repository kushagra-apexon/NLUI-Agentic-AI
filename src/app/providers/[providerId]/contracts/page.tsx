"use client";
import { useState } from 'react';
import { Card, Typography, Table, Button, Space, Modal, Descriptions, Tag, Badge } from 'antd';
import { FileTextOutlined, DownloadOutlined, DollarOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const { Title, Text } = Typography;

// Mock contracts data
const mockContracts = [
  { 
    id: 'CON001', 
    contractNumber: 'CON001', 
    type: 'Network', 
    status: 'Active', 
    specialty: 'Cardiology', 
    reimbursementRate: '85%', 
    annualValue: '$150,000', 
    startDate: '2024-01-01', 
    endDate: '2024-12-31', 
    locations: ['Main Office', 'Downtown Clinic'], 
    documents: ['Contract.pdf', 'Terms.pdf'] 
  },
  { 
    id: 'CON002', 
    contractNumber: 'CON002', 
    type: 'Fee-for-Service', 
    status: 'Pending', 
    specialty: 'General Practice', 
    reimbursementRate: '90%', 
    annualValue: '$75,000', 
    startDate: '2024-02-01', 
    endDate: '2024-12-31', 
    locations: ['Main Office'], 
    documents: ['Contract.pdf'] 
  },
];
const columns = [
  { title: 'Contract Number', dataIndex: 'contractNumber', key: 'contractNumber' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Specialty', dataIndex: 'specialty', key: 'specialty' },
  { title: 'Annual Value', dataIndex: 'annualValue', key: 'annualValue' },
  { title: 'Start Date', dataIndex: 'startDate', key: 'startDate' },
];

const typeColors: { [key: string]: string } = {
  Network: "blue",
  "Fee-for-Service": "purple",
  Capitation: "cyan"
};

export default function ProviderContractsPage() {
  const [selectedContract, setSelectedContract] = useState<typeof mockContracts[0] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showContractDetail = (contract: typeof mockContracts[0]) => {
    setSelectedContract(contract);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedContract(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <FileTextOutlined /> Provider Contracts
          </Title>
          <Space>
            <Button type="primary" icon={<FileTextOutlined />}>
              New Contract
            </Button>
            <Button icon={<DownloadOutlined />}>
              Export
            </Button>
          </Space>
        </div>

        <Table
          dataSource={mockContracts}
          columns={columns}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} contracts`
          }}
          className="cursor-pointer"
          onRow={(record) => ({
            onClick: () => showContractDetail(record),
            style: { cursor: "pointer" }
          })}
        />
      </Card>

      <Modal
        title={
          <span>
            <FileTextOutlined /> Contract Details - {selectedContract?.contractNumber}
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
        {selectedContract && (
          <div className="space-y-6">
            <Descriptions bordered column={2}>
              <Descriptions.Item label="Contract Number" span={2}>
                <Text strong>{selectedContract.contractNumber}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Type">
                <Tag color={typeColors[selectedContract.type] || "default"}>
                  {selectedContract.type}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Badge 
                  status={selectedContract.status === "Active" ? "success" : selectedContract.status === "Pending" ? "processing" : "error"} 
                  text={selectedContract.status}
                />
              </Descriptions.Item>
              <Descriptions.Item label="Specialty">
                {selectedContract.specialty}
              </Descriptions.Item>
              <Descriptions.Item label="Reimbursement Rate">
                <Text strong style={{ color: "#52c41a" }}>
                  {selectedContract.reimbursementRate}
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Annual Value" span={2}>
                <Text strong style={{ fontSize: "16px", color: "#52c41a" }}>
                  <DollarOutlined /> {selectedContract.annualValue}
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Start Date">
                {selectedContract.startDate}
              </Descriptions.Item>
              <Descriptions.Item label="End Date">
                {selectedContract.endDate}
              </Descriptions.Item>
              <Descriptions.Item label="Locations" span={2}>
                <div className="space-y-1">
                  {selectedContract.locations.map((location: string, index: number) => (
                    <Tag key={index} color="blue">{location}</Tag>
                  ))}
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Documents" span={2}>
                <div className="space-y-2">
                  {selectedContract.documents.map((doc: string, index: number) => (
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