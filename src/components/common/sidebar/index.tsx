'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const menuItems = [
  { label: 'Projects', link: '/#portfolio' },
  { label: 'About', link: '/#about' },
  {
    label: 'Resume',
    link: 'https://drive.google.com/file/d/11O7SmX7SMtqv0WIeXzSVpXkARVvqJwWi/view?usp=sharing',
    external: true
  },
  { label: 'Contact', link: '/#contact' }
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
    <header className="sticky top-0 z-30 border-b border-dark/15 bg-paper/95 text-dark backdrop-blur-md">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:px-16">
        <Link href="/" className="flex w-fit shrink-0 items-center gap-3" aria-label="Aisyah Nur Fadilah — home">
          <span className="font-display text-2xl font-black tracking-[-0.1em] text-dark sm:text-3xl">
            a<span className="text-primary">.</span>
          </span>
          <span className="hidden text-xs font-semibold leading-tight text-dark-gray sm:block">
            Aisyah Nur Fadilah
            <br />
            Designer &amp; Developer
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex min-w-0 items-center justify-end">
          <ul className="flex flex-nowrap items-center gap-1 sm:gap-4">
            {menuItems.map((item) => {
              const isActive = !item.external && pathname === '/' && activeLink === item.link
              const linkClassName = `inline-flex whitespace-nowrap px-2 py-2 text-[11px] font-semibold transition-colors sm:px-3 sm:text-sm ${
                isActive ? 'text-primary' : 'text-dark-gray hover:text-dark'
              }`

              return (
                <li key={item.link}>
                  {item.external ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className={linkClassName}>
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.link}
                      aria-current={isActive ? 'page' : undefined}
                      className={
                        item.label === 'Contact' ? 'neo-button px-3 py-2 text-[11px] sm:px-4 sm:text-sm' : linkClassName
                      }>
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
