import React from 'react'
import { Suspense } from 'react'

import { Metadata } from 'next'
import { Sidebar } from '@/components/common/sidebar'
import SplashScreen from '@/components/common/splash'

export const metadata: Metadata = {
  title: "Aisyah's branding",
  description: 'she is progressional women'
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Sidebar />
      <Suspense fallback={<SplashScreen />}>{children}</Suspense>
    </React.Fragment>
  )
}
