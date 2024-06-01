import Container from '../../layouts/Container'
import { CardExperience } from '@/components/ui/cards/experience'

export const ResumeSkills = () => {
  return (
    <section className="mb-16">
      <Container>
        <div className="grid grid-cols-2 gap-10">
          <CardExperience />
          <CardExperience />
        </div>
      </Container>
    </section>
  )
}
