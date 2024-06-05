import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa'
import { IoMdDocument } from 'react-icons/io'
import Link from 'next/link'
import Container from '../layouts/Container'

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
    label: 'portfolio',
    link: '/portfolio',
    icon: <FaEnvelope className="text-red-400 text-2xl md:text-3xl" />
  }
]

export const Sidebar = () => {
  return (
    <nav className="w-full">
      <div className="fixed h-full flex justify-center items-center ml-2 md:ml-10 rounded-full z-2">
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
      </div>

      <div className="w-full z-1 bg-white fixed rounded-t-2xl bottom-0 py-4 rounded-t-lg shadow-xl shadow-black md:hidden">
        <Container>
          <ul className="flex items-center justify-between">
            {menuItems.map((item, index) => (
              <li key={index} className="flex flex-col justify-center items-center">
                <Link href={item.link}>{item.icon}</Link>
                <span className="text-xs text-red-400 text-center">{item.label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </nav>
  )
}
