import Image from 'next/image'
import { experiences } from '@/data/experience'

export const Timeline = () => {
  return (
    // masih menyon garisnya
    // menyon ketika posisi hendak ke mobile
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
            <h3 className="text-lg font-semibold text-gray-900">{item.position}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{item.time}</time>
            <p className="text-base font-normal text-gray-500 text-justify md:mr-6">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
