export interface Company {
  id: string;
  name: string;
  country: string;
  funding?: string;
  differentiator: string;
  sector: string;
  founded?: number;
  employees?: string;
  website?: string;
}

export interface CustomerJourneyStage {
  id: string;
  title: string;
  description: string;
  touchpoints: string[];
  emotions: string[];
  behaviors: string[];
}

export interface MarketGap {
  id: string;
  title: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
  opportunity: string;
}

export interface VentureConcept {
  id: string;
  title: string;
  description: string;
  targetSector: string;
  uniqueValue: string;
  marketSize: string;
  competition: string[];
}