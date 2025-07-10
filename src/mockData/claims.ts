export interface Claim {
  id: string;
  memberName: string;
  providerName: string;
  status: string;
  amount: number;
  date: string;
}

export const claims: Claim[] = [
  { id: '1001', memberName: 'John Doe', providerName: 'HealthCare Clinic', status: 'Approved', amount: 120.5, date: '2024-05-01' },
  { id: '1002', memberName: 'Jane Smith', providerName: 'Wellness Center', status: 'Pending', amount: 200.0, date: '2024-05-02' },
  { id: '1003', memberName: 'Alice Johnson', providerName: 'City Hospital', status: 'Denied', amount: 75.0, date: '2024-05-03' },
  { id: '1004', memberName: 'Bob Brown', providerName: 'HealthCare Clinic', status: 'Approved', amount: 180.0, date: '2024-05-04' },
  { id: '1005', memberName: 'Carol White', providerName: 'Wellness Center', status: 'Pending', amount: 90.0, date: '2024-05-05' },
  { id: '1006', memberName: 'David Green', providerName: 'City Hospital', status: 'Approved', amount: 210.0, date: '2024-05-06' },
  { id: '1007', memberName: 'Eve Black', providerName: 'HealthCare Clinic', status: 'Denied', amount: 60.0, date: '2024-05-07' },
  { id: '1008', memberName: 'Frank Blue', providerName: 'Wellness Center', status: 'Approved', amount: 130.0, date: '2024-05-08' },
  { id: '1009', memberName: 'Grace Red', providerName: 'City Hospital', status: 'Pending', amount: 110.0, date: '2024-05-09' },
  { id: '1010', memberName: 'Hank Yellow', providerName: 'HealthCare Clinic', status: 'Approved', amount: 95.0, date: '2024-05-10' },
  { id: '1011', memberName: 'Ivy Orange', providerName: 'Wellness Center', status: 'Denied', amount: 85.0, date: '2024-05-11' },
  { id: '1012', memberName: 'Jack Purple', providerName: 'City Hospital', status: 'Approved', amount: 140.0, date: '2024-05-12' },
  { id: '1013', memberName: 'Kathy Pink', providerName: 'HealthCare Clinic', status: 'Pending', amount: 170.0, date: '2024-05-13' },
  { id: '1014', memberName: 'Leo Gray', providerName: 'Wellness Center', status: 'Approved', amount: 155.0, date: '2024-05-14' },
  { id: '1015', memberName: 'Mona Silver', providerName: 'City Hospital', status: 'Denied', amount: 65.0, date: '2024-05-15' },
  { id: '1016', memberName: 'Nina Gold', providerName: 'HealthCare Clinic', status: 'Approved', amount: 125.0, date: '2024-05-16' },
  { id: '1017', memberName: 'Oscar Bronze', providerName: 'Wellness Center', status: 'Pending', amount: 105.0, date: '2024-05-17' },
  { id: '1018', memberName: 'Pam Violet', providerName: 'City Hospital', status: 'Approved', amount: 115.0, date: '2024-05-18' },
  { id: '1019', memberName: 'Quinn Indigo', providerName: 'HealthCare Clinic', status: 'Denied', amount: 80.0, date: '2024-05-19' },
  { id: '1020', memberName: 'Rita Teal', providerName: 'Wellness Center', status: 'Approved', amount: 160.0, date: '2024-05-20' },
  { id: '1021', memberName: 'Sam Lime', providerName: 'City Hospital', status: 'Pending', amount: 135.0, date: '2024-05-21' },
  { id: '1022', memberName: 'Tina Navy', providerName: 'HealthCare Clinic', status: 'Approved', amount: 145.0, date: '2024-05-22' },
  { id: '1023', memberName: 'Uma Coral', providerName: 'Wellness Center', status: 'Denied', amount: 70.0, date: '2024-05-23' },
  { id: '1024', memberName: 'Vic Mint', providerName: 'City Hospital', status: 'Approved', amount: 185.0, date: '2024-05-24' },
  { id: '1025', memberName: 'Walt Plum', providerName: 'HealthCare Clinic', status: 'Pending', amount: 100.0, date: '2024-05-25' },
  { id: '1026', memberName: 'Xena Peach', providerName: 'Wellness Center', status: 'Approved', amount: 175.0, date: '2024-05-26' },
  { id: '1027', memberName: 'Yara Olive', providerName: 'City Hospital', status: 'Denied', amount: 55.0, date: '2024-05-27' },
  { id: '1028', memberName: 'Zane Aqua', providerName: 'HealthCare Clinic', status: 'Approved', amount: 150.0, date: '2024-05-28' },
  { id: '1029', memberName: 'Amy Jade', providerName: 'Wellness Center', status: 'Pending', amount: 120.0, date: '2024-05-29' },
  { id: '1030', memberName: 'Ben Ruby', providerName: 'City Hospital', status: 'Approved', amount: 190.0, date: '2024-05-30' }
]; 