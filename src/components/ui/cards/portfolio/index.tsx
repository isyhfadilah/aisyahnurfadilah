import Link from 'next/link'
import Image from 'next/image'

export interface CardProps {
  image: string
  title: string
  detail?: string
  link: string
  priority?: boolean
}

export const CardPortfolio = ({ image, title, detail, link, priority = false }: CardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-[1.5rem] border border-dark/10 bg-white p-2 transition-transform duration-300 hover:-translate-y-1">
      <Image
        src={image}
        alt={title}
        height={1000}
        width={1000}
        loading={priority ? 'eager' : 'lazy'}
        className="relative h-52 w-full rounded-[1.15rem] bg-cover bg-center bg-no-repeat object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-72"
      />
      <div className="flex items-center justify-between gap-3 px-3 py-4 text-dark">
        <div>
          <h2 className="font-display font-bold leading-snug md:text-lg">{title}</h2>
          {detail && <p className="mt-1 text-sm text-dark-gray">{detail}</p>}
        </div>
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-lg text-dark transition-transform group-hover:rotate-45">
          ↗
        </span>
      </div>
    </Link>
  )
}
