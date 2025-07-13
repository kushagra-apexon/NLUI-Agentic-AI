"use client";
import { Card, Timeline } from 'antd';
import { HistoryOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock history data
const history = [
  { event: 'Claim submitted', date: '2024-01-15' },
  { event: 'Claim reviewed', date: '2024-01-16' },
  { event: 'Claim approved', date: '2024-01-17' },
];

export default function ClaimHistoryTab() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><HistoryOutlined /> History</span>}
        className="shadow-lg rounded-lg"
      >
        <Timeline
          items={history.map(item => ({
            children: <span><span className="font-semibold">{item.event}</span> <span className="text-xs text-gray-400">({item.date})</span></span>
          }))}
        />
      </Card>
    </div>
  );
} 