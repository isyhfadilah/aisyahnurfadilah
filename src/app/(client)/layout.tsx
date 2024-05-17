import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Aisyah's branding",
  description: 'she is progressional women'
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>
}
