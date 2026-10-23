import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { HomeContact } from '@/components/ui/cards/contact/home'

export const ContactInfo = () => {
  return (
    <section className="section-surface motion-rise-delay-1 py-16 sm:py-20" data-scroll-reveal id="contact-info">
      <Container>
        <div className="flex flex-col border-l-4 border-primary pl-5">
          <GradientText text="Contact Information" sizes="text-xl sm:text-2xl" />
          <GradientText text="Find Me Here" sizes="text-4xl sm:text-6xl" />
        </div>
        <HomeContact />
      </Container>
    </section>
  )
}
