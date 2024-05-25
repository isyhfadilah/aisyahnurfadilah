import { IoTimeSharp } from 'react-icons/io5'

const experiences = [
  {
    position: 'Front-end Development',
    time: 'Internship PT. Sawala Inovasi Indonesia (Juni – Oktober 2023)',
    detail:
      'Berkontribusi dari sisi client dengan beberapa project seperti Ghia Farm, Pionicon, Pionicon Creative Agency, Yayasan Biodiversitas Indonesia (Bionesia), dan Ikea-Instellar.'
  },
  {
    position: 'Juara 1 Desain Website',
    time: 'Digital Festival Nasional 2023 (Maret 2023)',
    detail: 'Membuat sebuah desain website yg membahas tentang metaverse lorem ipsum lorem iprum lorem ipsum lorem ipsum.'
  },
  {
    position: 'Juara 2 Desain Website',
    time: 'SMK Pusat Keunggulan Telkom (November – Desember 2022)',
    detail: 'Membuat sebuah desain website yg membahas tentang metaverse lorem ipsum lorem iprum lorem ipsum lorem ipsum.'
  }
]

export const Timeline = () => {
  return (
    // z index nya masih nyantol
    <ol className="items-center sm:flex">
      {experiences.map((item, index) => (
        <li key={index} className="mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full ring-0 ring-white shrink-0">
              <IoTimeSharp className="text-lg text-red" />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.position}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.time}</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
