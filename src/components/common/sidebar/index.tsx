'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const menuItems = [
  { label: 'Work', link: '/#portfolio' },
  { label: 'About', link: '/#about' },
  {
    label: 'CV',
    link: 'https://drive.google.com/file/d/13mBLNId3XDFgChvwQzpe2ucCyanq6TLj/view',
    external: true
  },
  { label: 'Contact', link: '/#contact' }
]

export const Sidebar = () => {
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState('/')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateActiveLink = () => setActiveLink(window.location.hash ? `/${window.location.hash}` : '/')
    updateActiveLink()
    window.addEventListener('hashchange', updateActiveLink)
    return () => window.removeEventListener('hashchange', updateActiveLink)
  }, [pathname])

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 80)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  const isOnHomeHero = pathname === '/' && !isScrolled

  return (
    <header
      id="top"
      className={`sticky top-0 z-30 text-dark backdrop-blur-md transition-colors duration-300 ${
        isOnHomeHero ? 'bg-sky/95' : 'bg-paper/95'
      }`}>
      <div className="mx-auto flex max-w-[1500px] flex-col gap-3 border-b-2 border-dark px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <Link href="/" className="flex w-fit items-center gap-3" aria-label="Aisyah Nur Fadilah — home">
          <span className="grid size-11 place-items-center border-2 border-dark bg-secondary text-sm font-black tracking-[-0.08em] shadow-[3px_3px_0_#262321]">
            ANF
          </span>
          <span className="font-display text-sm font-bold leading-none tracking-[-0.04em] sm:text-base">
            AISYAH NUR
            <br />
            FADILAH<span className="text-secondary">.</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center justify-between gap-3 sm:justify-end sm:gap-4">
          <ul className="flex flex-wrap items-center gap-1 border-2 border-dark bg-paper p-1 shadow-[3px_3px_0_#262321] sm:gap-1.5">
            {menuItems.map((item) => {
              const isActive = !item.external && pathname === '/' && activeLink === item.link

              return (
                <li key={item.link}>
                  {item.external ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex border-2 border-transparent px-3 py-2 text-xs font-bold text-dark/80 transition-colors hover:border-dark hover:bg-primary hover:text-dark sm:px-4 sm:text-sm">
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.link}
                      aria-current={isActive ? 'page' : undefined}
                      className={`inline-flex border-2 px-3 py-2 text-xs font-bold transition-colors sm:px-4 sm:text-sm ${
                        isActive
                          ? 'border-dark bg-secondary text-dark'
                          : 'border-transparent text-dark/80 hover:border-dark hover:bg-primary hover:text-dark'
                      }`}>
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
