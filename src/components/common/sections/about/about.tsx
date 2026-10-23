import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { FaMapPin } from 'react-icons/fa'
import Image from 'next/image'

export const AboutDesk = () => {
  return (
    <section className="py-16" id="about">
      <div className="bg-primary/15 md:w-96 md:h-[24rem] rounded-full absolute z-1 top-0 right-0 blur-3xl"></div>

      {/* make a tittle */}
      <div className="flex justify-center mb-2">
        <GradientText text="ABOUT ME" sizes="text-3xl" className="text-center" />
      </div>

      <Container className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-xl font-semibold text-dark">Aisyah Nur Fadilah</h1>
          <div className="flex text-sm mb-4">
            <FaMapPin className="text-dark" />
            <span className="text-dark">Sumedang, Indonesia</span>
          </div>
          <p className="text-justify text-dark-gray">
            As a Fresh Graduate in Software Engineering major, I would like to build a long-term career in Web Development
            and User Interface Design to develop new skills while strengthening the skills I already have. I have gained
            various experiences in this field since 2022, as outlined in my project portfolio.
          </p>
        </div>

        <Image src="/images/bust.png" alt="progressional person" height={1000} width={1000} />
      </Container>
    </section>
  )
}
