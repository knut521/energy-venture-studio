'use client'

import { useState } from 'react'
import { Menu, X, Zap, BarChart3, Lightbulb, Users, Settings } from 'lucide-react'
import Button from './ui/Button'

const navigation = [
  { name: 'Dashboard', href: '#', icon: BarChart3, current: true },
  { name: 'Ventures', href: '#', icon: Lightbulb, current: false },
  { name: 'Market Analysis', href: '#', icon: Users, current: false },
  { name: 'Settings', href: '#', icon: Settings, current: false },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-energy-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Energy Venture Studio
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      item.current
                        ? 'bg-energy-blue-100 text-energy-blue-700'
                        : 'text-gray-600 hover:text-energy-blue-600 hover:bg-energy-blue-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    item.current
                      ? 'bg-energy-blue-100 text-energy-blue-700'
                      : 'text-gray-600 hover:text-energy-blue-600 hover:bg-energy-blue-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}