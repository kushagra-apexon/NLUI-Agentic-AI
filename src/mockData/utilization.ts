export interface UtilizationRequest {
  id: string;
  memberName: string;
  requestType: string;
  status: string;
  submittedDate: string;
  reviewedDate?: string;
}

export const utilizationRequests: UtilizationRequest[] = [
  { id: 'UR001', memberName: 'John Doe', requestType: 'Pre-Authorization', status: 'Approved', submittedDate: '2024-05-01', reviewedDate: '2024-05-03' },
  { id: 'UR002', memberName: 'Jane Smith', requestType: 'Concurrent Review', status: 'Pending', submittedDate: '2024-05-02' },
  { id: 'UR003', memberName: 'Alice Johnson', requestType: 'Discharge Planning', status: 'Denied', submittedDate: '2024-05-03' },
  { id: 'UR004', memberName: 'Bob Brown', requestType: 'Pre-Authorization', status: 'Approved', submittedDate: '2024-05-04', reviewedDate: '2024-05-05' },
  { id: 'UR005', memberName: 'Carol White', requestType: 'Concurrent Review', status: 'Pending', submittedDate: '2024-05-05' },
  { id: 'UR006', memberName: 'David Green', requestType: 'Discharge Planning', status: 'Approved', submittedDate: '2024-05-06', reviewedDate: '2024-05-08' },
  { id: 'UR007', memberName: 'Eve Black', requestType: 'Pre-Authorization', status: 'Denied', submittedDate: '2024-05-07' },
  { id: 'UR008', memberName: 'Frank Blue', requestType: 'Concurrent Review', status: 'Approved', submittedDate: '2024-05-08', reviewedDate: '2024-05-10' },
  { id: 'UR009', memberName: 'Grace Red', requestType: 'Discharge Planning', status: 'Pending', submittedDate: '2024-05-09' },
  { id: 'UR010', memberName: 'Hank Yellow', requestType: 'Pre-Authorization', status: 'Approved', submittedDate: '2024-05-10', reviewedDate: '2024-05-12' },
  { id: 'UR011', memberName: 'Ivy Orange', requestType: 'Concurrent Review', status: 'Denied', submittedDate: '2024-05-11' },
  { id: 'UR012', memberName: 'Jack Purple', requestType: 'Discharge Planning', status: 'Approved', submittedDate: '2024-05-12', reviewedDate: '2024-05-13' },
  { id: 'UR013', memberName: 'Kathy Pink', requestType: 'Pre-Authorization', status: 'Pending', submittedDate: '2024-05-13' },
  { id: 'UR014', memberName: 'Leo Gray', requestType: 'Concurrent Review', status: 'Approved', submittedDate: '2024-05-14', reviewedDate: '2024-05-15' },
  { id: 'UR015', memberName: 'Mona Silver', requestType: 'Discharge Planning', status: 'Denied', submittedDate: '2024-05-15' },
  { id: 'UR016', memberName: 'Nina Gold', requestType: 'Pre-Authorization', status: 'Approved', submittedDate: '2024-05-16', reviewedDate: '2024-05-18' },
  { id: 'UR017', memberName: 'Oscar Bronze', requestType: 'Concurrent Review', status: 'Pending', submittedDate: '2024-05-17' },
  { id: 'UR018', memberName: 'Pam Violet', requestType: 'Discharge Planning', status: 'Approved', submittedDate: '2024-05-18', reviewedDate: '2024-05-19' },
  { id: 'UR019', memberName: 'Quinn Indigo', requestType: 'Pre-Authorization', status: 'Denied', submittedDate: '2024-05-19' },
  { id: 'UR020', memberName: 'Rita Teal', requestType: 'Concurrent Review', status: 'Approved', submittedDate: '2024-05-20', reviewedDate: '2024-05-22' },
  { id: 'UR021', memberName: 'Sam Lime', requestType: 'Discharge Planning', status: 'Pending', submittedDate: '2024-05-21' },
  { id: 'UR022', memberName: 'Tina Navy', requestType: 'Pre-Authorization', status: 'Approved', submittedDate: '2024-05-22', reviewedDate: '2024-05-23' },
  { id: 'UR023', memberName: 'Uma Coral', requestType: 'Concurrent Review', status: 'Denied', submittedDate: '2024-05-23' },
  { id: 'UR024', memberName: 'Vic Mint', requestType: 'Discharge Planning', status: 'Approved', submittedDate: '2024-05-24', reviewedDate: '2024-05-25' },
  { id: 'UR025', memberName: 'Walt Plum', requestType: 'Pre-Authorization', status: 'Pending', submittedDate: '2024-05-25' },
  { id: 'UR026', memberName: 'Xena Peach', requestType: 'Concurrent Review', status: 'Approved', submittedDate: '2024-05-26', reviewedDate: '2024-05-27' },
  { id: 'UR027', memberName: 'Yara Olive', requestType: 'Discharge Planning', status: 'Denied', submittedDate: '2024-05-27' },
  { id: 'UR028', memberName: 'Zane Aqua', requestType: 'Pre-Authorization', status: 'Approved', submittedDate: '2024-05-28', reviewedDate: '2024-05-29' },
  { id: 'UR029', memberName: 'Amy Jade', requestType: 'Concurrent Review', status: 'Pending', submittedDate: '2024-05-29' },
  { id: 'UR030', memberName: 'Ben Ruby', requestType: 'Discharge Planning', status: 'Approved', submittedDate: '2024-05-30', reviewedDate: '2024-06-01' }
]; 