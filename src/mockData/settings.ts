export interface Setting {
  id: string;
  category: string;
  name: string;
  value: string;
  updatedBy: string;
  updatedDate: string;
}

export const settings: Setting[] = [
  { id: 'S001', category: 'General', name: 'Site Title', value: 'US Healthcare Admin', updatedBy: 'Admin', updatedDate: '2024-05-01' },
  { id: 'S002', category: 'General', name: 'Support Email', value: 'support@ushealth.com', updatedBy: 'Admin', updatedDate: '2024-05-02' },
  { id: 'S003', category: 'Security', name: 'Password Policy', value: 'Strong', updatedBy: 'Manager', updatedDate: '2024-05-03' },
  { id: 'S004', category: 'Security', name: 'Session Timeout', value: '30 min', updatedBy: 'Admin', updatedDate: '2024-05-04' },
  { id: 'S005', category: 'Notifications', name: 'Email Alerts', value: 'Enabled', updatedBy: 'Admin', updatedDate: '2024-05-05' },
  { id: 'S006', category: 'Notifications', name: 'SMS Alerts', value: 'Disabled', updatedBy: 'Manager', updatedDate: '2024-05-06' },
  { id: 'S007', category: 'Billing', name: 'Invoice Prefix', value: 'INV', updatedBy: 'Admin', updatedDate: '2024-05-07' },
  { id: 'S008', category: 'Billing', name: 'Tax Rate', value: '8.5%', updatedBy: 'Admin', updatedDate: '2024-05-08' },
  { id: 'S009', category: 'Claims', name: 'Auto Adjudication', value: 'Enabled', updatedBy: 'Manager', updatedDate: '2024-05-09' },
  { id: 'S010', category: 'Claims', name: 'Max Claim Amount', value: '$10,000', updatedBy: 'Admin', updatedDate: '2024-05-10' },
  { id: 'S011', category: 'Members', name: 'Default Plan', value: 'Gold', updatedBy: 'Admin', updatedDate: '2024-05-11' },
  { id: 'S012', category: 'Members', name: 'Max Dependents', value: '5', updatedBy: 'Manager', updatedDate: '2024-05-12' },
  { id: 'S013', category: 'Providers', name: 'Credentialing Required', value: 'Yes', updatedBy: 'Admin', updatedDate: '2024-05-13' },
  { id: 'S014', category: 'Providers', name: 'Network Size', value: '500', updatedBy: 'Admin', updatedDate: '2024-05-14' },
  { id: 'S015', category: 'Authorizations', name: 'Auto Approve PT', value: 'No', updatedBy: 'Manager', updatedDate: '2024-05-15' },
  { id: 'S016', category: 'Authorizations', name: 'Max Auth Days', value: '90', updatedBy: 'Admin', updatedDate: '2024-05-16' },
  { id: 'S017', category: 'Pharmacies', name: 'Inventory Threshold', value: '100', updatedBy: 'Admin', updatedDate: '2024-05-17' },
  { id: 'S018', category: 'Pharmacies', name: 'Preferred Vendor', value: 'PharmaOne', updatedBy: 'Manager', updatedDate: '2024-05-18' },
  { id: 'S019', category: 'Utilization', name: 'Review Frequency', value: 'Monthly', updatedBy: 'Admin', updatedDate: '2024-05-19' },
  { id: 'S020', category: 'Utilization', name: 'Max Reviews', value: '100', updatedBy: 'Admin', updatedDate: '2024-05-20' },
  { id: 'S021', category: 'Reports', name: 'Default Format', value: 'PDF', updatedBy: 'Manager', updatedDate: '2024-05-21' },
  { id: 'S022', category: 'Reports', name: 'Retention Period', value: '2 years', updatedBy: 'Admin', updatedDate: '2024-05-22' },
  { id: 'S023', category: 'Users', name: 'Default Role', value: 'User', updatedBy: 'Admin', updatedDate: '2024-05-23' },
  { id: 'S024', category: 'Users', name: 'Max Users', value: '1000', updatedBy: 'Manager', updatedDate: '2024-05-24' },
  { id: 'S025', category: 'System', name: 'Maintenance Mode', value: 'Off', updatedBy: 'Admin', updatedDate: '2024-05-25' },
  { id: 'S026', category: 'System', name: 'API Version', value: 'v1.2.3', updatedBy: 'Admin', updatedDate: '2024-05-26' },
  { id: 'S027', category: 'General', name: 'Timezone', value: 'EST', updatedBy: 'Manager', updatedDate: '2024-05-27' },
  { id: 'S028', category: 'Security', name: '2FA Enabled', value: 'Yes', updatedBy: 'Admin', updatedDate: '2024-05-28' },
  { id: 'S029', category: 'Notifications', name: 'Push Alerts', value: 'Enabled', updatedBy: 'Admin', updatedDate: '2024-05-29' },
  { id: 'S030', category: 'Billing', name: 'Late Fee', value: '$25', updatedBy: 'Manager', updatedDate: '2024-05-30' }
]; 