'use client'

import { clsx } from 'clsx'
import { LucideIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

interface SectorCardProps {
  id: string
  name: string
  description: string
  icon: LucideIcon
  color: string
  researched: boolean
  onSelect: (id: string) => void
  isSelected?: boolean
}

export default function SectorCard({
  id,
  name,
  description,
  icon: Icon,
  color,
  researched,
  onSelect,
  isSelected = false
}: SectorCardProps) {
  const colorClasses = {
    'energy-blue': 'bg-energy-blue-50 border-energy-blue-200 text-energy-blue-700',
    'energy-green': 'bg-energy-green-50 border-energy-green-200 text-energy-green-700',
    'energy-orange': 'bg-energy-orange-50 border-energy-orange-200 text-energy-orange-700',
    'purple': 'bg-purple-50 border-purple-200 text-purple-700',
    'pink': 'bg-pink-50 border-pink-200 text-pink-700',
    'cyan': 'bg-cyan-50 border-cyan-200 text-cyan-700'
  }

  return (
    <Card 
      className={clsx(
        'cursor-pointer transition-all duration-200',
        isSelected && 'ring-2 ring-energy-blue-600',
        !isSelected && 'hover:shadow-md hover:translate-y-[-2px]'
      )}
      onClick={() => onSelect(id)}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className={clsx(
            'p-3 rounded-lg',
            colorClasses[color as keyof typeof colorClasses]
          )}>
            <Icon className="w-6 h-6" />
          </div>
          <Badge variant={researched ? 'success' : 'warning'}> 
            {researched ? 'Researched' : 'Pending'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>

      <CardFooter>
        <Button 
          variant={isSelected ? 'primary' : 'outline'} 
          className="w-full"
          onClick={(e) => {
            e.stopPropagation()
            onSelect(id)
          }}
        >
          {isSelected ? 'Selected' : 'Select Sector'}
        </Button>
      </CardFooter>
    </Card>
  )
}