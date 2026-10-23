import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { TimeEducation } from '../../timeline/education'

export const ResumeEducation = () => {
  return (
    <section
      className="section-surface motion-rise relative isolate my-16 overflow-hidden py-16 sm:my-20 sm:py-20"
      data-scroll-reveal
      suppressHydrationWarning
      id="education">
      <Container className="space-y-8">
        <div className="relative flex flex-col border-l-4 border-primary pl-5">
          <GradientText text="My Education" sizes="text-xl sm:text-2xl" />
          <GradientText text="Background History" sizes="text-4xl sm:text-6xl" />
        </div>

        <TimeEducation />
      </Container>
    </section>
  )
}
