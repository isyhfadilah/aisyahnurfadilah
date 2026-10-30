import type { Metadata } from 'next'
import '@/shared/styles/app.css'
import '@/shared/styles/visual-refresh.css'
import '@/shared/styles/project-mockup.css'

export const metadata: Metadata = {
  title: 'Aisyah Nur Fadilah | UI/UX Designer',
  description:
    'UI/UX design portfolio of Aisyah Nur Fadilah. Explore user flows, interface designs, and prototypes that make apps easier to use.',
  icons: {
    icon: { url: '/icons/favicon.svg', type: 'image/svg+xml' }
  }
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html id="top" lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
