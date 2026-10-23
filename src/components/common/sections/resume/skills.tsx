import Container from '../../layouts/Container'
import { HomeExperience } from '@/components/ui/cards/experience/home'

export const ResumeSkills = () => {
  return (
    <section className="section-surface py-14 sm:py-20" data-scroll-reveal suppressHydrationWarning id="skills">
      <Container>
        <HomeExperience />
      </Container>
    </section>
  )
}
