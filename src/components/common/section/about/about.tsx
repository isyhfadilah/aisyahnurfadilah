import Container from '../../layouts/Container'
import { CardExperience } from '@/components/ui/cards/experience'
import { GradientText } from '@/components/ui/title/gradient'

export const AboutDesk = () => {
  return (
    <section className="py-26" id="about">
      {/* make a tittle */}
      <Container className="grid gap-10 md:grid-cols-3 place-content-between justify-between items-center w-full">
        <GradientText text="I wanna be a progressional person" sizes="text-3xl md:text-4xl" />
        <div className="md:col-span-2">
          <p className="text-justify">
            I&apos;m Aisyah Nur Fadilah (19), a Fresh Graduate majoring in Software Engineering from State Vocational High
            School of 2 Sumedang. I have a keen interest in pursuing a career in technology, particularly in front-end
            development. I have gained various experiences in this field since 2022, as outlined in my project portfolio.
          </p>
        </div>
      </Container>

      {/* alihkan ke section baru dan perbaiki struktur code supaya best practice */}
      <Container className="grid md:grid-cols-2 gap-8 mt-10">
        <CardExperience />
        <CardExperience />
      </Container>
    </section>
  )
}
