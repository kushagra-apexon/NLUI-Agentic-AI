'use client';

import React, { useState } from 'react';
import { Table, Input, Button, Tag, Space, Card, Typography, Row, Col, Statistic, Select } from 'antd';
import { SearchOutlined, FilterOutlined, PlusOutlined, EyeOutlined, DownloadOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;
const { Option } = Select;

// Mock data for billing invoices
const mockBillingData = [
  {
    id: 'INV001',
    memberName: 'John Smith',
    memberId: 'M001',
    providerName: 'Dr. Sarah Johnson',
    serviceType: 'Specialist Consultation',
    status: 'Paid',
    invoiceDate: '2024-01-15',
    dueDate: '2024-02-15',
    amount: '$2,500',
    balance: '$0'
  },
  {
    id: 'INV002',
    memberName: 'Mary Johnson',
    memberId: 'M002',
    providerName: 'Dr. Michael Chen',
    serviceType: 'Surgery',
    status: 'Pending',
    invoiceDate: '2024-01-14',
    dueDate: '2024-02-14',
    amount: '$15,000',
    balance: '$15,000'
  },
  {
    id: 'INV003',
    memberName: 'Robert Wilson',
    memberId: 'M003',
    providerName: 'Dr. Lisa Rodriguez',
    serviceType: 'Physical Therapy',
    status: 'Overdue',
    invoiceDate: '2024-01-13',
    dueDate: '2024-01-13',
    amount: '$1,200',
    balance: '$1,200'
  },
  {
    id: 'INV004',
    memberName: 'Jennifer Davis',
    memberId: 'M004',
    providerName: 'Dr. David Kim',
    serviceType: 'MRI Scan',
    status: 'Partial',
    invoiceDate: '2024-01-12',
    dueDate: '2024-02-12',
    amount: '$3,800',
    balance: '$1,900'
  },
  {
    id: 'INV005',
    memberName: 'Thomas Brown',
    memberId: 'M005',
    providerName: 'Dr. Sarah Johnson',
    serviceType: 'Cardiology Consultation',
    status: 'Paid',
    invoiceDate: '2024-01-11',
    dueDate: '2024-02-11',
    amount: '$2,800',
    balance: '$0'
  },
  {
    id: 'INV006',
    memberName: 'Patricia Miller',
    memberId: 'M006',
    providerName: 'Dr. Michael Chen',
    serviceType: 'Laboratory Tests',
    status: 'Pending',
    invoiceDate: '2024-01-10',
    dueDate: '2024-02-10',
    amount: '$450',
    balance: '$450'
  },
  {
    id: 'INV007',
    memberName: 'James Taylor',
    memberId: 'M007',
    providerName: 'Dr. Lisa Rodriguez',
    serviceType: 'Surgery',
    status: 'Overdue',
    invoiceDate: '2024-01-09',
    dueDate: '2024-01-09',
    amount: '$12,500',
    balance: '$12,500'
  },
  {
    id: 'INV008',
    memberName: 'Linda Anderson',
    memberId: 'M008',
    providerName: 'Dr. David Kim',
    serviceType: 'Physical Therapy',
    status: 'Paid',
    invoiceDate: '2024-01-08',
    dueDate: '2024-02-08',
    amount: '$1,800',
    balance: '$0'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Paid': return 'green';
    case 'Pending': return 'orange';
    case 'Overdue': return 'red';
    case 'Partial': return 'blue';
    default: return 'default';
  }
};

export default function BillingPage() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const pageSize = 10;

  const filteredData = mockBillingData.filter(item => {
    const matchesSearch = item.memberName.toLowerCase().includes(searchText.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchText.toLowerCase()) ||
                         item.memberId.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const columns = [
    {
      title: 'Invoice ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => (
        <Link href={`/billing/${text}`} className="text-blue-600 hover:text-blue-800 font-medium">
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
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: string, record: { id: string; status: string }) => (
        <Space>
          <Link href={`/billing/${record.id}`}>
            <Button type="primary" size="small" icon={<EyeOutlined />}>
              View
            </Button>
          </Link>
          {record.status === 'Paid' && (
            <Button size="small" icon={<DownloadOutlined />}>
              Download
            </Button>
          )}
        </Space>
      ),
    },
  ];

  const stats = {
    total: mockBillingData.length,
    paid: mockBillingData.filter(item => item.status === 'Paid').length,
    pending: mockBillingData.filter(item => item.status === 'Pending').length,
    overdue: mockBillingData.filter(item => item.status === 'Overdue').length,
  };

  return (
    <div className="p-6 overflow-x-auto">
      <Title level={2}>Billing Management</Title>
      <Text type="secondary">Manage invoices, payments, and billing operations</Text>

      {/* Statistics Cards */}
      <Row gutter={16} className="mb-6">
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Invoices"
              value={stats.total}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Paid"
              value={stats.paid}
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
              title="Overdue"
              value={stats.overdue}
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
              placeholder="Search invoices..."
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
              <Option value="Paid">Paid</Option>
              <Option value="Pending">Pending</Option>
              <Option value="Overdue">Overdue</Option>
              <Option value="Partial">Partial</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Button icon={<FilterOutlined />} size="large">
              More Filters
            </Button>
          </Col>
          <Col span={6}>
            <Button type="primary" icon={<PlusOutlined />} size="large">
              Create Invoice
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
            onClick: () => router.push(`/billing/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
} 
