import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { TimeEducation } from '../../timeline/education'

export const ResumeEducation = () => {
  return (
    <section className="mt-16 mb-26 md:my-16">
      <Container className="space-y-8">
        <div className="flex flex-col border-l-2 border-l-primary pl-6">
          <GradientText text="My Education" sizes="text-xl" />
          <GradientText text="Background History" sizes="text-2xl" />
        </div>

        <TimeEducation />
      </Container>
    </section>
  )
}
