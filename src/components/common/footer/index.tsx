export const Footer = () => {
  return (
    <footer className="border-t border-dark/15 bg-paper px-5 py-7 text-dark sm:px-8">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="font-display text-sm font-bold tracking-tight">
          Aisyah Nur Fadilah<span className="text-primary">.</span>
        </p>
        <p className="text-xs text-dark-gray sm:text-sm">© Aisyah Nur Fadilah | All Rights Reserved</p>
        <a
          href="#top"
          className="text-xs font-semibold text-dark underline decoration-primary underline-offset-4 sm:text-sm">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
