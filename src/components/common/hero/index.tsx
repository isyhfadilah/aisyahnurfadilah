'use client'

import Link from 'next/link'

export const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="portfolio-hero relative isolate min-h-[min(820px,calc(100svh-80px))] overflow-hidden text-dark">
        <div
          aria-hidden="true"
          className="hero-orbit hero-orbit-one pointer-events-none absolute left-[7%] top-[22%] size-16 rounded-full border-[3px] border-dark bg-secondary shadow-[5px_5px_0_#262321] sm:left-[12%] sm:size-24"
        />
        <div
          aria-hidden="true"
          className="hero-orbit hero-orbit-two pointer-events-none absolute right-[8%] top-[38%] grid size-16 rotate-12 place-items-center border-[3px] border-dark bg-primary text-3xl text-dark shadow-[5px_5px_0_#262321] sm:right-[12%] sm:size-24 sm:text-5xl">
          ✳
        </div>
        <div aria-hidden="true" className="hero-cloud hero-cloud-left bottom-[13%] -left-16 sm:left-[3%]" />
        <div aria-hidden="true" className="hero-cloud hero-cloud-right bottom-[17%] -right-24 scale-75 sm:right-[1%]" />
        <div className="relative mx-auto flex min-h-[min(740px,calc(100svh-80px))] max-w-[1500px] flex-col items-center justify-center px-5 pb-20 pt-12 text-center sm:px-8 lg:px-12">
          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="hero-enter hero-enter-one mb-5 inline-flex items-center gap-2 border-2 border-dark bg-paper px-5 py-2 text-xs font-bold tracking-wide shadow-[4px_4px_0_#262321] sm:text-sm">
              <span className="size-2 rounded-full border border-dark bg-primary" />
              Informatics Student <span className="text-dark/40">/</span> SATU University
            </p>
            <h1 className="display-type hero-enter hero-enter-two text-[clamp(3.25rem,10.7vw,10rem)] leading-[0.84] text-dark [text-shadow:3px_3px_0_#fffaf2]">
              <span className="hero-title-line">Hello I&apos;m</span>
              <span className="hero-title-line">Aisyah Nur</span>
              <span className="hero-title-line text-primary [text-shadow:3px_3px_0_#262321]">Fadilah</span>
            </h1>
            <p className="hero-enter hero-enter-three mx-auto mt-8 max-w-2xl border-2 border-dark bg-paper px-5 py-3 text-sm font-semibold leading-6 text-dark shadow-[5px_5px_0_#262321] sm:px-8 sm:text-base sm:leading-7">
              I design digital experiences around user needs.
            </p>

            <div className="hero-enter hero-enter-four mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/#portfolio"
                className="hero-button group inline-flex items-center gap-3 border-2 border-dark bg-secondary px-6 py-3.5 text-sm font-bold text-dark shadow-[4px_4px_0_#262321] transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_#262321]">
                View My Work
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
              <Link
                href="/#about"
                className="hero-button inline-flex items-center gap-2 border-2 border-dark bg-paper px-6 py-3 text-sm font-bold shadow-[4px_4px_0_#262321] transition-transform hover:-translate-y-1 hover:translate-x-1 hover:bg-primary">
                About Me <span aria-hidden="true">↘</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div aria-hidden="true" className="overflow-hidden border-y-2 border-dark bg-secondary py-3 text-dark">
        <div className="ticker-track flex w-max whitespace-nowrap text-xl font-bold tracking-tight sm:text-2xl">
          {[0, 1].map((group) => (
            <span key={group} className="flex min-w-[100vw] shrink-0 items-center justify-around gap-8">
              {[0, 1].map((item) => (
                <span key={item} className="flex items-center gap-8">
                  UI/UX Designer <span className="text-primary">✳</span> Front-End Developer{' '}
                  <span className="text-dark">✳</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
