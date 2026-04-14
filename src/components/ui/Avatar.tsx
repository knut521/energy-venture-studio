'use client'

import { clsx } from 'clsx'
import { ReactNode } from 'react'

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string | ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Avatar({ src, alt, fallback, size = 'md', className }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  }

  if (src) {
    return (
      <img
        src={src}
        alt={alt || 'Avatar'}
        className={clsx(
          'rounded-full object-cover',
          sizeClasses[size],
          className
        )}
      />
    )
  }

  if (typeof fallback === 'string') {
    return (
      <div
        className={clsx(
          'bg-energy-blue-100 text-energy-blue-800 rounded-full flex items-center justify-center font-medium',
          sizeClasses[size],
          className
        )}
      >
        {fallback.slice(0, 2).toUpperCase()}
      </div>
    )
  }

  return (
    <div
      className={clsx(
        'bg-gray-200 rounded-full flex items-center justify-center',
        sizeClasses[size],
        className
      )}
    >
      {fallback}
    </div>
  )
}