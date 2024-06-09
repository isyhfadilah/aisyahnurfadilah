'use client'

import { Hero } from '@/components/common/hero'
import { useState, useEffect } from 'react'
import SplashScreen from '@/components/common/splash'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // durasi splash screen 3 detik
    return () => clearTimeout(timer)
  }, [])

  return (
    <main>
      {isLoading ? <SplashScreen /> : <Hero />}
      {/* <SplashScreen /> */}
    </main>
  )
}
