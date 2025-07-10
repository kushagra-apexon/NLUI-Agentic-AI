export interface Report {
  id: string;
  title: string;
  type: string;
  createdBy: string;
  createdDate: string;
  status: string;
}

export const reports: Report[] = [
  { id: 'R001', title: 'Monthly Claims Summary', type: 'Claims', createdBy: 'Admin', createdDate: '2024-05-01', status: 'Completed' },
  { id: 'R002', title: 'Active Members Report', type: 'Members', createdBy: 'Manager', createdDate: '2024-05-02', status: 'Completed' },
  { id: 'R003', title: 'Provider Performance', type: 'Providers', createdBy: 'Admin', createdDate: '2024-05-03', status: 'In Progress' },
  { id: 'R004', title: 'Authorization Trends', type: 'Authorizations', createdBy: 'Analyst', createdDate: '2024-05-04', status: 'Completed' },
  { id: 'R005', title: 'Pharmacy Inventory', type: 'Pharmacies', createdBy: 'Admin', createdDate: '2024-05-05', status: 'Completed' },
  { id: 'R006', title: 'Billing Overview', type: 'Billing', createdBy: 'Manager', createdDate: '2024-05-06', status: 'Completed' },
  { id: 'R007', title: 'Utilization Review', type: 'Utilization', createdBy: 'Admin', createdDate: '2024-05-07', status: 'In Progress' },
  { id: 'R008', title: 'User Access Audit', type: 'Users', createdBy: 'Admin', createdDate: '2024-05-08', status: 'Completed' },
  { id: 'R009', title: 'System Settings Log', type: 'Settings', createdBy: 'Manager', createdDate: '2024-05-09', status: 'Completed' },
  { id: 'R010', title: 'Claims Denial Analysis', type: 'Claims', createdBy: 'Analyst', createdDate: '2024-05-10', status: 'Completed' },
  { id: 'R011', title: 'Member Growth', type: 'Members', createdBy: 'Admin', createdDate: '2024-05-11', status: 'Completed' },
  { id: 'R012', title: 'Provider Network Changes', type: 'Providers', createdBy: 'Manager', createdDate: '2024-05-12', status: 'In Progress' },
  { id: 'R013', title: 'Authorization Approvals', type: 'Authorizations', createdBy: 'Admin', createdDate: '2024-05-13', status: 'Completed' },
  { id: 'R014', title: 'Pharmacy Orders', type: 'Pharmacies', createdBy: 'Analyst', createdDate: '2024-05-14', status: 'Completed' },
  { id: 'R015', title: 'Billing Adjustments', type: 'Billing', createdBy: 'Admin', createdDate: '2024-05-15', status: 'Completed' },
  { id: 'R016', title: 'Utilization Forecast', type: 'Utilization', createdBy: 'Manager', createdDate: '2024-05-16', status: 'In Progress' },
  { id: 'R017', title: 'User Role Changes', type: 'Users', createdBy: 'Admin', createdDate: '2024-05-17', status: 'Completed' },
  { id: 'R018', title: 'Settings Update Log', type: 'Settings', createdBy: 'Manager', createdDate: '2024-05-18', status: 'Completed' },
  { id: 'R019', title: 'Claims Payment Cycle', type: 'Claims', createdBy: 'Admin', createdDate: '2024-05-19', status: 'Completed' },
  { id: 'R020', title: 'Member Churn', type: 'Members', createdBy: 'Analyst', createdDate: '2024-05-20', status: 'Completed' },
  { id: 'R021', title: 'Provider Ratings', type: 'Providers', createdBy: 'Admin', createdDate: '2024-05-21', status: 'In Progress' },
  { id: 'R022', title: 'Authorization Delays', type: 'Authorizations', createdBy: 'Manager', createdDate: '2024-05-22', status: 'Completed' },
  { id: 'R023', title: 'Pharmacy Reviews', type: 'Pharmacies', createdBy: 'Admin', createdDate: '2024-05-23', status: 'Completed' },
  { id: 'R024', title: 'Billing Disputes', type: 'Billing', createdBy: 'Analyst', createdDate: '2024-05-24', status: 'Completed' },
  { id: 'R025', title: 'Utilization Alerts', type: 'Utilization', createdBy: 'Admin', createdDate: '2024-05-25', status: 'In Progress' },
  { id: 'R026', title: 'User Login History', type: 'Users', createdBy: 'Manager', createdDate: '2024-05-26', status: 'Completed' },
  { id: 'R027', title: 'Settings Rollback', type: 'Settings', createdBy: 'Admin', createdDate: '2024-05-27', status: 'Completed' },
  { id: 'R028', title: 'Claims Fraud Detection', type: 'Claims', createdBy: 'Analyst', createdDate: '2024-05-28', status: 'Completed' },
  { id: 'R029', title: 'Member Satisfaction', type: 'Members', createdBy: 'Admin', createdDate: '2024-05-29', status: 'Completed' },
  { id: 'R030', title: 'Provider Contract Expiry', type: 'Providers', createdBy: 'Manager', createdDate: '2024-05-30', status: 'In Progress' }
]; 