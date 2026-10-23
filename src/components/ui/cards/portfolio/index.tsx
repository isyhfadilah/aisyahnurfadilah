import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

const MotionLink = motion.create(Link)

const cardHover = {
  x: -8,
  y: -8,
  boxShadow: '14px 14px 0 var(--color-dark)',
  transition: { type: 'spring' as const, stiffness: 500, damping: 18 }
}

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
  const prefersReducedMotion = useReducedMotion()

  const content = (
    <>
      {image ? (
        <Image
          src={image}
          alt={title}
          height={1000}
          width={1000}
          loading={priority ? 'eager' : 'lazy'}
          className="project-preview relative h-52 w-full border-2 border-dark bg-paper object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02] md:h-72"
        />
      ) : (
        <div className="relative flex h-52 flex-col justify-between overflow-hidden border-2 border-dark bg-sky p-5 md:h-72 md:p-7">
          <span className="relative z-[1] w-fit border-2 border-dark bg-paper px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-dark">
            {type === 'design' ? 'UI/UX Case Study' : 'Web Project'}
          </span>
          <span
            aria-hidden="true"
            className="absolute -right-8 top-8 size-36 rounded-full border-[18px] border-primary md:size-48"
          />
          <span className="display-type relative z-[1] max-w-[85%] text-4xl leading-[0.9] text-dark md:text-6xl">
            {title}
          </span>
          {year && <span className="relative z-[1] self-end text-xs font-bold text-dark/60">{year}</span>}
        </div>
      )}
      <div className="flex min-h-32 flex-col justify-between gap-3 border-x-2 border-b-2 border-dark bg-paper px-3 py-4 text-dark">
        <div>
          <h2 className="font-display font-bold leading-snug md:text-lg">{title}</h2>
          {detail && <p className="mt-1 line-clamp-2 text-sm leading-6 text-dark-gray">{detail}</p>}
        </div>
        {link && (
          <span className="inline-flex w-fit items-center gap-2 border-2 border-dark bg-secondary px-3 py-1.5 text-xs font-bold text-dark">
            {action ?? 'View project'} <span aria-hidden="true">↗</span>
          </span>
        )}
      </div>
    </>
  )

  const className = 'neo-card group relative flex h-full flex-col overflow-hidden p-2'

  return link ? (
    <MotionLink
      href={link}
      target="_blank"
      rel="noreferrer"
      className={className}
      whileHover={prefersReducedMotion ? undefined : cardHover}
      whileFocus={prefersReducedMotion ? undefined : cardHover}>
      {content}
    </MotionLink>
  ) : (
    <motion.article className={className} whileHover={prefersReducedMotion ? undefined : cardHover}>
      {content}
    </motion.article>
  )
}
