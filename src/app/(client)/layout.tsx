import React from 'react'
import { Sidebar } from '@/components/common/sidebar'
import { Footer } from '@/components/common/footer'
import { ScrollEffects } from '@/components/common/scroll-effects'
import { ProjectExplorerProvider } from '@/components/common/project-explorer'
import '@/shared/styles/project-explorer.css'
import '@/shared/styles/css/scrollbar.css'

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
