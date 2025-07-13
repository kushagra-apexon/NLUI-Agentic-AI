"use client";
import { Card, Timeline } from 'antd';
import { HistoryOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

// Mock history data
const mockHistory = [
  {
    id: 1,
    date: "2024-01-20",
    action: "Policy Renewed",
    description: "Health insurance policy renewed for 2024"
  },
  {
    id: 2,
    date: "2024-01-15",
    action: "Claim Submitted",
    description: "Submitted claim for MRI scan"
  },
  {
    id: 3,
    date: "2024-01-10",
    action: "Authorization Approved",
    description: "Prior authorization approved for specialist visit"
  },
  {
    id: 4,
    date: "2024-01-05",
    action: "Member Enrolled",
    description: "New member enrollment completed"
  }
];

export default function MemberHistoryPage() {
  return (
    <div className="p-6">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><HistoryOutlined /> Member History</span>}
        className="shadow-lg rounded-lg"
      >
        <Timeline
          items={mockHistory.map(item => ({
            children: (
              <div>
                <h4 className="font-semibold">{item.action}</h4>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            )
          }))}
        />
      </Card>
    </div>
  );
} 