import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { FaMapPin } from 'react-icons/fa'
import Image from 'next/image'

export const AboutDesk = () => {
  return (
    <section className="py-16" id="about">
      <div className="bg-red/15 md:w-sm md:h-sm rounded-full absolute z-1 top-0 right-0 blur-3xl"></div>

      {/* make a tittle */}
      <div className="flex justify-center mb-2">
        <GradientText text="ABOUT ME" sizes="text-3xl" className="text-center" />
      </div>

      <Container className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
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

        <Image src="/images/progress.svg" alt="progressional person" height={400} width={400} />
      </Container>
    </section>
  )
}
