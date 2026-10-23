import { services } from '@/data/service'
import { GradientText } from '../../title/gradient'
import { CardService } from '.'
import Link from 'next/link'

export const HomeService = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col border-l-4 border-secondary pl-5">
        <GradientText text="What Actually I Do" sizes="text-lg sm:text-xl" />
        <GradientText text="My Service" sizes="text-4xl sm:text-6xl" />
      </div>

      <div className="motion-stagger grid gap-4 md:grid-cols-2">
        {services.map((item, index) => (
          <CardService key={index} image={item.image} title={item.title} detail={item.detail} />
        ))}
      </div>
      <Link
        href="/#portfolio"
        className="group inline-flex items-center gap-3 rounded-xl bg-dark px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-1">
        Explore selected projects
        <span className="text-secondary transition-transform group-hover:translate-x-1" aria-hidden="true">
          ↗
        </span>
      </Link>
    </div>
  )
}
