import React from 'react'
import { Metadata } from 'next'
import { Sidebar } from '@/components/common/sidebar'
import { Footer } from '@/components/common/footer'
import { ScrollEffects } from '@/components/common/scroll-effects'
import { ProjectExplorerProvider } from '@/components/common/project-explorer'
import '@/shared/styles/project-explorer.css'
import '@/shared/styles/css/scrollbar.css'

export const metadata: Metadata = {
  title: 'Aisyah Nur Fadilah | UI/UX Designer & Front-End Developer',
  description:
    'Aisyah Nur Fadilah is an Informatics student at SATU University exploring UI/UX design, front-end development, and thoughtful digital products.'
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProjectExplorerProvider>
      <ScrollEffects />
      <Sidebar />
      {children}
      <Footer />
    </ProjectExplorerProvider>
  )
}
