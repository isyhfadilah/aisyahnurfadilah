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
            {featuredOnly ? 'Design concepts & websites' : 'Design & development archive'}
          </p>
          <GradientText text={featuredOnly ? 'Selected Work' : 'Project Archive'} sizes="text-5xl sm:text-7xl" />
        </div>
        {featuredOnly && (
          <p className="max-w-2xl text-base leading-7 text-dark-gray">
            Selected projects across UX design and front-end development.
          </p>
        )}
        <HomePortfolio featuredOnly={featuredOnly} />
        {featuredOnly ? (
          <Link href="/portfolio" className="neo-button mt-5 w-fit">
            Browse all projects
            <span aria-hidden="true">↗</span>
          </Link>
        ) : (
          <Link href="https://www.behance.net/aizaa" target="_blank" rel="noreferrer" className="neo-button mt-5 w-fit">
            See more work on Behance
            <span aria-hidden="true">↗</span>
          </Link>
        )}
      </Container>
    </section>
  )
}
