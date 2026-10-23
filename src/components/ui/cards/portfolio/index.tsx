import Link from 'next/link'
import Image from 'next/image'

export interface CardProps {
  image?: string
  title: string
  detail?: string
  link?: string
  priority?: boolean
  type?: string
  year?: string
}

export const CardPortfolio = ({ image, title, detail, link, priority = false, type, year }: CardProps) => {
  const content = (
    <>
      {image ? (
        <Image
          src={image}
          alt={title}
          height={1000}
          width={1000}
          loading={priority ? 'eager' : 'lazy'}
          className="relative h-52 w-full rounded-[1.15rem] bg-cover bg-center bg-no-repeat object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-72"
        />
      ) : (
        <div className="relative flex h-52 flex-col justify-between overflow-hidden rounded-[1.15rem] bg-sage p-5 md:h-72 md:p-7">
          <span className="relative z-[1] text-[10px] font-extrabold uppercase tracking-[0.2em] text-dark/65">
            {type === 'design' ? 'UI/UX Case Study' : 'Web Project'}
          </span>
          <span
            aria-hidden="true"
            className="absolute -right-8 top-8 size-36 rounded-full border-[18px] border-paper/40 md:size-48"
          />
          <span className="display-type relative z-[1] max-w-[85%] text-4xl leading-[0.9] text-dark md:text-6xl">
            {title}
          </span>
          {year && <span className="relative z-[1] self-end text-xs font-bold text-dark/60">{year}</span>}
        </div>
      )}
      <div className="flex items-center justify-between gap-3 px-3 py-4 text-dark">
        <div>
          <h2 className="font-display font-bold leading-snug md:text-lg">{title}</h2>
          {detail && <p className="mt-1 line-clamp-3 text-sm leading-6 text-dark-gray">{detail}</p>}
        </div>
        {link && (
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-lg text-dark transition-transform group-hover:rotate-45">
            ↗
          </span>
        )}
      </div>
    </>
  )

  const className =
    'group relative block overflow-hidden rounded-[1.5rem] border border-dark/10 bg-white p-2 transition-transform duration-300 hover:-translate-y-1'

  return link ? (
    <Link href={link} target="_blank" rel="noreferrer" className={className}>
      {content}
    </Link>
  ) : (
    <article className={className}>{content}</article>
  )
}
