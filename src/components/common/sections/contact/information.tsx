import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { HomeContact } from '@/components/ui/cards/contact/home'
import Link from 'next/link'

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

export const HomeContactCta = () => {
  return (
    <section className="border-y-2 border-dark bg-primary py-16 text-dark sm:py-20" data-scroll-reveal id="contact">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-dark-gray">Have a project in mind?</p>
          <h2 className="display-type text-4xl leading-tight sm:text-5xl">Let&apos;s make something useful.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:aisyahnfadilah73@gmail.com"
            className="inline-flex items-center gap-3 border-2 border-dark bg-secondary px-6 py-3.5 text-sm font-bold text-dark shadow-[4px_4px_0_#262321] transition-transform hover:-translate-y-1 hover:translate-x-1">
            Get in touch{' '}
            <span aria-hidden="true" className="text-secondary">
              ↗
            </span>
          </a>
          <Link
            href="https://www.linkedin.com/in/fadilahnur/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border-2 border-dark bg-paper px-6 py-3.5 text-sm font-bold shadow-[4px_4px_0_#262321] transition-transform hover:-translate-y-1 hover:translate-x-1">
            LinkedIn <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
