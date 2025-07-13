'use client';

import React, { useState } from 'react';
import { Table, Input, Button, Tag, Space, Card, Typography, Row, Col, Statistic, Select } from 'antd';
import { SearchOutlined, FilterOutlined, PlusOutlined, EyeOutlined, DownloadOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;
const { Option } = Select;

// Mock data for authorizations
const mockAuthorizationsData = [
  {
    id: 'AUTH001',
    memberName: 'John Smith',
    memberId: 'M-001',
    providerName: 'Dr. Sarah Johnson',
    serviceType: 'Specialist Consultation',
    status: 'Approved',
    submittedDate: '2024-01-15',
    approvedDate: '2024-01-16',
    amount: '$2,500',
    urgency: 'Standard'
  },
  {
    id: 'AUTH002',
    memberName: 'Mary Johnson',
    memberId: 'M-002',
    providerName: 'Dr. Michael Chen',
    serviceType: 'Surgery',
    status: 'Pending',
    submittedDate: '2024-01-14',
    approvedDate: null,
    amount: '$15,000',
    urgency: 'Urgent'
  },
  {
    id: 'AUTH003',
    memberName: 'Robert Wilson',
    memberId: 'M-003',
    providerName: 'Dr. Lisa Rodriguez',
    serviceType: 'Physical Therapy',
    status: 'Denied',
    submittedDate: '2024-01-13',
    approvedDate: null,
    amount: '$1,200',
    urgency: 'Standard'
  },
  {
    id: 'AUTH004',
    memberName: 'Jennifer Davis',
    memberId: 'M-004',
    providerName: 'Dr. David Kim',
    serviceType: 'MRI Scan',
    status: 'In Review',
    submittedDate: '2024-01-12',
    approvedDate: null,
    amount: '$3,800',
    urgency: 'Urgent'
  },
  {
    id: 'AUTH005',
    memberName: 'Thomas Brown',
    memberId: 'M-005',
    providerName: 'Dr. Sarah Johnson',
    serviceType: 'Cardiology Consultation',
    status: 'Approved',
    submittedDate: '2024-01-11',
    approvedDate: '2024-01-12',
    amount: '$2,800',
    urgency: 'Standard'
  },
  {
    id: 'AUTH006',
    memberName: 'Patricia Miller',
    memberId: 'M-006',
    providerName: 'Dr. Michael Chen',
    serviceType: 'Laboratory Tests',
    status: 'Pending',
    submittedDate: '2024-01-10',
    approvedDate: null,
    amount: '$450',
    urgency: 'Standard'
  },
  {
    id: 'AUTH007',
    memberName: 'James Taylor',
    memberId: 'M-007',
    providerName: 'Dr. Lisa Rodriguez',
    serviceType: 'Surgery',
    status: 'In Review',
    submittedDate: '2024-01-09',
    approvedDate: null,
    amount: '$12,500',
    urgency: 'Urgent'
  },
  {
    id: 'AUTH008',
    memberName: 'Linda Anderson',
    memberId: 'M-008',
    providerName: 'Dr. David Kim',
    serviceType: 'Physical Therapy',
    status: 'Approved',
    submittedDate: '2024-01-08',
    approvedDate: '2024-01-09',
    amount: '$1,800',
    urgency: 'Standard'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Approved': return 'green';
    case 'Denied': return 'red';
    case 'Pending': return 'orange';
    case 'In Review': return 'blue';
    default: return 'default';
  }
};

const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case 'Urgent': return 'red';
    case 'Standard': return 'blue';
    default: return 'default';
  }
};

export default function AuthorizationsPage() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [urgencyFilter, setUrgencyFilter] = useState<string>('all');
  const pageSize = 10;

  const filteredData = mockAuthorizationsData.filter(item => {
    const matchesSearch = item.memberName.toLowerCase().includes(searchText.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchText.toLowerCase()) ||
                         item.memberId.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesUrgency = urgencyFilter === 'all' || item.urgency === urgencyFilter;
    
    return matchesSearch && matchesStatus && matchesUrgency;
  });

  const columns = [
    {
      title: 'Auth ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => (
        <Link href={`/authorizations/${text}`} className="text-blue-600 hover:text-blue-800 font-medium">
          {text}
        </Link>
      ),
    },
    {
      title: 'Member',
      dataIndex: 'memberName',
      key: 'memberName',
      render: (text: string, record: { memberId: string }) => (
        <div>
          <div className="font-medium">{text}</div>
          <div className="text-gray-500 text-sm">{record.memberId}</div>
        </div>
      ),
    },
    {
      title: 'Provider',
      dataIndex: 'providerName',
      key: 'providerName',
    },
    {
      title: 'Service Type',
      dataIndex: 'serviceType',
      key: 'serviceType',
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
      title: 'Urgency',
      dataIndex: 'urgency',
      key: 'urgency',
      render: (urgency: string) => (
        <Tag color={getUrgencyColor(urgency)}>
          {urgency}
        </Tag>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Submitted Date',
      dataIndex: 'submittedDate',
      key: 'submittedDate',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: string, record: { id: string; status: string }) => (
        <Space>
          <Link href={`/authorizations/${record.id}`}>
            <Button type="primary" size="small" icon={<EyeOutlined />}>
              View
            </Button>
          </Link>
          {record.status === 'Approved' && (
            <Button size="small" icon={<DownloadOutlined />}>
              Download
            </Button>
          )}
        </Space>
      ),
    },
  ];

  const stats = {
    total: mockAuthorizationsData.length,
    approved: mockAuthorizationsData.filter(item => item.status === 'Approved').length,
    pending: mockAuthorizationsData.filter(item => item.status === 'Pending').length,
    denied: mockAuthorizationsData.filter(item => item.status === 'Denied').length,
  };

  return (
    <div className="p-6 overflow-x-auto">
      <Title level={2}>Authorization Management</Title>
      <Text type="secondary">Manage pre-authorization requests and approvals</Text>

      {/* Statistics Cards */}
      <Row gutter={16} className="mb-6">
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Authorizations"
              value={stats.total}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Approved"
              value={stats.approved}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Pending"
              value={stats.pending}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Denied"
              value={stats.denied}
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Search and Filters */}
      <Card className="mb-6">
        <Row gutter={16} align="middle">
          <Col span={6}>
            <Input
              placeholder="Search authorizations..."
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
              <Option value="Approved">Approved</Option>
              <Option value="Pending">Pending</Option>
              <Option value="Denied">Denied</Option>
              <Option value="In Review">In Review</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select
              placeholder="Urgency"
              value={urgencyFilter}
              onChange={setUrgencyFilter}
              size="large"
              style={{ width: '100%' }}
            >
              <Option value="all">All Urgency</Option>
              <Option value="Urgent">Urgent</Option>
              <Option value="Standard">Standard</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Button icon={<FilterOutlined />} size="large">
              More Filters
            </Button>
          </Col>
          <Col span={6}>
            <Button type="primary" icon={<PlusOutlined />} size="large">
              New Authorization
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
          onRow={record => ({
            onClick: () => router.push(`/authorizations/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 
