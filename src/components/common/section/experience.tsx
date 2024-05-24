import Container from '../layouts/Container'
import { Timeline } from '../timeline'

export const Experience = () => {
  return (
    <section className="py-26 bg-white">
      <Container className="space-y-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-500 inline-block text-transparent bg-clip-text">
          Explore My Experience
        </h1>
        <Timeline />
      </Container>
    </section>
  )
}
