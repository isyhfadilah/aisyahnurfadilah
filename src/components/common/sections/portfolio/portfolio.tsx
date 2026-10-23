import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { HomePortfolio } from '@/components/ui/cards/portfolio/home'

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
      </Container>
    </section>
  )
}
