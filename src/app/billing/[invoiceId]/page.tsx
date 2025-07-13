"use client";
import { useParams } from 'next/navigation';
import { Card, Tag, Descriptions, Button } from 'antd';
import { DollarOutlined, UserOutlined, CalendarOutlined, CheckCircleOutlined, FileTextOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import "antd/dist/reset.css";

// Mock invoice data
const mockInvoices = [
  {
    id: "INV001",
    customerName: "ABC Healthcare",
    customerId: "CUST001",
    amount: "$1,250.00",
    status: "Paid",
    dueDate: "2024-01-31",
    createdDate: "2024-01-15",
    paidDate: "2024-01-20",
    description: "Monthly healthcare services and consultations",
    invoiceType: "Monthly",
    paymentMethod: "Credit Card",
    adjustments: 2,
    items: 15
  },
  {
    id: "INV002",
    customerName: "XYZ Medical Center",
    customerId: "CUST002",
    amount: "$2,100.00",
    status: "Pending",
    dueDate: "2024-02-15",
    createdDate: "2024-01-25",
    paidDate: null,
    description: "Specialized medical procedures and equipment",
    invoiceType: "Service",
    paymentMethod: "Bank Transfer",
    adjustments: 1,
    items: 8
  },
  {
    id: "INV003",
    customerName: "Community Hospital",
    customerId: "CUST003",
    amount: "$850.00",
    status: "Overdue",
    dueDate: "2024-01-10",
    createdDate: "2023-12-20",
    paidDate: null,
    description: "Emergency services and urgent care",
    invoiceType: "Emergency",
    paymentMethod: "Check",
    adjustments: 0,
    items: 5
  }
];

const statusColors: { [key: string]: string } = {
  Paid: "green",
  Pending: "orange",
  Overdue: "red",
  Cancelled: "gray"
};

const invoiceTypeColors: { [key: string]: string } = {
  Monthly: "blue",
  Service: "green",
  Emergency: "red",
  Annual: "purple"
};

export default function InvoiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const invoiceId = Array.isArray(params.invoiceId) ? params.invoiceId[0] : params.invoiceId;
  
  // Find the invoice by ID
  const invoice = mockInvoices.find(i => i.id === invoiceId);
  
  if (!invoice) {
    return <div className="text-red-600 p-8">Invoice not found.</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card
        title={<span className="text-lg font-bold flex items-center gap-2"><DollarOutlined /> Invoice Details</span>}
        className="shadow-lg rounded-lg"
        extra={
          <Button 
            type="primary" 
            icon={<CheckCircleOutlined />}
            onClick={() => router.push(`/billing/${invoiceId}/overview`)}
          >
            View Overview
          </Button>
        }
      >
        <Descriptions
          bordered
          column={1}
          size="middle"
        >
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><FileTextOutlined /> Invoice ID</span>}>
            {invoice.id}
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><UserOutlined /> Customer</span>}>
            {invoice.customerName} ({invoice.customerId})
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><DollarOutlined /> Amount</span>}>
            {invoice.amount}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={statusColors[invoice.status] || "default"}>{invoice.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Invoice Type">
            <Tag color={invoiceTypeColors[invoice.invoiceType] || "default"}>{invoice.invoiceType}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Payment Method">
            {invoice.paymentMethod}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {invoice.description}
          </Descriptions.Item>
          <Descriptions.Item label="Items">
            {invoice.items} line items
          </Descriptions.Item>
          <Descriptions.Item label="Adjustments">
            {invoice.adjustments} adjustments
          </Descriptions.Item>
          <Descriptions.Item label={<span className="font-semibold flex items-center gap-2"><CalendarOutlined /> Created Date</span>}>
            {invoice.createdDate}
          </Descriptions.Item>
          <Descriptions.Item label="Due Date">
            {invoice.dueDate}
          </Descriptions.Item>
          <Descriptions.Item label="Paid Date">
            {invoice.paidDate || "Not paid"}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
} 