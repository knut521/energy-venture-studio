'use client'

import { clsx } from 'clsx'
import { ReactNode } from 'react'

interface TableProps {
  children: ReactNode
  className?: string
}

export function Table({ children, className }: TableProps) {
  return (
    <div className={clsx('overflow-x-auto', className)}>
      <table className="w-full border-collapse">
        {children}
      </table>
    </div>
  )
}

interface TableHeaderProps {
  children: ReactNode
  className?: string
}

export function TableHeader({ children, className }: TableHeaderProps) {
  return (
    <thead className={className}>
      {children}
    </thead>
  )
}

interface TableBodyProps {
  children: ReactNode
  className?: string
}

export function TableBody({ children, className }: TableBodyProps) {
  return (
    <tbody className={className}>
      {children}
    </tbody>
  )
}

interface TableRowProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function TableRow({ children, className, hover = false }: TableRowProps) {
  return (
    <tr className={clsx(
      'border-b border-gray-200',
      hover && 'hover:bg-gray-50',
      className
    )}>
      {children}
    </tr>
  )
}

interface TableHeadProps {
  children: ReactNode
  className?: string
}

export function TableHead({ children, className }: TableHeadProps) {
  return (
    <th className={clsx(
      'px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
      'bg-gray-50',
      className
    )}>
      {children}
    </th>
  )
}

interface TableCellProps {
  children: ReactNode
  className?: string
  align?: 'left' | 'center' | 'right'
}

export function TableCell({ children, className, align = 'left' }: TableCellProps) {
  return (
    <td className={clsx(
      'px-4 py-3 text-sm text-gray-900',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      {children}
    </td>
  )
}