export interface Provider {
  id: string;
  name: string;
  specialty: string;
  location: string;
  status: string;
  rating: number;
}

export const providers: Provider[] = [
  { id: 'P001', name: 'HealthCare Clinic', specialty: 'General Practice', location: 'New York, NY', status: 'Active', rating: 4.5 },
  { id: 'P002', name: 'Wellness Center', specialty: 'Pediatrics', location: 'Los Angeles, CA', status: 'Active', rating: 4.2 },
  { id: 'P003', name: 'City Hospital', specialty: 'Cardiology', location: 'Chicago, IL', status: 'Inactive', rating: 4.7 },
  { id: 'P004', name: 'Family Health', specialty: 'Family Medicine', location: 'Houston, TX', status: 'Active', rating: 4.3 },
  { id: 'P005', name: 'Downtown Clinic', specialty: 'Dermatology', location: 'Phoenix, AZ', status: 'Active', rating: 4.1 },
  { id: 'P006', name: 'Sunrise Medical', specialty: 'Orthopedics', location: 'Philadelphia, PA', status: 'Inactive', rating: 4.6 },
  { id: 'P007', name: 'Lakeside Health', specialty: 'Neurology', location: 'San Antonio, TX', status: 'Active', rating: 4.4 },
  { id: 'P008', name: 'Green Valley Clinic', specialty: 'Oncology', location: 'San Diego, CA', status: 'Active', rating: 4.8 },
  { id: 'P009', name: 'Riverfront Hospital', specialty: 'Urology', location: 'Dallas, TX', status: 'Active', rating: 4.0 },
  { id: 'P010', name: 'Metro Health', specialty: 'ENT', location: 'San Jose, CA', status: 'Inactive', rating: 4.2 },
  { id: 'P011', name: 'Suburban Medical', specialty: 'Gastroenterology', location: 'Austin, TX', status: 'Active', rating: 4.5 },
  { id: 'P012', name: 'Northside Clinic', specialty: 'Pulmonology', location: 'Jacksonville, FL', status: 'Active', rating: 4.3 },
  { id: 'P013', name: 'Eastside Health', specialty: 'Nephrology', location: 'Fort Worth, TX', status: 'Inactive', rating: 4.1 },
  { id: 'P014', name: 'West End Hospital', specialty: 'Rheumatology', location: 'Columbus, OH', status: 'Active', rating: 4.7 },
  { id: 'P015', name: 'Central Medical', specialty: 'Endocrinology', location: 'Charlotte, NC', status: 'Active', rating: 4.6 },
  { id: 'P016', name: 'Harborview Clinic', specialty: 'Ophthalmology', location: 'San Francisco, CA', status: 'Active', rating: 4.4 },
  { id: 'P017', name: 'Mountain Health', specialty: 'Psychiatry', location: 'Indianapolis, IN', status: 'Inactive', rating: 4.2 },
  { id: 'P018', name: 'Prairie Medical', specialty: 'Obstetrics', location: 'Seattle, WA', status: 'Active', rating: 4.5 },
  { id: 'P019', name: 'Desert Clinic', specialty: 'Gynecology', location: 'Denver, CO', status: 'Active', rating: 4.3 },
  { id: 'P020', name: 'Coastal Health', specialty: 'Hematology', location: 'Washington, DC', status: 'Active', rating: 4.1 },
  { id: 'P021', name: 'Parkside Hospital', specialty: 'Immunology', location: 'Boston, MA', status: 'Inactive', rating: 4.6 },
  { id: 'P022', name: 'Uptown Medical', specialty: 'Pathology', location: 'El Paso, TX', status: 'Active', rating: 4.4 },
  { id: 'P023', name: 'Southside Clinic', specialty: 'Radiology', location: 'Nashville, TN', status: 'Active', rating: 4.2 },
  { id: 'P024', name: 'Westlake Health', specialty: 'Surgery', location: 'Detroit, MI', status: 'Active', rating: 4.7 },
  { id: 'P025', name: 'Cedar Medical', specialty: 'Anesthesiology', location: 'Oklahoma City, OK', status: 'Inactive', rating: 4.5 },
  { id: 'P026', name: 'Pinecrest Clinic', specialty: 'Pediatrics', location: 'Portland, OR', status: 'Active', rating: 4.3 },
  { id: 'P027', name: 'Maple Health', specialty: 'General Practice', location: 'Las Vegas, NV', status: 'Active', rating: 4.1 },
  { id: 'P028', name: 'Elmwood Hospital', specialty: 'Cardiology', location: 'Memphis, TN', status: 'Active', rating: 4.8 },
  { id: 'P029', name: 'Oakridge Medical', specialty: 'Family Medicine', location: 'Louisville, KY', status: 'Active', rating: 4.6 },
  { id: 'P030', name: 'Spruce Clinic', specialty: 'Dermatology', location: 'Baltimore, MD', status: 'Active', rating: 4.4 }
]; 