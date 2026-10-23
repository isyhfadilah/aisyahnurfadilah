'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export const ScrollEffects = () => {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.classList.add('has-scroll-reveal')
    const elements = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [pathname])

  return null
}
