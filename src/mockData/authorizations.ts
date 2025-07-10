export interface Authorization {
  id: string;
  memberName: string;
  service: string;
  status: string;
  requestedDate: string;
  approvedDate?: string;
}

export const authorizations: Authorization[] = [
  { id: 'A001', memberName: 'John Doe', service: 'MRI Scan', status: 'Approved', requestedDate: '2024-05-01', approvedDate: '2024-05-03' },
  { id: 'A002', memberName: 'Jane Smith', service: 'Physical Therapy', status: 'Pending', requestedDate: '2024-05-02' },
  { id: 'A003', memberName: 'Alice Johnson', service: 'Blood Test', status: 'Denied', requestedDate: '2024-05-03' },
  { id: 'A004', memberName: 'Bob Brown', service: 'X-Ray', status: 'Approved', requestedDate: '2024-05-04', approvedDate: '2024-05-05' },
  { id: 'A005', memberName: 'Carol White', service: 'CT Scan', status: 'Pending', requestedDate: '2024-05-05' },
  { id: 'A006', memberName: 'David Green', service: 'Surgery', status: 'Approved', requestedDate: '2024-05-06', approvedDate: '2024-05-08' },
  { id: 'A007', memberName: 'Eve Black', service: 'Ultrasound', status: 'Denied', requestedDate: '2024-05-07' },
  { id: 'A008', memberName: 'Frank Blue', service: 'MRI Scan', status: 'Approved', requestedDate: '2024-05-08', approvedDate: '2024-05-10' },
  { id: 'A009', memberName: 'Grace Red', service: 'Physical Therapy', status: 'Pending', requestedDate: '2024-05-09' },
  { id: 'A010', memberName: 'Hank Yellow', service: 'Blood Test', status: 'Approved', requestedDate: '2024-05-10', approvedDate: '2024-05-12' },
  { id: 'A011', memberName: 'Ivy Orange', service: 'X-Ray', status: 'Denied', requestedDate: '2024-05-11' },
  { id: 'A012', memberName: 'Jack Purple', service: 'CT Scan', status: 'Approved', requestedDate: '2024-05-12', approvedDate: '2024-05-13' },
  { id: 'A013', memberName: 'Kathy Pink', service: 'Surgery', status: 'Pending', requestedDate: '2024-05-13' },
  { id: 'A014', memberName: 'Leo Gray', service: 'Ultrasound', status: 'Approved', requestedDate: '2024-05-14', approvedDate: '2024-05-15' },
  { id: 'A015', memberName: 'Mona Silver', service: 'MRI Scan', status: 'Denied', requestedDate: '2024-05-15' },
  { id: 'A016', memberName: 'Nina Gold', service: 'Physical Therapy', status: 'Approved', requestedDate: '2024-05-16', approvedDate: '2024-05-18' },
  { id: 'A017', memberName: 'Oscar Bronze', service: 'Blood Test', status: 'Pending', requestedDate: '2024-05-17' },
  { id: 'A018', memberName: 'Pam Violet', service: 'X-Ray', status: 'Approved', requestedDate: '2024-05-18', approvedDate: '2024-05-19' },
  { id: 'A019', memberName: 'Quinn Indigo', service: 'CT Scan', status: 'Denied', requestedDate: '2024-05-19' },
  { id: 'A020', memberName: 'Rita Teal', service: 'Surgery', status: 'Approved', requestedDate: '2024-05-20', approvedDate: '2024-05-22' },
  { id: 'A021', memberName: 'Sam Lime', service: 'Ultrasound', status: 'Pending', requestedDate: '2024-05-21' },
  { id: 'A022', memberName: 'Tina Navy', service: 'MRI Scan', status: 'Approved', requestedDate: '2024-05-22', approvedDate: '2024-05-23' },
  { id: 'A023', memberName: 'Uma Coral', service: 'Physical Therapy', status: 'Denied', requestedDate: '2024-05-23' },
  { id: 'A024', memberName: 'Vic Mint', service: 'Blood Test', status: 'Approved', requestedDate: '2024-05-24', approvedDate: '2024-05-25' },
  { id: 'A025', memberName: 'Walt Plum', service: 'X-Ray', status: 'Pending', requestedDate: '2024-05-25' },
  { id: 'A026', memberName: 'Xena Peach', service: 'CT Scan', status: 'Approved', requestedDate: '2024-05-26', approvedDate: '2024-05-27' },
  { id: 'A027', memberName: 'Yara Olive', service: 'Surgery', status: 'Denied', requestedDate: '2024-05-27' },
  { id: 'A028', memberName: 'Zane Aqua', service: 'Ultrasound', status: 'Approved', requestedDate: '2024-05-28', approvedDate: '2024-05-29' },
  { id: 'A029', memberName: 'Amy Jade', service: 'MRI Scan', status: 'Pending', requestedDate: '2024-05-29' },
  { id: 'A030', memberName: 'Ben Ruby', service: 'Physical Therapy', status: 'Approved', requestedDate: '2024-05-30', approvedDate: '2024-06-01' }
]; 