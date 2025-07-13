'use client';

import { useState } from 'react';
import { Card, Typography, Input, Button, Space, List, Avatar, Tag, Row, Col, Form } from 'antd';
import { SendOutlined, LikeOutlined, DislikeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;
const { TextArea } = Input;

// Mock data for utilization request notes and comments
const mockNotes = [
  {
    id: 1,
    author: 'Dr. Sarah Johnson',
    avatar: 'SJ',
    content: 'Clinical review completed. Documentation is complete. Service appears medically necessary based on patient symptoms and diagnosis.',
    datetime: '2024-01-18 10:30',
    type: 'Clinical Review',
    likes: 2,
    dislikes: 0,
  },
  {
    id: 2,
    author: 'Dr. Michael Chen',
    avatar: 'MC',
    content: 'Provider contacted regarding additional documentation. Response received with updated lab results.',
    datetime: '2024-01-17 14:20',
    type: 'Provider Note',
    likes: 1,
    dislikes: 0,
  },
];

const getNoteTypeColor = (type: string) => {
  switch (type) {
    case 'Clinical Review': return 'blue';
    case 'Provider Note': return 'green';
    case 'Administrative': return 'orange';
    case 'System Note': return 'purple';
    default: return 'default';
  }
};

export default function UtilizationNotesPage() {
  const [newNote, setNewNote] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setNewNote('');
      // In real app, would add note to list
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit();
    }
  };

  return (
    <div className="space-y-6">
      {/* Add New Note */}
      <Card title="Add Note" className="mb-6">
        <Form layout="vertical">
          <Form.Item label="Note Type">
            <Space>
              <Button type={newNote.includes('Clinical') ? 'primary' : 'default'} size="small">
                Clinical Review
              </Button>
              <Button type={newNote.includes('Provider') ? 'primary' : 'default'} size="small">
                Provider Note
              </Button>
              <Button type={newNote.includes('Administrative') ? 'primary' : 'default'} size="small">
                Administrative
              </Button>
            </Space>
          </Form.Item>
          <Form.Item label="Note Content">
            <TextArea
              rows={4}
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your note here..."
            />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button 
                type="primary" 
                icon={<SendOutlined />}
                onClick={handleSubmit}
                loading={submitting}
              >
                Add Note
              </Button>
              <Button onClick={() => setNewNote('')}>
                Clear
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>

      {/* Notes List */}
      <Card title="Notes & Comments" className="mb-6">
        <List
          className="comment-list"
          header={`${mockNotes.length} notes`}
          itemLayout="horizontal"
          dataSource={mockNotes}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Space key="actions">
                  <Button type="text" icon={<LikeOutlined />} size="small">
                    {item.likes}
                  </Button>
                  <Button type="text" icon={<DislikeOutlined />} size="small">
                    {item.dislikes}
                  </Button>
                  <Button type="text" icon={<EditOutlined />} size="small">
                    Edit
                  </Button>
                  <Button type="text" icon={<DeleteOutlined />} size="small" danger>
                    Delete
                  </Button>
                </Space>
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar style={{ backgroundColor: '#1890ff' }}>
                    {item.avatar}
                  </Avatar>
                }
                author={
                  <Space>
                    <Text strong>{item.author}</Text>
                    <Tag color={getNoteTypeColor(item.type)} size="small">
                      {item.type}
                    </Tag>
                  </Space>
                }
                description={
                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <Text type="secondary">{item.datetime}</Text>
                    <Paragraph style={{ margin: 0 }}>
                      {item.content}
                    </Paragraph>
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      </Card>

      {/* Note Statistics */}
      <Card title="Note Statistics" className="mb-6">
        <Row gutter={16}>
          <Col span={6}>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {mockNotes.length}
              </div>
              <Text type="secondary">Total Notes</Text>
            </div>
          </Col>
          <Col span={6}>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {mockNotes.filter(note => note.type === 'Clinical Review').length}
              </div>
              <Text type="secondary">Clinical Reviews</Text>
            </div>
          </Col>
          <Col span={6}>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {mockNotes.filter(note => note.type === 'Provider Note').length}
              </div>
              <Text type="secondary">Provider Notes</Text>
            </div>
          </Col>
          <Col span={6}>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {mockNotes.filter(note => note.type === 'Administrative').length}
              </div>
              <Text type="secondary">Administrative</Text>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Quick Actions */}
      <Card title="Quick Actions" className="mb-6">
        <Row gutter={16}>
          <Col span={8}>
            <Button type="primary" block>
              Request Additional Information
            </Button>
          </Col>
          <Col span={8}>
            <Button block>
              Escalate Review
            </Button>
          </Col>
          <Col span={8}>
            <Button block>
              Contact Provider
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Note Templates */}
      <Card title="Note Templates" className="mb-6">
        <Row gutter={16}>
          <Col span={12}>
            <Card size="small" title="Clinical Review Template">
              <Text type="secondary">
                Clinical review completed. Documentation [complete/incomplete]. 
                Service appears [medically necessary/not medically necessary] based on 
                [specific criteria]. [Additional recommendations if applicable].
              </Text>
              <div className="mt-3">
                <Button size="small" type="primary">
                  Use Template
                </Button>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card size="small" title="Provider Communication Template">
              <Text type="secondary">
                Contacted provider regarding [specific issue]. 
                [Response received/pending]. [Next steps or follow-up required].
              </Text>
              <div className="mt-3">
                <Button size="small" type="primary">
                  Use Template
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
} 