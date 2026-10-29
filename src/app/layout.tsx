import '@/shared/styles/app.css'
import '@/shared/styles/visual-refresh.css'
import '@/shared/styles/project-mockup.css'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html id="top" lang="en">
      <head>
        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
