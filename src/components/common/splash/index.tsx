// components/SplashScreen.tsx
import React, { useEffect, useState } from 'react'

const SplashScreen: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // durasi splash screen 3 detik
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    // over simple
    <div className="fixed inset-0 flex items-center justify-center text-red md:text-4xl z-50">
      <div className="animate-pulse transition duration-500 ease-in-out">Loading...</div>
    </div>
  )
}

export default SplashScreen
