import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { HomeContact } from '@/components/ui/cards/contact/home'

export const ContactInfo = () => {
  return (
    <section className="mt-16 mb-26">
      <Container>
        <div className="flex flex-col border-l-2 border-l-orange pl-6">
          <GradientText text="Contact Information" sizes="text-xl" />
          <GradientText text="Find Me Here" sizes="text-2xl" />
        </div>
        <HomeContact />
      </Container>
    </section>
  )
}
