'use client';

import { useState } from 'react';
import { Card, Table, Button, Input, Select, Tag, Space, Row, Col, Statistic, Typography } from 'antd';
import { SearchOutlined, PlusOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;
const { Option } = Select;

// Mock data for settings
const mockSettings = [
  {
    id: "SET001",
    name: "User Authentication Policy",
    description: "Configure password requirements and session timeouts",
    category: "Security",
    status: "Active",
    priority: "High",
    environment: "Production",
    lastModified: "2024-01-15 10:30:00",
    modifiedBy: "Admin User"
  },
  {
    id: "SET002",
    name: "Email Notification Settings",
    description: "Manage email templates and delivery preferences",
    category: "Communication",
    status: "Active",
    priority: "Medium",
    environment: "Production",
    lastModified: "2024-01-14 09:15:00",
    modifiedBy: "System Admin"
  },
  {
    id: "SET003",
    name: "Database Connection Pool",
    description: "Configure database connection settings",
    category: "Infrastructure",
    status: "Active",
    priority: "High",
    environment: "Production",
    lastModified: "2024-01-13 14:20:00",
    modifiedBy: "DevOps Team"
  },
  {
    id: "SET004",
    name: "API Rate Limiting",
    description: "Set rate limits for external API calls",
    category: "Integration",
    status: "Pending",
    priority: "Medium",
    environment: "Staging",
    lastModified: "2024-01-12 16:45:00",
    modifiedBy: "API Team"
  },
  {
    id: "SET005",
    name: "UI Theme Configuration",
    description: "Customize application appearance and branding",
    category: "UI/UX",
    status: "Draft",
    priority: "Low",
    environment: "Development",
    lastModified: "2024-01-11 11:30:00",
    modifiedBy: "Design Team"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return 'green';
    case 'Inactive': return 'red';
    case 'Pending': return 'orange';
    case 'Draft': return 'gray';
    default: return 'default';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'System': return 'blue';
    case 'Security': return 'red';
    case 'Communication': return 'green';
    case 'Infrastructure': return 'purple';
    case 'Integration': return 'orange';
    case 'UI/UX': return 'cyan';
    case 'Data': return 'magenta';
    case 'Monitoring': return 'gold';
    default: return 'default';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'red';
    case 'Medium': return 'orange';
    case 'Low': return 'green';
    default: return 'default';
  }
};

export default function SettingsPage() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const pageSize = 10;

  // Calculate statistics
  const stats = {
    total: mockSettings.length,
    active: mockSettings.filter(s => s.status === 'Active').length,
    inactive: mockSettings.filter(s => s.status === 'Inactive').length,
    highPriority: mockSettings.filter(s => s.priority === 'High').length
  };

  // Filter data based on search and filters
  const filteredData = mockSettings.filter(setting => {
    const matchesSearch = setting.name.toLowerCase().includes(searchText.toLowerCase()) ||
                         setting.id.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'all' || setting.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || setting.category === categoryFilter;
    const matchesPriority = priorityFilter === 'all' || setting.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesCategory && matchesPriority;
  });

  const columns = [
    {
      title: 'Setting ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => (
        <Link href={`/settings/${text}`} className="text-blue-600 hover:text-blue-800 font-medium">
          {text}
        </Link>
      ),
    },
    {
      title: 'Setting Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: { description: string; modifiedBy: string }) => (
        <div>
          <div className="font-medium">{text}</div>
          <div className="text-gray-500 text-sm">{record.description}</div>
        </div>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category: string) => (
        <Tag color={getCategoryColor(category)}>
          {category}
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
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => (
        <Tag color={getPriorityColor(priority)}>
          {priority}
        </Tag>
      ),
    },
    {
      title: 'Environment',
      dataIndex: 'environment',
      key: 'environment',
    },
    {
      title: 'Last Modified',
      dataIndex: 'lastModified',
      key: 'lastModified',
      render: (text: string, record: { modifiedBy: string }) => (
        <div>
          <div>{text}</div>
          <div className="text-gray-500 text-sm">by {record.modifiedBy}</div>
        </div>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: string, record: { id: string; status: string }) => (
        <Space>
          <Link href={`/settings/${record.id}`}>
            <Button type="primary" size="small" icon={<EyeOutlined />}>
              View
            </Button>
          </Link>
          <Button size="small" icon={<EditOutlined />}>
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 overflow-x-auto">
      <Title level={2}>System Settings</Title>
      <Text type="secondary">Manage system configurations, policies, and preferences</Text>

      {/* Statistics Cards */}
      <Row gutter={16} className="mb-6">
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Settings"
              value={stats.total}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Active Settings"
              value={stats.active}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Inactive Settings"
              value={stats.inactive}
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="High Priority"
              value={stats.highPriority}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Search and Filters */}
      <Card className="mb-6">
        <Row gutter={16} align="middle">
          <Col span={6}>
            <Input
              placeholder="Search settings..."
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
              <Option value="Draft">Draft</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select
              placeholder="Category"
              value={categoryFilter}
              onChange={setCategoryFilter}
              size="large"
              style={{ width: '100%' }}
            >
              <Option value="all">All Categories</Option>
              <Option value="System">System</Option>
              <Option value="Security">Security</Option>
              <Option value="Communication">Communication</Option>
              <Option value="Infrastructure">Infrastructure</Option>
              <Option value="Integration">Integration</Option>
              <Option value="UI/UX">UI/UX</Option>
              <Option value="Data">Data</Option>
              <Option value="Monitoring">Monitoring</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select
              placeholder="Priority"
              value={priorityFilter}
              onChange={setPriorityFilter}
              size="large"
              style={{ width: '100%' }}
            >
              <Option value="all">All Priorities</Option>
              <Option value="High">High</Option>
              <Option value="Medium">Medium</Option>
              <Option value="Low">Low</Option>
            </Select>
          </Col>
          <Col span={6}>
            <Button type="primary" icon={<PlusOutlined />} size="large">
              Add Setting
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
            onClick: () => router.push(`/settings/${record.id}`),
            style: { cursor: 'pointer' },
          })}
        />
      </Card>
    </div>
  );
}