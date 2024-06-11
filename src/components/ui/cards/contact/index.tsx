import React, { ReactElement } from 'react'

export interface ContactProps {
  title: string
  detail: string
  icon: ReactElement
}

export const CardContact = ({ title, detail, icon }: ContactProps) => {
  return (
    <div className="flex items-center gap-6 py-2 px-4">
      <div className="rounded-full p-2 bg-red">{icon}</div>
      <div className="flex flex-col space-y-1">
        <h1 className="text-xl font-semibold capitalize">{title}</h1>
        <p className="text-black/50">{detail}</p>
      </div>
    </div>
  )
}
