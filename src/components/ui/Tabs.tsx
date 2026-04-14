'use client'

import { clsx } from 'clsx'
import { ReactNode, useState } from 'react'

interface TabsProps {
  defaultValue: string
  children: (activeTab: string, setActiveTab: (value: string) => void) => ReactNode
  className?: string
}

export function Tabs({ defaultValue, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <div className={className}>
      {children(activeTab, setActiveTab)}
    </div>
  )
}

interface TabsListProps {
  children: ReactNode
  className?: string
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div className={clsx('flex space-x-1 border-b border-gray-200', className)}>
      {children}
    </div>
  )
}

interface TabTriggerProps {
  value: string
  children: ReactNode
  activeTab: string
  setActiveTab: (value: string) => void
  className?: string
}

export function TabTrigger({ value, children, activeTab, setActiveTab, className }: TabTriggerProps) {
  const isActive = activeTab === value

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={clsx(
        'px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors',
        isActive
          ? 'border-energy-blue-600 text-energy-blue-700 bg-energy-blue-50'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
        className
      )}
    >
      {children}
    </button>
  )
}

interface TabContentProps {
  value: string
  children: ReactNode
  activeTab: string
  className?: string
}

export function TabContent({ value, children, activeTab, className }: TabContentProps) {
  if (activeTab !== value) return null

  return (
    <div className={clsx('py-4', className)}>
      {children}
    </div>
  )
}