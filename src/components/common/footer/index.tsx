export const Footer = () => {
  return (
    <footer className="border-t-2 border-dark bg-sage px-5 py-8 text-dark sm:px-8">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-bold tracking-tight">
          AISYAH NUR FADILAH<span className="text-secondary">.</span>
        </p>
        <p className="text-xs text-dark-gray sm:text-sm">© Aisyah Nur Fadilah | All Rights Reserved</p>
        <a href="#top" className="text-xs font-bold underline decoration-primary decoration-2 underline-offset-4 sm:text-sm">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
