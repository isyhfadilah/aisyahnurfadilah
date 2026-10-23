import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { HomePortfolio } from '@/components/ui/cards/portfolio/home'

export const PortfolioProject = () => {
  return (
    <section className="py-16">
      <div className="bg-primary/15 w-xs h-[20rem] md:w-lg md:h-[24rem] rounded-full absolute top-0 right-0 blur-3xl z-0 hidden md:block"></div>

      <Container className="flex flex-col mb-10 justify-center items-center">
        <GradientText text="PORTFOLIO" sizes="text-3xl" />
        <HomePortfolio />
      </Container>
    </section>
  )
}
