'use client'

import { useState } from 'react'
import { 
  Search, 
  Zap, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Building2,
  ChevronRight,
  Play
} from 'lucide-react'

export default function StudioPage() {
  const [selectedSector, setSelectedSector] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const sectors = [
    {
      id: 'home-energy-apps',
      name: 'Home Energy Apps',
      description: 'Residential energy monitoring and management applications',
      icon: BarChart3,
      color: 'energy-blue',
      researched: true
    },
    {
      id: 'residential-solar',
      name: 'Residential Solar',
      description: 'Solar panel installation and energy generation platforms',
      icon: Zap,
      color: 'energy-green',
      researched: true
    },
    {
      id: 'ev-charging',
      name: 'EV Charging Networks',
      description: 'Electric vehicle charging infrastructure and services',
      icon: TrendingUp,
      color: 'energy-orange',
      researched: true
    },
    {
      id: 'community-energy',
      name: 'Community Energy Trading',
      description: 'Peer-to-peer energy trading and community microgrids',
      icon: Users,
      color: 'purple',
      researched: true
    },
    {
      id: 'smart-meter',
      name: 'Smart Meter Analytics',
      description: 'Advanced analytics for smart meter data and insights',
      icon: Building2,
      color: 'pink',
      researched: true
    },
    {
      id: 'battery-storage',
      name: 'Battery Storage',
      description: 'Residential and commercial energy storage solutions',
      icon: Battery,
      color: 'yellow',
      researched: true
    }
  ]

  const handleSectorSelect = (sectorId: string) => {
    setSelectedSector(sectorId)
  }

  const startAnalysis = () => {
    if (selectedSector) {
      setIsAnalyzing(true)
      // Simulate analysis process
      setTimeout(() => {
        setIsAnalyzing(false)
        // Navigate to results page
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Venture Building Studio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select an energy sector to analyze and build your next venture
          </p>
        </div>

        {/* Sector Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sectors.map((sector) => {
            const IconComponent = sector.icon
            const isSelected = selectedSector === sector.id
            
            return (
              <div
                key={sector.id}
                onClick={() => handleSectorSelect(sector.id)}
                className={`card cursor-pointer transition-all duration-200 ${
                  isSelected 
                    ? 'ring-2 ring-energy-blue-500 shadow-lg transform scale-105' 
                    : 'hover:shadow-md hover:border-energy-blue-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-${sector.color}-100 rounded-full flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 text-${sector.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{sector.name}</h3>
                    <p className="text-sm text-gray-600">{sector.description}</p>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 bg-energy-blue-500 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                {sector.researched && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Research Complete
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Analysis Controls */}
        {selectedSector && (
          <div className="card text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Ready to Analyze {sectors.find(s => s.id === selectedSector)?.name}
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI will conduct comprehensive market research, identify opportunities, 
              and generate venture concepts
            </p>
            
            <button
              onClick={startAnalysis}
              disabled={isAnalyzing}
              className="btn-primary inline-flex items-center space-x-2 disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Start Analysis</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Progress Indicator */}
        {isAnalyzing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="card text-center max-w-md">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-energy-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Analyzing {sectors.find(s => s.id === selectedSector)?.name}
              </h3>
              <p className="text-gray-600 mb-4">
                Conducting deep market research and opportunity identification...
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-energy-blue-600 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Battery icon component
function Battery(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  )
}