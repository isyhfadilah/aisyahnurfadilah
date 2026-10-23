import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { HomeContact } from '@/components/ui/cards/contact/home'
import Link from 'next/link'

export const ContactInfo = () => {
  return (
    <section
      className="section-surface motion-rise-delay-1 py-16 sm:py-20"
      data-scroll-reveal
      suppressHydrationWarning
      id="contact-info">
      <Container>
        <div className="flex flex-col border-l-4 border-primary pl-5">
          <GradientText text="Get in touch" sizes="text-xl sm:text-2xl" />
          <GradientText text="Choose how to reach me" sizes="text-4xl sm:text-6xl" />
        </div>
        <HomeContact />
      </Container>
    </section>
  )
}

export const HomeContactCta = () => {
  return (
    <section
      className="border-y-2 border-dark bg-sky py-16 text-dark sm:py-20"
      data-scroll-reveal
      suppressHydrationWarning
      id="contact">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-dark-gray">
            Have a project or opportunity in mind?
          </p>
          <h2 className="display-type text-4xl leading-tight sm:text-5xl">Let&apos;s talk about it.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:aisyahnfadilah73@gmail.com" className="neo-button">
            Email me <span aria-hidden="true">↗</span>
          </a>
          <Link
            href="https://www.linkedin.com/in/fadilahnur/"
            target="_blank"
            rel="noreferrer"
            className="neo-button neo-button-secondary">
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
