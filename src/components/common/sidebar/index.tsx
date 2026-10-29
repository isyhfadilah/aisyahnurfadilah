'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const menuItems = [
  { label: 'Services', link: '/#services' },
  { label: 'Projects', link: '/#portfolio' },
  { label: 'About', link: '/#about' }
]

export const Sidebar = () => {
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState('')
  useEffect(() => {
    const update = () => setActiveLink(window.location.hash ? '/' + window.location.hash : '')
    update()
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [pathname])

  return (
    <header className="site-header">
      <div className="topbar">
        <Link href="/" className="site-logo" aria-label="Aisyah Nur Fadilah — home">
          aisyah<span>✳</span>
        </Link>
        <nav aria-label="Main navigation">
          {menuItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              aria-current={pathname === '/' && activeLink === item.link ? 'location' : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="topbar-actions">
          <a
            className="resume-link"
            href="https://drive.google.com/file/d/11O7SmX7SMtqv0WIeXzSVpXkARVvqJwWi/view?usp=sharing"
            target="_blank"
            rel="noreferrer">
            Resume <FiArrowUpRight aria-hidden="true" />
          </a>
          <Link href="/#contact" className="neo-button header-cta">
            Let’s talk <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  )
}
