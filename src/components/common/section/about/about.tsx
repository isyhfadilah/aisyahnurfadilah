import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { FaMapPin } from 'react-icons/fa'

export const AboutDesk = () => {
  return (
    <section className="py-26" id="about">
      {/* make a tittle */}
      <div className="flex justify-center">
        <GradientText text="ABOUT ME" sizes="text-3xl" className="text-center mb-6" />
      </div>

      <Container className="grid gap-10 md:grid-cols-2 place-content-between justify-between items-center w-full">
        <div>
          <h1 className="text-xl font-semibold">Aisyah Nur Fadilah</h1>
          <div className="flex text-sm mb-4">
            <FaMapPin />
            <span>Sumedang, Indonesia</span>
          </div>
          <p className="text-justify">
            I&apos;m Aisyah Nur Fadilah (19), a Fresh Graduate majoring in Software Engineering from State Vocational High
            School of 2 Sumedang. I have a keen interest in pursuing a career in technology, particularly in front-end
            development. I have gained various experiences in this field since 2022, as outlined in my project portfolio.
          </p>
        </div>

        <GradientText text="I wanna be a progressional person" sizes="text-3xl md:text-4xl" className="text-center" />
      </Container>
    </section>
  )
}
