import Container from '../../layouts/Container'
import { Timeline } from '../../timeline'
import { GradientText } from '@/components/ui/title/gradient'

export const ResumeTimeline = () => {
  return (
    <section className="py-16 bg-white">
      <div className="flex justify-center">
        <GradientText text="RESUME" sizes="text-3xl" />
      </div>

      <Container className="space-y-6 mt-6">
        <div className="flex flex-col border-l-2 border-l-orange md:pl-6 pl-2">
          <GradientText text="Explore" sizes="text-xl" />
          <GradientText text="My Experiences" sizes="text-2xl" />
        </div>

        <Timeline />
      </Container>
    </section>
  )
}
