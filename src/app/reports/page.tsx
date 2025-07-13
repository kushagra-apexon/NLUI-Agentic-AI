'use client';
import "antd/dist/reset.css";

import { useState } from 'react';
import { Card, Table, Button, Input, Select, Tag, Space, Row, Col, Statistic, Typography } from 'antd';
import { SearchOutlined, FilterOutlined, PlusOutlined, EyeOutlined, DownloadOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Text } = Typography;
const { Option } = Select;

// Mock data for reports
const mockReports = [
  {
    id: "RPT001",
    name: "Monthly Claims Summary",
    type: "Claims",
    status: "Completed",
    schedule: "Monthly",
    lastRun: "2024-01-15 10:30:00",
    fileSize: "2.5 MB",
    createdBy: "Admin User"
  },
  {
    id: "RPT002",
    name: "Provider Performance Report",
    type: "Providers",
    status: "Running",
    schedule: "Weekly",
    lastRun: "2024-01-14 09:15:00",
    fileSize: "1.8 MB",
    createdBy: "Analyst"
  },
  {
    id: "RPT003",
    name: "Member Enrollment Report",
    type: "Members",
    status: "Scheduled",
    schedule: "Daily",
    lastRun: "2024-01-13 08:00:00",
    fileSize: "3.2 MB",
    createdBy: "Manager"
  },
  {
    id: "RPT004",
    name: "Utilization Analysis",
    type: "Utilization",
    status: "Failed",
    schedule: "Monthly",
    lastRun: "2024-01-12 14:45:00",
    fileSize: "4.1 MB",
    createdBy: "Data Team"
  },
  {
    id: "RPT005",
    name: "Billing Reconciliation",
    type: "Billing",
    status: "Completed",
    schedule: "Weekly",
    lastRun: "2024-01-11 16:20:00",
    fileSize: "5.7 MB",
    createdBy: "Finance"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed': return 'green';
    case 'Running': return 'blue';
    case 'Failed': return 'red';
    case 'Scheduled': return 'orange';
    default: return 'default';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Claims': return 'blue';
    case 'Providers': return 'green';
    case 'Members': return 'purple';
    case 'Utilization': return 'orange';
    case 'Billing': return 'red';
    case 'Pharmacies': return 'cyan';
    case 'Authorizations': return 'magenta';
    case 'Financial': return 'gold';
    default: return 'default';
  }
};

export default function ReportsPage() {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const pageSize = 10;

  // Calculate statistics
  const stats = {
    total: mockReports.length,
    completed: mockReports.filter(r => r.status === 'Completed').length,
    running: mockReports.filter(r => r.status === 'Running').length,
    failed: mockReports.filter(r => r.status === 'Failed').length
  };

  // Filter data based on search and filters
  const filteredData = mockReports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchText.toLowerCase()) ||
                         report.id.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    const matchesType = typeFilter === 'all' || report.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const columns = [
    {
      title: 'Report ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => (
        <Link href={`/reports/${text}`} className="text-blue-600 hover:text-blue-800 font-medium">
          {text}
        </Link>
      ),
    },
    {
      title: 'Report Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: { createdBy: string }) => (
        <div>
          <div className="font-medium">{text}</div>
          <div className="text-gray-500 text-sm">Created by {record.createdBy}</div>
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
      title: 'Schedule',
      dataIndex: 'schedule',
      key: 'schedule',
    },
    {
      title: 'Last Run',
      dataIndex: 'lastRun',
      key: 'lastRun',
    },
    {
      title: 'File Size',
      dataIndex: 'fileSize',
      key: 'fileSize',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: string, record: { id: string; status: string }) => (
        <Space>
          <Link href={`/reports/${record.id}`}>
            <Button type="primary" size="small" icon={<EyeOutlined />}>
              View
            </Button>
          </Link>
          {record.status === 'Completed' && (
            <Button size="small" icon={<DownloadOutlined />}>
              Download
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 overflow-x-auto">
      <Title level={2}>Reports Management</Title>
      <Text type="secondary">Generate, schedule, and manage healthcare reports</Text>

      {/* Statistics Cards */}
      <Row gutter={16} className="mb-6">
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Reports"
              value={stats.total}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Completed"
              value={stats.completed}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Running"
              value={stats.running}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Failed"
              value={stats.failed}
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
              placeholder="Search reports..."
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
              <Option value="Completed">Completed</Option>
              <Option value="Running">Running</Option>
              <Option value="Failed">Failed</Option>
              <Option value="Scheduled">Scheduled</Option>
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
              <Option value="Claims">Claims</Option>
              <Option value="Providers">Providers</Option>
              <Option value="Members">Members</Option>
              <Option value="Utilization">Utilization</Option>
              <Option value="Billing">Billing</Option>
              <Option value="Pharmacies">Pharmacies</Option>
              <Option value="Authorizations">Authorizations</Option>
              <Option value="Financial">Financial</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Button icon={<FilterOutlined />} size="large">
              More Filters
            </Button>
          </Col>
          <Col span={6}>
            <Button type="primary" icon={<PlusOutlined />} size="large">
              Create Report
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
