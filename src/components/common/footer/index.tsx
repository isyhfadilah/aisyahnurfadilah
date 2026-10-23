export const Footer = () => {
  return (
    <footer className="bg-dark px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-bold tracking-tight">
          AISYAH NUR FADILAH<span className="text-secondary">.</span>
        </p>
        <p className="text-xs text-white/60 sm:text-sm">© Aisyah Nur Fadilah | All Rights Reserved</p>
        <a href="#top" className="text-xs font-bold text-secondary transition-colors hover:text-white sm:text-sm">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
