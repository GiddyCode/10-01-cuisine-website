'use client'

import React, { useState } from 'react'

interface SelectContextType {
  value: string
  onValueChange?: (value: string) => void
}

const SelectContext = React.createContext<SelectContextType | undefined>(undefined)

export function Select({ value, onValueChange, children }: { value?: string; onValueChange?: (value: string) => void; children: React.ReactNode }) {
  return (
    <SelectContext.Provider value={{ value: value || '', onValueChange }}>
      {children}
    </SelectContext.Provider>
  )
}

export function SelectTrigger({ className = '', children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = React.useContext(SelectContext)
  return (
    <button
      type="button"
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 justify-between items-center ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span>{placeholder}</span>
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function SelectItem({ value, children, onSelect }: { value: string; children: React.ReactNode; onSelect?: () => void }) {
  const context = React.useContext(SelectContext)
  const isSelected = context?.value === value
  
  return (
    <option value={value} selected={isSelected}>
      {children}
    </option>
  )
}
