"use client";
import "antd/dist/reset.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Form, Input, Button, Alert, Typography, Card } from 'antd';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    const success = await login(username, password);
    setLoading(false);
    if (success) {
      router.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-sm shadow-lg" bordered={false}>
        <Typography.Title level={2} className="text-center mb-6">Admin Login</Typography.Title>
        {error && <Alert message={error} type="error" showIcon className="mb-4" />}
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter your username' }]}> 
            <Input 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              autoFocus 
              size="large"
            />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}> 
            <Input.Password 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              size="large" 
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
} 
