import { HomePortfolio } from '@/components/ui/cards/portfolio/home'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

interface PortfolioProjectProps {
  featuredOnly?: boolean
}

export const PortfolioProject = ({ featuredOnly = false }: PortfolioProjectProps) => (
  <section className="reference-section" id="portfolio" data-scroll-reveal>
    <div className="site-container">
      <div className="section-heading">
        <h2>
          {featuredOnly ? 'A few ideas, brought' : 'The project'}
          <br />
          <span>{featuredOnly ? 'to life.' : 'archive.'}</span>
        </h2>
        <p>
          {featuredOnly
            ? 'A selection of UI/UX concepts and digital experiences. Made with curiosity, purpose, and care.'
            : 'Explore my work across user experience design and front-end development.'}
        </p>
      </div>
      <HomePortfolio featuredOnly={featuredOnly} />
      <Link
        href={featuredOnly ? '/portfolio' : 'https://www.behance.net/aizaa'}
        target={featuredOnly ? undefined : '_blank'}
        rel={featuredOnly ? undefined : 'noreferrer'}
        className="neo-button neo-button-secondary">
        {featuredOnly ? 'Browse all projects' : 'More work on Behance'}
        <FiArrowUpRight aria-hidden="true" />
      </Link>
    </div>
  </section>
)
