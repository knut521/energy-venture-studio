import { Company, CustomerJourneyStage, MarketGap, VentureConcept } from '@/types';

export const sampleCompanies: Company[] = [
  {
    id: '1',
    name: 'Sense Energy Monitor',
    country: 'United States',
    funding: '$65M',
    differentiator: 'AI-powered real-time energy disaggregation',
    sector: 'Home Energy Apps',
    founded: 2013,
    employees: '50-200',
    website: 'https://sense.com'
  },
  {
    id: '2',
    name: 'Emporia Energy',
    country: 'United States',
    funding: '$15M',
    differentiator: 'Real-time energy monitoring with smart plugs',
    sector: 'Home Energy Apps',
    founded: 2017,
    employees: '20-50',
    website: 'https://emporiaenergy.com'
  },
  {
    id: '3',
    name: 'Aurora Solar',
    country: 'United States',
    funding: '$523M',
    differentiator: 'Solar design and sales software platform',
    sector: 'Residential Solar',
    founded: 2013,
    employees: '500-1000',
    website: 'https://aurorasolar.com'
  },
  {
    id: '4',
    name: 'Tesla Energy',
    country: 'United States',
    funding: 'N/A (Tesla subsidiary)',
    differentiator: 'Integrated solar + battery storage ecosystem',
    sector: 'Residential Solar',
    founded: 2015,
    employees: '1000+',
    website: 'https://www.tesla.com/energy'
  },
  {
    id: '5',
    name: 'ChargePoint',
    country: 'United States',
    funding: '$660M',
    differentiator: 'Largest EV charging network in North America',
    sector: 'EV Charging Networks',
    founded: 2007,
    employees: '500-1000',
    website: 'https://chargepoint.com'
  },
  {
    id: '6',
    name: 'Electrify America',
    country: 'United States',
    funding: '$2B',
    differentiator: 'Ultra-fast charging network',
    sector: 'EV Charging Networks',
    founded: 2017,
    employees: '100-500',
    website: 'https://electrifyamerica.com'
  }
];

export const sampleCustomerJourneyStages: CustomerJourneyStage[] = [
  {
    id: '1',
    title: 'Awareness & Consideration',
    description: 'Customer discovers energy solutions and evaluates options',
    touchpoints: [
      'Google search for energy saving apps',
      'Social media ads from energy companies',
      'Word-of-mouth recommendations',
      'Energy provider recommendations'
    ],
    emotions: [
      'Curiosity about potential savings',
      'Frustration with high energy bills',
      'Hope for finding a solution'
    ],
    behaviors: [
      'Researching multiple energy apps',
      'Comparing features and prices',
      'Reading user reviews and ratings'
    ]
  },
  {
    id: '2',
    title: 'Purchase & Installation',
    description: 'Customer acquires and sets up the energy monitoring system',
    touchpoints: [
      'Online purchase process',
      'Shipping and delivery notifications',
      'Installation instructions',
      'Customer support for setup'
    ],
    emotions: [
      'Excitement about new technology',
      'Anxiety about installation complexity',
      'Impatience to start using'
    ],
    behaviors: [
      'Following installation guides',
      'Setting up mobile app',
      'Connecting to home WiFi',
      'Testing functionality'
    ]
  }
];

export const sampleMarketGaps: MarketGap[] = [
  {
    id: '1',
    title: 'App Fragmentation',
    description: 'Users need multiple apps for different energy services (EV charging, home monitoring, solar)',
    severity: 'high',
    opportunity: 'Unified platform integrating all energy services'
  },
  {
    id: '2',
    title: 'Limited Public Charging Infrastructure',
    description: 'Many cities lack sufficient public EV charging points',
    severity: 'high',
    opportunity: 'Expansion of fast charging networks in urban areas'
  },
  {
    id: '3',
    title: 'Complex Installation Processes',
    description: 'Home energy monitoring systems often require professional installation',
    severity: 'medium',
    opportunity: 'Plug-and-play solutions with easy DIY installation'
  },
  {
    id: '4',
    title: 'Lack of Energy Usage Insights',
    description: 'Most apps show raw data but lack actionable recommendations',
    severity: 'medium',
    opportunity: 'AI-powered personalized energy optimization suggestions'
  }
];

export const sampleVentureConcepts: VentureConcept[] = [
  {
    id: '1',
    title: 'EnergyHub - Unified Energy Platform',
    description: 'All-in-one platform integrating home energy monitoring, EV charging, solar management, and energy switching',
    targetSector: 'Home Energy Apps',
    uniqueValue: 'Single app for all energy needs with AI-powered optimization',
    marketSize: '$28.71B residential solar market (2024)',
    competition: ['Sense', 'Emporia', 'ChargePoint']
  },
  {
    id: '2',
    title: 'SolarFlow - Community Solar Marketplace',
    description: 'Platform connecting homeowners with solar installers and enabling community energy sharing',
    targetSector: 'Residential Solar',
    uniqueValue: 'Streamlined solar adoption with community energy trading features',
    marketSize: '$93.36B by 2033 (14% CAGR)',
    competition: ['Aurora Solar', 'Tesla Energy']
  },
  {
    id: '3',
    title: 'ChargeNet - Smart EV Charging Network',
    description: 'Intelligent EV charging network with dynamic pricing and grid integration',
    targetSector: 'EV Charging Networks',
    uniqueValue: 'AI-powered load balancing and renewable energy integration',
    marketSize: '$40.22B in 2025',
    competition: ['ChargePoint', 'Electrify America']
  }
];

export const sampleSectorData = {
  'home-energy-apps': {
    companies: sampleCompanies.filter(c => c.sector === 'Home Energy Apps'),
    gaps: sampleMarketGaps.filter(g => g.title.includes('App') || g.title.includes('Insights')),
    ventures: sampleVentureConcepts.filter(v => v.targetSector === 'Home Energy Apps')
  },
  'residential-solar': {
    companies: sampleCompanies.filter(c => c.sector === 'Residential Solar'),
    gaps: sampleMarketGaps.filter(g => g.title.includes('Solar') || g.title.includes('Installation')),
    ventures: sampleVentureConcepts.filter(v => v.targetSector === 'Residential Solar')
  },
  'ev-charging': {
    companies: sampleCompanies.filter(c => c.sector === 'EV Charging Networks'),
    gaps: sampleMarketGaps.filter(g => g.title.includes('Charging') || g.title.includes('Infrastructure')),
    ventures: sampleVentureConcepts.filter(v => v.targetSector === 'EV Charging Networks')
  }
};