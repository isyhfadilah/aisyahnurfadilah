'use client'

import { useState } from 'react'

import Link from 'next/link'
import Container from '../layouts/Container'
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa'
import { IoMdDocument } from 'react-icons/io'

// nanti switch ke new file khusus
const menuItems = [
  {
    label: 'home',
    link: '/',
    icon: <FaHome className="text-primary/90 text-2xl md:text-3xl" />
  },
  {
    label: 'about',
    link: '/about',
    icon: <FaUser className="text-primary/90 text-2xl md:text-3xl" />
  },
  {
    label: 'resume',
    link: '/resume',
    icon: <IoMdDocument className="text-primary/90 text-2xl md:text-3xl" />
  },
  {
    label: 'portfolio',
    link: '/portfolio',
    icon: <FaEnvelope className="text-primary/90 text-2xl md:text-3xl" />
  }
]

export const Sidebar = () => {
  const [isClicked, setIsClicked] = useState<number | null>(null)

  const handleClicked = (index: number) => {
    setIsClicked(index)
  }

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
                <span className="text-xs text-primary/90 text-center capitalize">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full z-1 bg-white fixed rounded-t-xl bottom-0 py-4 rounded-t-lg border-t-1 border-red md:hidden">
        <Container>
          <ul className="flex items-center justify-between">
            {menuItems.map((item, index) => (
              <li key={index} className="flex flex-col justify-center items-center">
                <Link
                  href={item.link}
                  onClick={() => handleClicked(index)}
                  className={`transform transition duration-200 ease-in-out ${isClicked === index ? 'rotate-30' : ''}`}>
                  {item.icon}
                </Link>
                <span className="text-xs text-primary/90 text-center">{item.label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </nav>
  )
}
