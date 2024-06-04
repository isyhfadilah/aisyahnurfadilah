import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { HomePortfolio } from '@/components/ui/cards/portfolio/home'

export const PortfolioProject = () => {
  return (
    <section className="py-16">
      <div className="bg-red/15 w-sm h-sm md:w-xl md:h-md rounded-full absolute  -top-10 -right-30 blur-3xl"></div>

      <Container className="flex flex-col mb-10 justify-center items-center">
        <GradientText text="PORTFOLIO" sizes="text-3xl" />
        <HomePortfolio />
      </Container>
    </section>
  )
}
