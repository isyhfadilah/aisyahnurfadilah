import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { FaMapPin } from 'react-icons/fa'
import Link from 'next/link'

export const AboutDesk = () => {
  return (
    <section className="section-surface relative isolate overflow-hidden py-16 sm:py-24" data-scroll-reveal id="about">
      <Container className="relative">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="motion-rise-delay-1 relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-[2rem] bg-sage">
            <div aria-hidden="true" className="absolute left-8 top-8 size-24 rounded-full border-[3px] border-dark/60" />
            <div aria-hidden="true" className="absolute bottom-8 right-8 size-40 rounded-full bg-secondary" />
            <div className="relative z-[1] grid size-[72%] place-items-center rounded-full border-[3px] border-dark bg-paper text-center">
              <span className="display-type text-[clamp(5rem,13vw,9rem)] leading-none text-dark">
                AF<span className="text-primary">.</span>
              </span>
            </div>
          </div>

          <div className="motion-rise-delay-2">
            <div className="mb-5 border-l-4 border-primary pl-5">
              <GradientText text="ABOUT ME" sizes="text-3xl sm:text-4xl" />
            </div>
            <h2 className="display-type text-4xl leading-[0.95] text-dark sm:text-6xl">Aisyah Nur Fadilah</h2>
            <div className="mt-5 flex items-center gap-2 text-sm font-bold text-dark-gray">
              <FaMapPin className="text-primary" />
              <span>West Java, Indonesia</span>
            </div>
            <p className="mt-7 max-w-2xl text-base leading-8 text-dark-gray sm:text-lg">
              I&apos;m an Informatics student at SATU University, exploring how thoughtful UI/UX can make digital products
              clearer, simpler, and more meaningful. My design work spans mobile app concepts, landing-page redesigns, and
              usability-focused case studies—turning user needs into purposeful flows and interfaces.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-dark-gray sm:text-lg">
              My front-end background, including an internship at Sawala Technology, helps me design with implementation in
              mind. I&apos;m strengthening my process from user context and wireframes through prototyping, while exploring
              accessibility, AI, and digital product design.
            </p>
            <Link
              href="/#experience"
              className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-dark px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-1">
              Explore my journey
              <span className="text-secondary transition-transform group-hover:translate-x-1" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
