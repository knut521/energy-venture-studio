import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sector } = body

    // Mock gaps data for MVP
    const mockGaps = {
      homeEnergyApps: [
        "Limited real-time optimization",
        "Poor user experience design",
        "Insufficient integration with smart home ecosystems",
        "High installation complexity",
        "Lack of personalized recommendations"
      ],
      residentialSolar: [
        "High upfront costs",
        "Complex installation processes",
        "Limited battery storage integration",
        "Poor customer education",
        "Lack of standardized monitoring"
      ],
      evCharging: [
        "Insufficient public charging infrastructure",
        "Limited fast charging availability",
        "Poor network management systems",
        "Complex payment methods",
        "Grid management challenges"
      ]
    }

    const gaps = mockGaps[sector as keyof typeof mockGaps] || ["No gaps identified"]

    return NextResponse.json({ gaps })
  } catch (error) {
    return NextResponse.json(
      { error: "Gaps analysis failed" },
      { status: 500 }
    )
  }
}