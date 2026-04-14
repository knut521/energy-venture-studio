import { NextRequest, NextResponse } from 'next/server';
import { sampleCompanies, sampleCustomerJourneyStages, sampleMarketGaps, sampleVentureConcepts, sampleSectorData } from '@/data/sample-data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sector = searchParams.get('sector');

  if (sector && sampleSectorData[sector as keyof typeof sampleSectorData]) {
    return NextResponse.json(sampleSectorData[sector as keyof typeof sampleSectorData]);
  }

  return NextResponse.json({
    companies: sampleCompanies,
    customerJourneyStages: sampleCustomerJourneyStages,
    marketGaps: sampleMarketGaps,
    ventureConcepts: sampleVentureConcepts,
    sectors: Object.keys(sampleSectorData)
  });
}