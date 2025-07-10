export interface Invoice {
  id: string;
  memberName: string;
  amount: number;
  status: string;
  issuedDate: string;
  paidDate?: string;
}

export const invoices: Invoice[] = [
  { id: 'INV001', memberName: 'John Doe', amount: 120.5, status: 'Paid', issuedDate: '2024-05-01', paidDate: '2024-05-03' },
  { id: 'INV002', memberName: 'Jane Smith', amount: 200.0, status: 'Unpaid', issuedDate: '2024-05-02' },
  { id: 'INV003', memberName: 'Alice Johnson', amount: 75.0, status: 'Paid', issuedDate: '2024-05-03', paidDate: '2024-05-04' },
  { id: 'INV004', memberName: 'Bob Brown', amount: 180.0, status: 'Unpaid', issuedDate: '2024-05-04' },
  { id: 'INV005', memberName: 'Carol White', amount: 90.0, status: 'Paid', issuedDate: '2024-05-05', paidDate: '2024-05-06' },
  { id: 'INV006', memberName: 'David Green', amount: 210.0, status: 'Paid', issuedDate: '2024-05-06', paidDate: '2024-05-08' },
  { id: 'INV007', memberName: 'Eve Black', amount: 60.0, status: 'Unpaid', issuedDate: '2024-05-07' },
  { id: 'INV008', memberName: 'Frank Blue', amount: 130.0, status: 'Paid', issuedDate: '2024-05-08', paidDate: '2024-05-09' },
  { id: 'INV009', memberName: 'Grace Red', amount: 110.0, status: 'Unpaid', issuedDate: '2024-05-09' },
  { id: 'INV010', memberName: 'Hank Yellow', amount: 95.0, status: 'Paid', issuedDate: '2024-05-10', paidDate: '2024-05-12' },
  { id: 'INV011', memberName: 'Ivy Orange', amount: 85.0, status: 'Unpaid', issuedDate: '2024-05-11' },
  { id: 'INV012', memberName: 'Jack Purple', amount: 140.0, status: 'Paid', issuedDate: '2024-05-12', paidDate: '2024-05-13' },
  { id: 'INV013', memberName: 'Kathy Pink', amount: 170.0, status: 'Unpaid', issuedDate: '2024-05-13' },
  { id: 'INV014', memberName: 'Leo Gray', amount: 155.0, status: 'Paid', issuedDate: '2024-05-14', paidDate: '2024-05-15' },
  { id: 'INV015', memberName: 'Mona Silver', amount: 65.0, status: 'Unpaid', issuedDate: '2024-05-15' },
  { id: 'INV016', memberName: 'Nina Gold', amount: 125.0, status: 'Paid', issuedDate: '2024-05-16', paidDate: '2024-05-17' },
  { id: 'INV017', memberName: 'Oscar Bronze', amount: 105.0, status: 'Unpaid', issuedDate: '2024-05-17' },
  { id: 'INV018', memberName: 'Pam Violet', amount: 115.0, status: 'Paid', issuedDate: '2024-05-18', paidDate: '2024-05-19' },
  { id: 'INV019', memberName: 'Quinn Indigo', amount: 80.0, status: 'Unpaid', issuedDate: '2024-05-19' },
  { id: 'INV020', memberName: 'Rita Teal', amount: 160.0, status: 'Paid', issuedDate: '2024-05-20', paidDate: '2024-05-21' },
  { id: 'INV021', memberName: 'Sam Lime', amount: 135.0, status: 'Unpaid', issuedDate: '2024-05-21' },
  { id: 'INV022', memberName: 'Tina Navy', amount: 145.0, status: 'Paid', issuedDate: '2024-05-22', paidDate: '2024-05-23' },
  { id: 'INV023', memberName: 'Uma Coral', amount: 70.0, status: 'Unpaid', issuedDate: '2024-05-23' },
  { id: 'INV024', memberName: 'Vic Mint', amount: 185.0, status: 'Paid', issuedDate: '2024-05-24', paidDate: '2024-05-25' },
  { id: 'INV025', memberName: 'Walt Plum', amount: 100.0, status: 'Unpaid', issuedDate: '2024-05-25' },
  { id: 'INV026', memberName: 'Xena Peach', amount: 175.0, status: 'Paid', issuedDate: '2024-05-26', paidDate: '2024-05-27' },
  { id: 'INV027', memberName: 'Yara Olive', amount: 55.0, status: 'Unpaid', issuedDate: '2024-05-27' },
  { id: 'INV028', memberName: 'Zane Aqua', amount: 150.0, status: 'Paid', issuedDate: '2024-05-28', paidDate: '2024-05-29' },
  { id: 'INV029', memberName: 'Amy Jade', amount: 120.0, status: 'Unpaid', issuedDate: '2024-05-29' },
  { id: 'INV030', memberName: 'Ben Ruby', amount: 190.0, status: 'Paid', issuedDate: '2024-05-30', paidDate: '2024-06-01' }
]; 