import Image from 'next/image'
import { experiences } from '@/data/experience'

export const Timeline = () => {
  return (
    <ol className="motion-stagger grid gap-5 md:grid-cols-3">
      {experiences.map((item, index) => (
        <li
          key={index}
          className="group rounded-[1.5rem] border border-white/15 bg-white/[0.06] p-5 transition-transform hover:-translate-y-1 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-secondary p-2">
              <Image
                src={item.image}
                alt={item.organizer}
                height={50}
                width={50}
                className="h-auto max-h-full w-auto object-contain"
              />
            </div>
            <span className="h-px flex-1 bg-white/15" />
            <span className="text-sm font-bold text-secondary">0{index + 1}</span>
          </div>
          <div className="mt-6">
            <time className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/45">{item.time}</time>
            <h3 className="font-display text-lg font-bold text-white">{item.position}</h3>
            <p className="mb-4 mt-1 text-sm font-semibold text-secondary">{item.organizer}</p>
            <p className="text-sm leading-7 text-white/60">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
