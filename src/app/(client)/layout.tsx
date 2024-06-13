import React from 'react'
import { Suspense } from 'react'

import { Metadata } from 'next'
import { Sidebar } from '@/components/common/sidebar'
import SplashScreen from '@/components/common/splash'

import '@/shared/styles/css/scrollbar.css'

export const metadata: Metadata = {
  title: 'Aisyah Nur Fadilah | Front-End Web Developer | UI Web Designer',
  description: 'she is a progressional woman'
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Sidebar />
      <Suspense fallback={<SplashScreen />}>{children}</Suspense>
    </React.Fragment>
  )
}
