import React, { ReactElement } from 'react'

export interface ContactProps {
  title: string
  detail: string
  icon: ReactElement
  href?: string
}

export const CardContact = ({ title, detail, icon, href }: ContactProps) => {
  const content = (
    <>
      <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary [&>svg]:!text-dark">{icon}</div>
      <div className="space-y-1">
        <h2 className="font-display text-base font-bold text-dark md:text-lg">{title}</h2>
        <p className="break-words text-sm text-dark-gray md:text-base">{detail}</p>
      </div>
    </>
  )

  const className =
    'flex items-center gap-4 rounded-2xl border border-dark/10 bg-white p-4 transition-transform hover:-translate-y-1 md:p-5'

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  )
}
