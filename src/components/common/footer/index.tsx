'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiArrowUpRight, FiCopy, FiCheck } from 'react-icons/fi'

export const Footer = () => {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('aisyahnfadilah73@gmail.com')
      setCopied(true)
      setCopyError(false)
    } catch {
      setCopyError(true)
    }
  }
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-wordmark">
              aisyah<span>.</span>
            </Link>
            <p className="footer-tagline">THOUGHTFUL DESIGN. CAREFUL DEVELOPMENT.</p>
            <span className="live-status">
              <i /> Open to projects &amp; opportunities
            </span>
          </div>
          <nav className="footer-column" aria-label="Footer navigation">
            <p>EXPLORE</p>
            <Link href="/#services">Services</Link>
            <Link href="/#portfolio">Projects</Link>
            <Link href="/#about">Workflow</Link>
            <a href="#top">Back to top ↗</a>
          </nav>
          <div className="footer-column">
            <p>HAVE SOMETHING IN MIND?</p>
            <a href="mailto:aisyahnfadilah73@gmail.com" className="footer-email">
              aisyahnfadilah73@gmail.com
            </a>
            <button type="button" onClick={copyEmail} className="copy-email">
              {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              {copied ? 'Email copied' : 'Copy email'}
            </button>
            <span role="status" className="copy-status">
              {copyError ? 'Please select the email address above to copy it.' : copied ? 'Ready when you are.' : ''}
            </span>
          </div>
          <nav className="footer-column" aria-label="Social profiles">
            <p>FIND ME ON</p>
            <a href="https://www.linkedin.com/in/fadilahnur/" target="_blank" rel="noreferrer">
              LinkedIn <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href="https://www.behance.net/aizaa" target="_blank" rel="noreferrer">
              Behance <FiArrowUpRight aria-hidden="true" />
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aisyah Nur Fadilah. All rights reserved.</p>
          <p>UI/UX Designer &amp; Front-End Developer</p>
        </div>
      </div>
    </footer>
  )
}
