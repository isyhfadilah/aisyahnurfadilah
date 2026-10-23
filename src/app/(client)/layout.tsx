import React from 'react'
import { Suspense } from 'react'

import { Metadata } from 'next'
import { Sidebar } from '@/components/common/sidebar'
import { Footer } from '@/components/common/footer'
import SplashScreen from '@/components/common/splash'
import { ScrollEffects } from '@/components/common/scroll-effects'

import '@/shared/styles/css/scrollbar.css'

export const metadata: Metadata = {
  title: 'Aisyah Nur Fadilah | Front-End Web Developer | UI Web Designer',
  description: 'Aisyah Nur Fadilah is a front-end developer and UI designer creating thoughtful digital experiences.'
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <ScrollEffects />
      <Sidebar />
      <Suspense fallback={<SplashScreen />}>{children}</Suspense>
      <Footer />
    </React.Fragment>
  )
}
