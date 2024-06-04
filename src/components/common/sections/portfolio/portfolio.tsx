import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { CardPortfolio } from '@/components/ui/cards/portfolio'

export const PortfolioProject = () => {
  return (
    <section className="py-16">
      <Container className="flex flex-col mb-10 justify-center items-center">
        <GradientText text="PORTFOLIO" sizes="text-3xl" />

        <CardPortfolio
          image="/images/computer.jpg"
          title="Front-end"
          detail="ini adalah first project"
          link="img is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
        />
      </Container>
    </section>
  )
}
