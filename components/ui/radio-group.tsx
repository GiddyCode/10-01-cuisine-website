'use client'

import React from 'react'

export const RadioGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string; onValueChange?: (value: string) => void }
>(({ className = '', value, onValueChange, ...props }, ref) => (
  <div ref={ref} className={`space-y-2 ${className}`} {...props} />
))

RadioGroup.displayName = 'RadioGroup'

export const RadioGroupItem = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = '', ...props }, ref) => (
  <input
    ref={ref}
    type="radio"
    className={`h-4 w-4 rounded-full border border-primary text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
))

RadioGroupItem.displayName = 'RadioGroupItem'
