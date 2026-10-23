import React from 'react'
import { cn } from '@/lib/utils'

interface TextProps {
  text: string
  sizes: 'text-4xl' | 'text-5xl' | 'text-6xl' | string
  className?: string
}

export const GradientText: React.FC<TextProps> = ({ text, sizes, className }) => {
  return <h2 className={cn(`${sizes} display-type inline-block text-dark`, className)}>{text}</h2>
}
