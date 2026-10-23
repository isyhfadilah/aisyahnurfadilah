import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { HomePortfolio } from '@/components/ui/cards/portfolio/home'
import Link from 'next/link'

interface PortfolioProjectProps {
  featuredOnly?: boolean
}

export const PortfolioProject = ({ featuredOnly = false }: PortfolioProjectProps) => {
  return (
    <section
      className="section-surface motion-rise relative isolate overflow-hidden py-16 sm:py-24"
      data-scroll-reveal
      suppressHydrationWarning
      id="portfolio">
      <Container className="relative mb-10 flex flex-col">
        <div className="mb-5 border-l-4 border-secondary pl-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-dark-gray">
            {featuredOnly ? 'A selection of my work' : 'Selected and past projects'}
          </p>
          <GradientText text={featuredOnly ? 'Selected Work' : 'Portfolio'} sizes="text-5xl sm:text-7xl" />
        </div>
        {featuredOnly && (
          <p className="max-w-2xl text-base leading-7 text-dark-gray">
            A few projects exploring digital experiences, interface design, and the details that make them useful.
          </p>
        )}
        <HomePortfolio featuredOnly={featuredOnly} />
        {featuredOnly ? (
          <Link href="/portfolio" className="neo-button mt-5 w-fit">
            View all projects
            <span aria-hidden="true">↗</span>
          </Link>
        ) : (
          <Link href="https://www.behance.net/aizaa" target="_blank" rel="noreferrer" className="neo-button mt-5 w-fit">
            Explore more on Behance
            <span aria-hidden="true">↗</span>
          </Link>
        )}
      </Container>
    </section>
  )
}
