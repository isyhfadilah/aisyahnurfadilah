import React from 'react'

interface TextProps {
  text: string
  sizes: 'text-4xl' | 'text-5xl' | 'text-6xl' | string
}

export const GradientText: React.FC<TextProps> = ({ text, sizes }) => {
  return (
    <h1
      className={`${sizes} font-bold bg-gradient-to-r from-red-400 to-orange-500 inline-block text-transparent bg-clip-text`}>
      {text}
    </h1>
  )
}
