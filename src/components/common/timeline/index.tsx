import Image from 'next/image'
import { experiences } from '@/data/experience'

export const Timeline = () => {
  return (
    <ol className="md:flex items-start justify-center">
      {experiences.map((item, index) => (
        <li key={index} className="mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex items-center justify-center bg-white rounded-full ring-0 ring-white shrink-0 p-3">
              <Image src={item.image} alt={item.image} height={50} width={50} className="rounded-full" />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
          </div>
          <div className="mt-3">
            <time className="block mb-2 text-xs font-normal leading-none text-stoke">{item.time}</time>
            <h3 className="text-lg font-semibold text-dark">{item.position}</h3>
            <p className="block mb-3 text-sm font-normal leading-none text-dark-gray">{item.organizer}</p>
            <p className="text-base font-normal text-dark-gray text-justify md:mr-6">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
