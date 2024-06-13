import React from 'react'
import { cn } from '@/lib/utils'

interface TextProps {
  text: string
  sizes: 'text-4xl' | 'text-5xl' | 'text-6xl' | string
  className?: string
}

export const GradientText: React.FC<TextProps> = ({ text, sizes, className }) => {
  return (
    <h1
      className={cn(
        className,
        `${sizes} font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text`
      )}>
      {text}
    </h1>
  )
}
