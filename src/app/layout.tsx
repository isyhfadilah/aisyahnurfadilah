import '@unocss/reset/tailwind.css'
import '@/shared/styles/app.css'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.svg" type="any" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
