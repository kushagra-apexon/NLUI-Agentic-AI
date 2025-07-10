export interface Pharmacy {
  id: string;
  name: string;
  location: string;
  status: string;
  inventoryCount: number;
  rating: number;
}

export const pharmacies: Pharmacy[] = [
  { id: 'PH001', name: 'Central Pharmacy', location: 'New York, NY', status: 'Active', inventoryCount: 1200, rating: 4.7 },
  { id: 'PH002', name: 'HealthPlus', location: 'Los Angeles, CA', status: 'Active', inventoryCount: 950, rating: 4.5 },
  { id: 'PH003', name: 'WellCare', location: 'Chicago, IL', status: 'Inactive', inventoryCount: 800, rating: 4.2 },
  { id: 'PH004', name: 'CityMeds', location: 'Houston, TX', status: 'Active', inventoryCount: 1100, rating: 4.6 },
  { id: 'PH005', name: 'PharmaOne', location: 'Phoenix, AZ', status: 'Active', inventoryCount: 700, rating: 4.3 },
  { id: 'PH006', name: 'QuickMeds', location: 'Philadelphia, PA', status: 'Inactive', inventoryCount: 600, rating: 4.1 },
  { id: 'PH007', name: 'GreenLeaf', location: 'San Antonio, TX', status: 'Active', inventoryCount: 1050, rating: 4.8 },
  { id: 'PH008', name: 'Sunrise Pharmacy', location: 'San Diego, CA', status: 'Active', inventoryCount: 900, rating: 4.4 },
  { id: 'PH009', name: 'RiverPharm', location: 'Dallas, TX', status: 'Active', inventoryCount: 1150, rating: 4.5 },
  { id: 'PH010', name: 'MetroMeds', location: 'San Jose, CA', status: 'Inactive', inventoryCount: 500, rating: 4.0 },
  { id: 'PH011', name: 'Suburban Pharmacy', location: 'Austin, TX', status: 'Active', inventoryCount: 980, rating: 4.6 },
  { id: 'PH012', name: 'Northside Meds', location: 'Jacksonville, FL', status: 'Active', inventoryCount: 870, rating: 4.3 },
  { id: 'PH013', name: 'Eastside Pharmacy', location: 'Fort Worth, TX', status: 'Inactive', inventoryCount: 650, rating: 4.2 },
  { id: 'PH014', name: 'West End Meds', location: 'Columbus, OH', status: 'Active', inventoryCount: 1120, rating: 4.7 },
  { id: 'PH015', name: 'Central Meds', location: 'Charlotte, NC', status: 'Active', inventoryCount: 1020, rating: 4.5 },
  { id: 'PH016', name: 'Harbor Pharmacy', location: 'San Francisco, CA', status: 'Active', inventoryCount: 930, rating: 4.4 },
  { id: 'PH017', name: 'Mountain Meds', location: 'Indianapolis, IN', status: 'Inactive', inventoryCount: 540, rating: 4.1 },
  { id: 'PH018', name: 'Prairie Pharmacy', location: 'Seattle, WA', status: 'Active', inventoryCount: 1080, rating: 4.8 },
  { id: 'PH019', name: 'Desert Meds', location: 'Denver, CO', status: 'Active', inventoryCount: 990, rating: 4.5 },
  { id: 'PH020', name: 'Coastal Pharmacy', location: 'Washington, DC', status: 'Active', inventoryCount: 860, rating: 4.3 },
  { id: 'PH021', name: 'Parkside Meds', location: 'Boston, MA', status: 'Inactive', inventoryCount: 620, rating: 4.2 },
  { id: 'PH022', name: 'Uptown Pharmacy', location: 'El Paso, TX', status: 'Active', inventoryCount: 970, rating: 4.6 },
  { id: 'PH023', name: 'Southside Meds', location: 'Nashville, TN', status: 'Active', inventoryCount: 890, rating: 4.4 },
  { id: 'PH024', name: 'Westlake Pharmacy', location: 'Detroit, MI', status: 'Active', inventoryCount: 1130, rating: 4.7 },
  { id: 'PH025', name: 'Cedar Meds', location: 'Oklahoma City, OK', status: 'Inactive', inventoryCount: 580, rating: 4.1 },
  { id: 'PH026', name: 'Pinecrest Pharmacy', location: 'Portland, OR', status: 'Active', inventoryCount: 1010, rating: 4.5 },
  { id: 'PH027', name: 'Maple Meds', location: 'Las Vegas, NV', status: 'Active', inventoryCount: 940, rating: 4.3 },
  { id: 'PH028', name: 'Elmwood Pharmacy', location: 'Memphis, TN', status: 'Active', inventoryCount: 1090, rating: 4.8 },
  { id: 'PH029', name: 'Oakridge Meds', location: 'Louisville, KY', status: 'Active', inventoryCount: 950, rating: 4.6 },
  { id: 'PH030', name: 'Spruce Pharmacy', location: 'Baltimore, MD', status: 'Active', inventoryCount: 920, rating: 4.4 }
]; 