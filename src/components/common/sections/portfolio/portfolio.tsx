import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { HomePortfolio } from '@/components/ui/cards/portfolio/home'
import Link from 'next/link'

export const PortfolioProject = () => {
  return (
    <section
      className="section-surface motion-rise relative isolate min-h-[70vh] overflow-hidden py-16 sm:py-24"
      data-scroll-reveal
      id="portfolio">
      <Container className="relative mb-10 flex flex-col">
        <div className="mb-5 border-l-4 border-secondary pl-5">
          <GradientText text="PORTFOLIO" sizes="text-5xl sm:text-7xl" />
        </div>
        <HomePortfolio />
        <Link
          href="https://www.behance.net/aizaa"
          target="_blank"
          rel="noreferrer"
          className="group mt-5 inline-flex w-fit items-center gap-3 rounded-xl bg-dark px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-1">
          Explore more on Behance
          <span className="text-secondary transition-transform group-hover:translate-x-1" aria-hidden="true">
            ↗
          </span>
        </Link>
      </Container>
    </section>
  )
}
