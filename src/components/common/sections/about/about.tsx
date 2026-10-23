import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { FaMapPin } from 'react-icons/fa'

export const AboutDesk = () => {
  return (
    <section
      className="section-surface relative isolate overflow-hidden py-16 sm:py-24"
      data-scroll-reveal
      suppressHydrationWarning
      id="about">
      <Container className="relative">
        <div className="neo-panel motion-rise-delay-1 max-w-4xl p-6 sm:p-10">
          <div className="mb-5 border-l-4 border-primary pl-5">
            <GradientText text="A LITTLE ABOUT ME" sizes="text-3xl sm:text-4xl" />
          </div>
          <h2 className="display-type text-4xl leading-[0.95] text-dark sm:text-6xl">Designing with clarity and care.</h2>
          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-dark-gray">
            <FaMapPin className="text-primary" />
            <span>West Java, Indonesia</span>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-dark-gray sm:text-lg">
            I&apos;m Aisyah, an Informatics student drawn to the point where user needs meet thoughtful interfaces. My
            front-end background keeps me curious about both how a product feels and how it works.
          </p>
        </div>
      </Container>
    </section>
  )
}
