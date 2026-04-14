import { MarketGap } from '@/types';

export const marketGaps: MarketGap[] = [
  {
    id: '1',
    title: 'App Fragmentation',
    description: 'Users need 3-5 different apps for various charging networks and energy services',
    severity: 'high',
    opportunity: 'Develop unified platform integrating multiple energy services'
  },
  {
    id: '2',
    title: 'Payment Complexity',
    description: 'Complex payment systems across different networks with multiple subscriptions',
    severity: 'high',
    opportunity: 'Standardized payment protocols and single billing system'
  },
  {
    id: '3',
    title: 'Reliability Issues',
    description: 'Nearly 1 in 3 charging attempts fail despite improved reporting',
    severity: 'high',
    opportunity: 'Real-time reliability monitoring and predictive maintenance'
  },
  {
    id: '4',
    title: 'Limited Fast Charging Availability',
    description: 'Fast charging infrastructure not widely available for long-distance travel',
    severity: 'medium',
    opportunity: 'Expansion of fast charging network with strategic placement'
  },
  {
    id: '5',
    title: 'Grid Management Challenges',
    description: 'Increased electricity demand from EV charging requires better grid management',
    severity: 'medium',
    opportunity: 'Smart grid technologies and energy storage solutions'
  }
];

export const getGapsBySeverity = (severity: MarketGap['severity']) => {
  return marketGaps.filter(gap => gap.severity === severity);
};