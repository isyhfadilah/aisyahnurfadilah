'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import Typed from 'typed.js'

export const Hero = () => {
  useEffect(() => {
    const typed = new Typed('#typing', {
      strings: ['UI/UX Designer', 'Front-End Developer'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true
    })

    return () => typed.destroy()
  }, [])

  return (
    <>
      <section
        id="home"
        className="portfolio-hero relative isolate min-h-[min(820px,calc(100svh-80px))] overflow-hidden text-dark">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[7%] top-[22%] size-16 rounded-full border-2 border-primary/80 sm:left-[12%] sm:size-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-[38%] grid size-16 rotate-12 place-items-center rounded-2xl border-2 border-primary text-3xl text-primary sm:right-[12%] sm:size-24 sm:text-5xl">
          ✳
        </div>
        <div aria-hidden="true" className="hero-cloud bottom-[13%] -left-16 opacity-70 sm:left-[3%]" />
        <div aria-hidden="true" className="hero-cloud bottom-[17%] -right-24 scale-75 opacity-70 sm:right-[1%]" />
        <div className="relative mx-auto flex min-h-[min(740px,calc(100svh-80px))] max-w-[1500px] flex-col items-center justify-center px-5 pb-20 pt-12 text-center sm:px-8 lg:px-12">
          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-xs font-bold tracking-wide sm:text-sm">
              <span className="size-2 rounded-full bg-secondary" />
              Informatics Student <span className="text-dark/40">/</span> SATU University
            </p>
            <h1 className="display-type text-[clamp(3.25rem,10.7vw,10rem)] leading-[0.84] text-white [text-shadow:0_4px_0_rgb(23_24_21_/_5%)]">
              Hello I&apos;m
              <br />
              Aisyah Nur
              <br />
              <span className="text-primary">Fadilah</span>
            </h1>
            <p className="mx-auto mt-8 inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-white/85 px-5 py-3 text-sm font-bold text-dark sm:min-w-[22rem] sm:px-8 sm:text-base">
              I can work as <span id="typing" className="ml-1 text-primary" />
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-dark px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-1">
                Contact Me
                <span aria-hidden="true" className="text-secondary transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-dark/70 px-6 py-3 text-sm font-bold transition-colors hover:bg-white/50">
                Hire Me <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div aria-hidden="true" className="overflow-hidden bg-dark py-3 text-white">
        <div className="ticker-track flex w-max gap-8 whitespace-nowrap text-xl font-bold tracking-tight sm:text-2xl">
          {[0, 1, 2, 3].map((item) => (
            <span key={item} className="flex items-center gap-8">
              UI/UX Designer <span className="text-primary">✳</span> Front-End Developer{' '}
              <span className="text-secondary">✳</span>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
