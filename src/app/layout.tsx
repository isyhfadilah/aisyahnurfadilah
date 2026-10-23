import '@/shared/styles/app.css'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
