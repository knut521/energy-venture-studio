import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sector } = body

    // Mock analysis data for MVP
    const mockAnalysis = {
      homeEnergyApps: {
        marketSize: "$3.64B (2022)",
        growth: "12.9% CAGR",
        players: ["Emporia Energy", "Sense Energy Monitor", "Zerofy", "Homey", "Franklin Whole Home"],
        trends: ["IoT Integration", "AI Optimization", "Digital Twin Technology"]
      },
      residentialSolar: {
        marketSize: "$93.36B by 2033",
        growth: "14% CAGR",
        players: ["Sunrun", "Tesla Energy", "Enphase", "SunPower", "SolarEdge"],
        trends: ["Cost Reduction", "Decentralized Systems", "Battery Integration"]
      },
      evCharging: {
        marketSize: "$40.22B (2025)",
        growth: "25% CAGR",
        players: ["IONITY", "Electroverse", "Plugsurfing"],
        trends: ["Fast Charging", "Network Management", "Grid Integration"]
      }
    }

    const analysis = mockAnalysis[sector as keyof typeof mockAnalysis] || {
      error: "Sector not found"
    }

    return NextResponse.json(analysis)
  } catch (error) {
    return NextResponse.json(
      { error: "Analysis failed" },
      { status: 500 }
    )
  }
}