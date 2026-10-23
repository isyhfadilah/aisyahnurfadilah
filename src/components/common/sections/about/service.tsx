import Container from '../../layouts/Container'
import { HomeService } from '@/components/ui/cards/service/home'

export const AboutService = () => {
  return (
    <section
      className="motion-rise mb-20 bg-sage py-16 text-dark sm:py-20"
      data-scroll-reveal
      suppressHydrationWarning
      id="services">
      <Container>
        <HomeService />
      </Container>
    </section>
  )
}
