'use client'

import { clsx } from 'clsx'

interface ProgressProps {
  value: number
  max?: number
  className?: string
  showValue?: boolean
}

export default function Progress({ value, max = 100, className, showValue = false }: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  
  return (
    <div className={clsx('w-full', className)}>
      {showValue && (
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>{value}%</span>
          <span>{max}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-energy-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}