import Container from '../../layouts/Container'
import { Timeline } from '../../timeline'
import { GradientText } from '@/components/ui/title/gradient'

export const ResumeTimeline = () => {
  return (
    <section className="py-26 bg-white">
      <Container className="space-y-6">
        <GradientText text="Explore My Experience" sizes="text-3xl" />
        <Timeline />
      </Container>
    </section>
  )
}
