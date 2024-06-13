'use client'

import { useEffect } from 'react'
import Typed from 'typed.js'
import Button from '@/components/ui/button'
import Container from '../layouts/Container'

export const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ['Front-End Web Developer', 'UI Web Designer'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true
    }

    const typed = new Typed('#typing', options)

    return () => {
      typed.destroy() // Cleanup Typed instance on component unmount
    }
  }, [])

  return (
    <section className="bg-white">
      <div className="bg-primary/15 w-sm h-sm md:w-xl md:h-md rounded-full absolute z-1 -top-10 -left-30 blur-3xl"></div>
      <div className="bg-primary/15 md:w-sm md:h-sm rounded-full absolute z-1 bottom-0 right-0 blur-3xl"></div>

      <Container>
        <section className="flex flex-col justify-center items-center h-screen space-y-6">
          <div className="rounded-md text-xs text-primary border border-secondary p-1 space-x-2 shadow-lg">
            <span className="rounded-full bg-gradient-to-r from-secondary to-primary text-white px-2">Find Me</span>
            <a href="https://www.linkedin.com/in/fadilahnur/" target="blank">
              Aisyah Nur Fadilah
            </a>
          </div>
          <div className="flex flex-col space-y-1 text-center">
            <h1 className="text-xl md:text-2xl bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text">
              Hello I&apos;m Aisyah Nur Fadilah
            </h1>
            <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text">
              I can work as <b id="typing"></b>
            </h1>
          </div>
          <div className="flex gap-4">
            <Button text="Contact Me" rounded="full" url="/contact" className="z-1" size="sm" />
            <Button text="Hire Me" rounded="full" url="/contact" className="z-1" variant="outline" size="sm" />
          </div>
        </section>
      </Container>
    </section>
  )
}
