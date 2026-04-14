'use client'

import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardDescription, CardFooter } from './ui/Card'
import Button from './ui/Button'

interface SectorCardProps {
  title: string
  description: string
  icon: ReactNode
  marketSize: string
  growthRate: string
  keyPlayers: string[]
  onClick: () => void
  className?: string
}

export default function SectorCard({
  title,
  description,
  icon,
  marketSize,
  growthRate,
  keyPlayers,
  onClick,
  className
}: SectorCardProps) {
  return (
    <Card hover className={className}>
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-energy-blue-100 rounded-lg">
            {icon}
          </div>
          <div className="text-sm font-medium text-energy-blue-600 bg-energy-blue-50 px-2 py-1 rounded-full">
            {marketSize}
          </div>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Growth Rate</span>
          <span className="font-medium text-green-600">{growthRate}</span>
        </div>
        
        <div className="text-sm">
          <p className="text-gray-500 mb-1">Key Players:</p>
          <div className="flex flex-wrap gap-1">
            {keyPlayers.slice(0, 3).map((player, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {player}
              </span>
            ))}
            {keyPlayers.length > 3 && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                +{keyPlayers.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
      
      <CardFooter>
        <Button variant="primary" onClick={onClick} className="w-full">
          Explore Sector
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}