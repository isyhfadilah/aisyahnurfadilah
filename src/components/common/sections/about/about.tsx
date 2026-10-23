import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { FaMapPin } from 'react-icons/fa'
import Link from 'next/link'

export const AboutDesk = () => {
  return (
    <section className="section-surface relative isolate overflow-hidden py-16 sm:py-24" data-scroll-reveal id="about">
      <Container className="relative">
        <div className="motion-rise-delay-1 max-w-3xl">
          <div className="mb-5 border-l-4 border-primary pl-5">
            <GradientText text="A LITTLE ABOUT ME" sizes="text-3xl sm:text-4xl" />
          </div>
          <h2 className="display-type text-4xl leading-[0.95] text-dark sm:text-6xl">Designing with clarity and care.</h2>
          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-dark-gray">
            <FaMapPin className="text-primary" />
            <span>West Java, Indonesia</span>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-dark-gray sm:text-lg">
            I&apos;m Aisyah, an Informatics student exploring UI/UX design and digital products. With a front-end development
            background, I enjoy shaping useful experiences and thinking through how they come to life.
          </p>
          <Link
            href="https://drive.google.com/file/d/13mBLNId3XDFgChvwQzpe2ucCyanq6TLj/view"
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center gap-3 text-sm font-bold text-dark underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary">
            View my CV
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
