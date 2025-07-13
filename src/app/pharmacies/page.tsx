'use client';

import React, { useState } from 'react';
import { Table, Input, Button, Tag, Space, Card, Typography, Row, Col, Statistic, Select } from 'antd';
import { SearchOutlined, FilterOutlined, PlusOutlined, EyeOutlined, DownloadOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Text } = Typography;
const { Option } = Select;

// Mock data for pharmacies
const mockPharmaciesData = [
  {
    id: 'PHM001',
    name: 'City Pharmacy',
    type: 'Retail',
    status: 'Active',
    address: '123 Main St, City, State',
    phone: '(555) 123-4567',
    manager: 'John Smith',
    licenseNumber: 'PH123456',
    lastInspection: '2024-01-15'
  },
  {
    id: 'PHM002',
    name: 'Medical Center Pharmacy',
    type: 'Hospital',
    status: 'Active',
    address: '456 Hospital Dr, City, State',
    phone: '(555) 234-5678',
    manager: 'Sarah Johnson',
    licenseNumber: 'PH234567',
    lastInspection: '2024-01-14'
  },
  {
    id: 'PHM003',
    name: 'Community Drug Store',
    type: 'Retail',
    status: 'Inactive',
    address: '789 Community Ave, City, State',
    phone: '(555) 345-6789',
    manager: 'Michael Chen',
    licenseNumber: 'PH345678',
    lastInspection: '2024-01-13'
  },
  {
    id: 'PHM004',
    name: 'Specialty Pharmacy',
    type: 'Specialty',
    status: 'Active',
    address: '321 Specialty Blvd, City, State',
    phone: '(555) 456-7890',
    manager: 'Lisa Rodriguez',
    licenseNumber: 'PH456789',
    lastInspection: '2024-01-12'
  },
  {
    id: 'PHM005',
    name: 'University Pharmacy',
    type: 'Hospital',
    status: 'Active',
    address: '654 University Rd, City, State',
    phone: '(555) 567-8901',
    manager: 'David Kim',
    licenseNumber: 'PH567890',
    lastInspection: '2024-01-11'
  },
  {
    id: 'PHM006',
    name: 'Neighborhood Pharmacy',
    type: 'Retail',
    status: 'Active',
    address: '987 Neighborhood Ln, City, State',
    phone: '(555) 678-9012',
    manager: 'Patricia Miller',
    licenseNumber: 'PH678901',
    lastInspection: '2024-01-10'
  },
  {
    id: 'PHM007',
    name: 'Cancer Care Pharmacy',
    type: 'Specialty',
    status: 'Active',
    address: '147 Cancer Care Dr, City, State',
    phone: '(555) 789-0123',
    manager: 'James Taylor',
    licenseNumber: 'PH789012',
    lastInspection: '2024-01-09'
  },
  {
    id: 'PHM008',
    name: 'Veterans Pharmacy',
    type: 'Government',
    status: 'Active',
    address: '258 Veterans Way, City, State',
    phone: '(555) 890-1234',
    manager: 'Linda Anderson',
    licenseNumber: 'PH890123',
    lastInspection: '2024-01-08'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return 'green';
    case 'Inactive': return 'red';
    case 'Pending': return 'orange';
    case 'Suspended': return 'red';
    default: return 'default';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Retail': return 'blue';
    case 'Hospital': return 'green';
    case 'Specialty': return 'purple';
    case 'Government': return 'orange';
    default: return 'default';
  }
};

export default function PharmaciesPage() {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const pageSize = 10;

  const filteredData = mockPharmaciesData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchText.toLowerCase()) ||
                         item.licenseNumber.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const columns = [
    {
      title: 'Pharmacy ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => (
        <Link href={`/pharmacies/${text}`} className="text-blue-600 hover:text-blue-800 font-medium">
          {text}
        </Link>
      ),
    },
    {
      title: 'Pharmacy Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: { manager: string }) => (
        <div>
          <div className="font-medium">{text}</div>
          <div className="text-gray-500 text-sm">Manager: {record.manager}</div>
        </div>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => (
        <Tag color={getTypeColor(type)}>
          {type}
        </Tag>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'License Number',
      dataIndex: 'licenseNumber',
      key: 'licenseNumber',
    },
    {
      title: 'Last Inspection',
      dataIndex: 'lastInspection',
      key: 'lastInspection',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: string, record: { id: string; status: string }) => (
        <Space>
          <Link href={`/pharmacies/${record.id}`}>
            <Button type="primary" size="small" icon={<EyeOutlined />}>
              View
            </Button>
          </Link>
          {record.status === 'Active' && (
            <Button size="small" icon={<DownloadOutlined />}>
              Download
            </Button>
          )}
        </Space>
      ),
    },
  ];

  const stats = {
    total: mockPharmaciesData.length,
    active: mockPharmaciesData.filter(item => item.status === 'Active').length,
    inactive: mockPharmaciesData.filter(item => item.status === 'Inactive').length,
    retail: mockPharmaciesData.filter(item => item.type === 'Retail').length,
  };

  return (
    <div className="p-6 overflow-x-auto">
      <Title level={2}>Pharmacy Management</Title>
      <Text type="secondary">Manage pharmacy networks and relationships</Text>

      {/* Statistics Cards */}
      <Row gutter={16} className="mb-6">
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Pharmacies"
              value={stats.total}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Active"
              value={stats.active}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Inactive"
              value={stats.inactive}
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Retail"
              value={stats.retail}
              valueStyle={{ color: '#722ed6' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Search and Filters */}
      <Card className="mb-6">
        <Row gutter={16} align="middle">
          <Col span={6}>
            <Input
              placeholder="Search pharmacies..."
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              size="large"
            />
          </Col>
          <Col span={4}>
            <Select
              placeholder="Status"
              value={statusFilter}
              onChange={setStatusFilter}
              size="large"
              style={{ width: '100%' }}
            >
              <Option value="all">All Status</Option>
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
              <Option value="Pending">Pending</Option>
              <Option value="Suspended">Suspended</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select
              placeholder="Type"
              value={typeFilter}
              onChange={setTypeFilter}
              size="large"
              style={{ width: '100%' }}
            >
              <Option value="all">All Types</Option>
              <Option value="Retail">Retail</Option>
              <Option value="Hospital">Hospital</Option>
              <Option value="Specialty">Specialty</Option>
              <Option value="Government">Government</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Button icon={<FilterOutlined />} size="large">
              More Filters
            </Button>
          </Col>
          <Col span={6}>
            <Button type="primary" icon={<PlusOutlined />} size="large">
              Add Pharmacy
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Table */}
      <Card>
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: filteredData.length,
            onChange: (page) => setCurrentPage(page),
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          }}
          scroll={{ x: 1200 }}
        />
      </Card>
    </div>
  );
} 
