'use client'

import { ReactNode } from 'react'
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react'
import Card, { CardHeader, CardTitle, CardDescription, CardFooter } from './ui/Card'
import Button from './ui/Button'
import Badge from './ui/Badge'
import Progress from './ui/Progress'

interface VentureCardProps {
  title: string
  description: string
  brandName: string
  targetMarket: string
  marketScore: number
  innovationScore: number
  feasibilityScore: number
  onClick: () => void
  className?: string
}

export default function VentureCard({
  title,
  description,
  brandName,
  targetMarket,
  marketScore,
  innovationScore,
  feasibilityScore,
  onClick,
  className
}: VentureCardProps) {
  const totalScore = Math.round((marketScore + innovationScore + feasibilityScore) / 3)
  
  return (
    <Card hover className={className}>
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-energy-blue-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-energy-blue-600" />
            </div>
            <Badge variant="info">{brandName}</Badge>
          </div>
          <div className="text-2xl font-bold text-energy-blue-600">
            {totalScore}/10
          </div>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <div className="space-y-4 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Users className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">{targetMarket}</span>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Market Potential</span>
            <Progress value={marketScore * 10} max={100} className="w-20" showValue={false} />
            <span className="font-medium">{marketScore}/10</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Innovation</span>
            <Progress value={innovationScore * 10} max={100} className="w-20" showValue={false} />
            <span className="font-medium">{innovationScore}/10</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Feasibility</span>
            <Progress value={feasibilityScore * 10} max={100} className="w-20" showValue={false} />
            <span className="font-medium">{feasibilityScore}/10</span>
          </div>
        </div>
      </div>
      
      <CardFooter>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            <DollarSign className="w-4 h-4 mr-2" />
            Details
          </Button>
          <Button variant="primary" onClick={onClick} className="flex-1">
            <ExternalLink className="w-4 h-4 mr-2" />
            Analyze
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}