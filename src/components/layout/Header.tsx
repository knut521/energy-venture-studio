'use client'

import { clsx } from 'clsx'
import { ReactNode } from 'react'
import Button from '../ui/Button'

interface HeaderProps {
  title: string
  description?: string
  actions?: ReactNode
  className?: string
}

export default function Header({ title, description, actions, className }: HeaderProps) {
  return (
    <header className={clsx('flex items-center justify-between p-6 border-b border-gray-200', className)}>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        {description && (
          <p className="text-gray-600 mt-1">{description}</p>
        )}
      </div>
      
      {actions && (
        <div className="flex items-center space-x-3">
          {actions}
        </div>
      )}
    </header>
  )
}