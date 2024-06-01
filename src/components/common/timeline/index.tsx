import Image from 'next/image'

const experiences = [
  {
    position: 'Front-end Development',
    time: 'Internship PT. Sawala Inovasi Indonesia (Juni – Oktober 2023)',
    detail:
      'Berkontribusi dari sisi client dengan beberapa project seperti Ghia Farm, Pionicon, Pionicon Creative Agency, Yayasan Biodiversitas Indonesia (Bionesia), dan Ikea-Instellar.',
    image: '/images/sawala.jpeg'
  },
  {
    position: 'Juara 1 Desain Website',
    time: 'Digital Festival Nasional 2023 (Maret 2023)',
    detail: 'Membuat sebuah desain website yg membahas tentang metaverse lorem ipsum lorem iprum lorem ipsum lorem ipsum.',
    image: '/images/polsub.png'
  },
  {
    position: 'Juara 2 Desain Website',
    time: 'SMK Pusat Keunggulan Telkom (November – Desember 2022)',
    detail: 'Membuat sebuah desain website yg membahas tentang metaverse lorem ipsum lorem iprum lorem ipsum lorem ipsum.',
    image: '/images/itdri.png'
  }
]

export const Timeline = () => {
  return (
    // masih menyon garisnya
    <ol className="items-center sm:flex">
      {experiences.map((item, index) => (
        <li key={index} className="mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="flex items-center justify-center bg-white rounded-full ring-0 ring-white shrink-0 p-3">
              <Image src={item.image} alt={item.image} height={50} width={50} className="rounded-full" />
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
