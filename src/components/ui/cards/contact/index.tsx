import React, { ReactElement } from 'react'

export interface ContactProps {
  title: string
  detail: string
  icon: ReactElement
}

export const CardContact = ({ title, detail, icon }: ContactProps) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-dark/10 bg-white p-4 transition-transform hover:-translate-y-1 md:p-5">
      <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary [&>svg]:!text-dark">{icon}</div>
      <div className="space-y-1">
        <h2 className="font-display text-base font-bold capitalize text-dark md:text-lg">{title}</h2>
        <p className="break-words text-sm text-dark-gray md:text-base">{detail}</p>
      </div>
    </div>
  )
}
