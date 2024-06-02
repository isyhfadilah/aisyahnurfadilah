import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'

export const PortfolioProject = () => {
  return (
    <section className="py-16">
      <Container className="flex justify-center items-center">
        <GradientText text="PORTFOLIO" sizes="text-3xl" />
      </Container>
    </section>
  )
}
