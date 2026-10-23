'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/#about' },
  { label: 'Experience', link: '/#experience' },
  { label: 'Portfolio', link: '/#portfolio' }
]

export const Sidebar = () => {
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState('/')

  useEffect(() => {
    const updateActiveLink = () => setActiveLink(window.location.hash ? `/${window.location.hash}` : '/')
    updateActiveLink()
    window.addEventListener('hashchange', updateActiveLink)
    return () => window.removeEventListener('hashchange', updateActiveLink)
  }, [pathname])

  return (
    <header id="top" className="sticky top-0 z-30 bg-[#2189cf]/95 text-dark backdrop-blur-md">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <Link href="/" className="flex w-fit items-center gap-3" aria-label="Aisyah Nur Fadilah — home">
          <span className="grid size-11 place-items-center rounded-full border-2 border-dark text-sm font-black tracking-[-0.08em]">
            ANF
          </span>
          <span className="font-display text-sm font-bold leading-none tracking-[-0.04em] sm:text-base">
            AISYAH NUR
            <br />
            FADILAH<span className="text-secondary">.</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center justify-between gap-3 sm:justify-end sm:gap-4">
          <ul className="flex flex-wrap items-center gap-x-1 rounded-full border border-white/35 bg-white/25 p-1 sm:gap-x-1.5">
            {menuItems.map((item) => {
              const isActive = pathname === '/' && activeLink === item.link

              return (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    aria-current={isActive ? 'page' : undefined}
                    className={`inline-flex rounded-full px-3 py-2 text-xs font-bold transition-colors sm:px-4 sm:text-sm ${
                      isActive ? 'bg-dark text-white' : 'text-dark/80 hover:bg-white/50 hover:text-dark'
                    }`}>
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link
            href="/#contact"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-dark text-xl font-bold text-white transition-transform hover:-rotate-12"
            aria-label="Contact Aisyah">
            ↗
          </Link>
        </nav>
      </div>
    </header>
  )
}
