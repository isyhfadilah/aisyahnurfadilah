'use client'

import Link from 'next/link'

export const Hero = () => {
  return (
    <>
      <section id="home" className="portfolio-hero relative isolate overflow-hidden text-dark">
        <div className="relative mx-auto flex min-h-[min(700px,calc(100svh-80px))] max-w-[1500px] items-center px-5 py-20 sm:px-8 lg:px-16">
          <div aria-hidden="true" className="hero-mark">
            A<span>.</span>
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="hero-enter hero-enter-one mb-5 text-xs font-bold uppercase tracking-[0.2em] text-dark-gray sm:text-sm">
              UI/UX Designer <span className="mx-2 text-primary">/</span> Front-End Developer
            </p>
            <h1 className="display-type hero-enter hero-enter-two text-[clamp(3.5rem,9vw,8rem)] leading-[0.88] text-dark">
              Hello, I&apos;m
              <span className="block">Aisyah Nur</span>
              <span className="block text-primary">Fadilah.</span>
            </h1>
            <p className="hero-enter hero-enter-three mt-8 max-w-xl text-base leading-7 text-dark-gray sm:text-lg sm:leading-8">
              I design digital experiences around user needs.
            </p>

            <div className="hero-enter hero-enter-four mt-8 flex flex-wrap gap-3">
              <Link href="/#portfolio" className="neo-button group">
                View My Work
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
              <Link href="/#about" className="neo-button neo-button-secondary">
                About Me <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div aria-hidden="true" className="overflow-hidden border-y border-dark bg-dark py-2.5 text-paper">
        <div className="ticker-track flex w-max gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-[0.12em] sm:text-base">
          {[0, 1, 2, 3].map((item) => (
            <span key={item} className="flex items-center gap-8">
              UI/UX Designer <span className="text-secondary">✳</span> Front-End Developer{' '}
              <span className="text-secondary">✳</span>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
