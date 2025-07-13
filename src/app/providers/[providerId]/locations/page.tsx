"use client";
import { useState } from 'react';
import { Card, Typography, Table, Button, Modal, Descriptions, Tag, Badge } from 'antd';
import { HomeOutlined, PlusOutlined, EditOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const { Title, Text } = Typography;

// Mock locations data
const mockLocations = [
  { id: 'LOC001', name: 'Main Office', type: 'Primary', status: 'Active', address: '123 Main St, City, State', phone: '(555) 123-4567', email: 'main@provider.com', lastUpdated: '2024-01-15', notes: 'Primary location' },
  { id: 'LOC002', name: 'Downtown Clinic', type: 'Clinic', status: 'Active', address: '456 Downtown Ave, City, State', phone: '(555) 234-5678', email: 'downtown@provider.com', lastUpdated: '2024-01-14', notes: 'Specialty clinic' },
];
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Address', dataIndex: 'address', key: 'address', ellipsis: true },
  { title: 'Phone', dataIndex: 'phone', key: 'phone' },
];

const statusColors: { [key: string]: string } = {
  Active: "green",
  Inactive: "red"
};

const typeColors: { [key: string]: string } = {
  Primary: "blue",
  Clinic: "purple",
  Surgery: "red",
  Specialty: "cyan"
};

export default function ProviderLocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState<typeof mockLocations[0] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showLocationDetail = (location: typeof mockLocations[0]) => {
    setSelectedLocation(location);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedLocation(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Title level={4} style={{ margin: 0 }}>
            <HomeOutlined /> Provider Locations
          </Title>
          <Button type="primary" icon={<PlusOutlined />}>Add Location</Button>
        </div>
        <Table
          dataSource={mockLocations}
          columns={columns}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} locations`
          }}
          className="cursor-pointer"
          onRow={(record) => ({
            onClick: () => showLocationDetail(record),
            style: { cursor: "pointer" }
          })}
        />
      </Card>
      <Modal
        title={
          <span>
            <HomeOutlined /> Location Details - {selectedLocation?.name}
          </span>
        }
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>Close</Button>,
          <Button key="edit" type="primary" icon={<EditOutlined />}>Edit Location</Button>
        ]}
        width={700}
      >
        {selectedLocation && (
          <div className="space-y-6">
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Location Name">
                <Text strong>{selectedLocation.name}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Type">
                <Tag color={typeColors[selectedLocation.type] || "default"}>{selectedLocation.type}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Badge color={statusColors[selectedLocation.status] || "default"} text={selectedLocation.status} />
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                <EnvironmentOutlined /> {selectedLocation.address}
              </Descriptions.Item>
              <Descriptions.Item label="Phone">
                <PhoneOutlined /> {selectedLocation.phone}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                <MailOutlined /> {selectedLocation.email}
              </Descriptions.Item>
              <Descriptions.Item label="Last Updated">
                {selectedLocation.lastUpdated}
              </Descriptions.Item>
              <Descriptions.Item label="Notes">
                {selectedLocation.notes}
              </Descriptions.Item>
            </Descriptions>
          </div>
        )}
      </Modal>
    </div>
  );
} 