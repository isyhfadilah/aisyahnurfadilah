import React, { ReactElement } from 'react'

export interface ContactProps {
  title: string
  detail: string
  icon: ReactElement
}

export const CardContact = ({ title, detail, icon }: ContactProps) => {
  return (
    <div className="flex items-center gap-1 md:gap-6 py-2 md:px-4">
      <div className="rounded-full p-2 bg-gradient-to-b from-secondary to-primary">{icon}</div>
      <div className="space-y-1">
        <h1 className="text-lg md:text-xl font-semibold capitalize">{title}</h1>
        <p className="text-sm md:text-base text-black/50">{detail}</p>
      </div>
    </div>
  )
}
