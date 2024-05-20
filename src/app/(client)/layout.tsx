import React from 'react'
import { Metadata } from 'next'
import { Sidebar } from '@/components/common/sidebar'
import { Footer } from '@/components/common/footer'

export const metadata: Metadata = {
  title: "Aisyah's branding",
  description: 'she is progressional women'
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Footer />
      <Sidebar />
      {children}
    </React.Fragment>
  )
}
