import Container from '../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'

export const Internship = () => {
  return (
    <section className="py-26 bg-red-1">
      <Container>
        <GradientText text="Front-end Development" sizes="text-3xl" />
        <p className="text-black/50 text-lg">Internship PT. Sawala Inovasi Indonesia</p>
      </Container>
    </section>
  )
}
