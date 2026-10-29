'use client'

import Link from 'next/link'
import { ProjectMockup } from '@/components/ui/project-mockup'
import { FiArrowUpRight } from 'react-icons/fi'

export interface CardProps {
  image?: string
  title: string
  detail?: string
  link?: string
  priority?: boolean
  type?: string
  year?: string
  action?: string
}

export const CardPortfolio = ({ image, title, detail, link, priority = false, type, year, action }: CardProps) => {
  const content = (
    <>
      <div className={'project-visual' + (image ? '' : ' project-placeholder')}>
        {image ? (
          <ProjectMockup image={image} title={title} type={type ?? 'website'} priority={priority} />
        ) : (
          <>
            <span className="project-placeholder-label">{type === 'design' ? 'UI/UX CONCEPT' : 'WEB PROJECT'}</span>
            <span className="project-placeholder-title">{title}</span>
            <span className="placeholder-orbit" aria-hidden="true" />
          </>
        )}
        <span className="project-type">{type === 'design' ? 'UI/UX design' : 'Web development'}</span>
      </div>
      <div className="project-details">
        <div className="project-title-row">
          <h3>{title}</h3>
          {link && (
            <span className="project-open">
              <FiArrowUpRight aria-hidden="true" />
            </span>
          )}
        </div>
        {detail && <p>{detail}</p>}
        <div className="project-caption">
          <span>{link ? (action ?? 'View project') : 'Concept exploration'}</span>
          {year && <span>{year}</span>}
        </div>
      </div>
    </>
  )
  return link ? (
    <Link href={link} target="_blank" rel="noreferrer" className="project-card">
      {content}
    </Link>
  ) : (
    <article className="project-card">{content}</article>
  )
}
