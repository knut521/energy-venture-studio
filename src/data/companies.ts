import { Company } from '@/types';

export const companies: Company[] = [
  // Home Energy Apps
  {
    id: '1',
    name: 'Sense Energy Monitor',
    country: 'United States',
    funding: '$30M',
    differentiator: 'AI-powered real-time energy monitoring with appliance detection',
    sector: 'Home Energy Monitoring',
    founded: 2013,
    employees: '50-100',
    website: 'https://sense.com'
  },
  {
    id: '2',
    name: 'Emporia Energy',
    country: 'United States',
    funding: '$20M',
    differentiator: 'Real-time energy monitoring with solar integration',
    sector: 'Home Energy Monitoring',
    founded: 2016,
    employees: '20-50',
    website: 'https://emporiaenergy.com'
  },
  {
    id: '3',
    name: 'Zerofy',
    country: 'Finland',
    funding: '$5M',
    differentiator: 'Carbon footprint tracking and energy optimization',
    sector: 'Home Energy Monitoring',
    founded: 2020,
    employees: '10-20',
    website: 'https://zerofy.io'
  },
  
  // EV Charging Networks
  {
    id: '4',
    name: 'PlugShare',
    country: 'United States',
    funding: '$15M',
    differentiator: 'Comprehensive global EV charging station map with user reviews',
    sector: 'EV Charging Networks',
    founded: 2011,
    employees: '50-100',
    website: 'https://plugshare.com'
  },
  {
    id: '5',
    name: 'ChargeFinder',
    country: 'Netherlands',
    funding: '$8M',
    differentiator: 'Real-time availability and pricing for charging stations',
    sector: 'EV Charging Networks',
    founded: 2018,
    employees: '20-50',
    website: 'https://chargefinder.com'
  },
  
  // Energy Switching Tools
  {
    id: '6',
    name: 'Electric Scouts',
    country: 'United States',
    funding: '$5M',
    differentiator: 'Energy switching platform with over 10,000 users',
    sector: 'Energy Switching',
    founded: 2019,
    employees: '10-20',
    website: 'https://electricscouts.com'
  },
  {
    id: '7',
    name: 'BusinessEnergy.com',
    country: 'United States',
    funding: '$2M',
    differentiator: 'Business-focused energy switching platform',
    sector: 'Energy Switching',
    founded: 2018,
    employees: '20-50',
    website: 'https://businessenergy.com'
  }
];

export const getCompaniesBySector = (sector: string) => {
  return companies.filter(company => company.sector === sector);
};

export const getAllSectors = () => {
  return [...new Set(companies.map(company => company.sector))];
};