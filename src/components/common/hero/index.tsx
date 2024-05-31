import Button from '@/components/ui/button'
import Container from '../layouts/Container'

export const Hero = () => {
  return (
    <section className="bg-indigo-50" id="home">
      <div className="bg-red/15 w-sm h-sm md:w-xl md:h-md rounded-full absolute z-1 -top-10 -left-30 blur-3xl"></div>
      <div className="bg-red/15 md:w-sm md:h-sm rounded-full absolute z-1 bottom-0 right-0 blur-3xl"></div>

      <Container>
        <section className="flex justify-center items-center h-screen">
          <div className="flex flex-wrap items-center w-md lg:w-2xl gap-4">
            {/* buat effect typing */}
            <div className="space-y-1">
              <h1 className="text-xl md:text-2xl bg-gradient-to-r from-red-400 to-orange-500 inline-block text-transparent bg-clip-text">
                Hello I&apos;m Aisyah Nur Fadilah
              </h1>
              <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-red-400 to-orange-500 inline-block text-transparent bg-clip-text">
                I can work as <b>Front-End Web Developer</b>
              </h1>
            </div>
            <Button text="Hire Me" rounded="full" />
          </div>
        </section>
      </Container>
    </section>
  )
}
