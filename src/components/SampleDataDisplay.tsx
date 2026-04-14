'use client'

import { useState, useEffect } from 'react'
import { Company, CustomerJourneyStage, MarketGap, VentureConcept } from '@/types'

interface SampleDataDisplayProps {
  sector?: string
}

export default function SampleDataDisplay({ sector }: SampleDataDisplayProps) {
  const [data, setData] = useState<{
    companies?: Company[]
    customerJourneyStages?: CustomerJourneyStage[]
    marketGaps?: MarketGap[]
    ventureConcepts?: VentureConcept[]
  }>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = sector 
          ? `/api/sample-data?sector=${sector}`
          : '/api/sample-data'
        
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching sample data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [sector])

  if (loading) {
    return (
      <div className="card p-6">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-energy-blue-600 mx-auto"></div>
        <p className="text-center mt-4 text-gray-600">Loading sample data...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {data.companies && data.companies.length > 0 && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Companies ({data.companies.length})</h3>
          <div className="grid gap-4">
            {data.companies.map(company => (
              <div key={company.id} className="border rounded-lg p-4">
                <h4 className="font-medium">{company.name}</h4>
                <p className="text-sm text-gray-600">{company.country} • {company.sector}</p>
                <p className="text-sm">{company.differentiator}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.marketGaps && data.marketGaps.length > 0 && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Market Gaps ({data.marketGaps.length})</h3>
          <div className="grid gap-4">
            {data.marketGaps.map(gap => (
              <div key={gap.id} className="border rounded-lg p-4">
                <h4 className="font-medium">{gap.title}</h4>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  gap.severity === 'high' ? 'bg-red-100 text-red-800' :
                  gap.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {gap.severity} severity
                </span>
                <p className="text-sm mt-2">{gap.description}</p>
                <p className="text-sm text-energy-blue-600 mt-2">Opportunity: {gap.opportunity}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.ventureConcepts && data.ventureConcepts.length > 0 && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Venture Concepts ({data.ventureConcepts.length})</h3>
          <div className="grid gap-4">
            {data.ventureConcepts.map(venture => (
              <div key={venture.id} className="border rounded-lg p-4 bg-energy-blue-50">
                <h4 className="font-medium text-energy-blue-900">{venture.title}</h4>
                <p className="text-sm text-energy-blue-700">{venture.description}</p>
                <div className="mt-3 space-y-1 text-xs">
                  <p><strong>Sector:</strong> {venture.targetSector}</p>
                  <p><strong>Market Size:</strong> {venture.marketSize}</p>
                  <p><strong>Competition:</strong> {venture.competition.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}