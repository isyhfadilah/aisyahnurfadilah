import React from 'react'

import { Metadata } from 'next'
import { LayoutGroup } from 'framer-motion'
import { Sidebar } from '@/components/common/sidebar'
import { Footer } from '@/components/common/footer'
import SplashScreen from '@/components/common/splash'
import { ScrollEffects } from '@/components/common/scroll-effects'

import '@/shared/styles/css/scrollbar.css'
import '@/shared/styles/splash.css'

export const metadata: Metadata = {
  title: 'Aisyah Nur Fadilah | UI/UX Designer & Front-End Developer',
  description:
    'Aisyah Nur Fadilah is an Informatics student at SATU University exploring UI/UX design, front-end development, and thoughtful digital products.'
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutGroup id="portfolio-intro">
      <SplashScreen />
      <ScrollEffects />
      <Sidebar />
      {children}
      <Footer />
    </LayoutGroup>
  )
}
