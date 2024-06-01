import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa'
import { IoMdDocument } from 'react-icons/io'
import Link from 'next/link'

// nanti switch ke new file khusus
const menuItems = [
  {
    label: 'Home',
    link: '/',
    icon: <FaHome className="text-red-400 text-2xl md:text-3xl" />
  },
  {
    label: 'About',
    link: '/about',
    icon: <FaUser className="text-red-400 text-2xl md:text-3xl" />
  },
  {
    label: 'resume',
    link: '/resume',
    icon: <IoMdDocument className="text-red-400 text-2xl md:text-3xl" />
  },
  {
    label: 'contact',
    link: '/contact',
    icon: <FaEnvelope className="text-red-400 text-2xl md:text-3xl" />
  }
]

export const Sidebar = () => {
  return (
    // buat versi responsive
    // masih di hidden manual
    <nav className="fixed ml-2 md:ml-10 rounded-full flex justify-center items-center h-full z-2">
      <div className="shadow-2xl px-1 py-6 rounded-full">
        <ul className="space-y-6 hidden md:block">
          {menuItems.map((item, index) => (
            <li key={index} className="flex flex-col justify-center items-center">
              <Link href={item.link} className="rounded-full p-2 shadow-xl hover:bg-white/50">
                {item.icon}
              </Link>
              <span className="text-xs text-red-400 text-center">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
