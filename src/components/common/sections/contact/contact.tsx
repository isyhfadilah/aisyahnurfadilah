import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { Input, TextArea } from '@/components/ui/forms'
import Button from '@/components/ui/button'

export const ContactForm = () => {
  return (
    <section
      className="motion-rise relative isolate overflow-hidden bg-sage py-16 text-dark sm:py-24"
      data-scroll-reveal
      id="contact">
      <Container className="relative">
        <div className="grid items-start gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <div className="mb-5 border-l-4 border-secondary pl-5">
              <GradientText text="CONTACT" sizes="text-4xl sm:text-6xl" />
            </div>
            <div className="mt-8 space-y-3 text-lg font-bold sm:text-xl">
              <p>Front-End Web Developer</p>
              <p className="text-white">UI Web Designer</p>
            </div>
            <div
              aria-hidden="true"
              className="mt-10 grid size-40 place-items-center rounded-full border-[3px] border-dark text-7xl text-primary sm:size-52 sm:text-8xl">
              ↗
            </div>
          </div>
          <form
            action=""
            className="space-y-5 rounded-[1.5rem] border border-dark/10 bg-paper p-5 shadow-xl shadow-dark/10 sm:p-8">
            <Input
              label="Name"
              type="text"
              variant="dark"
              className="border-dark/20 bg-white text-dark focus:border-primary focus:ring-2 focus:ring-primary/20"
              containerClass="text-dark"
            />
            <Input
              label="Email"
              type="email"
              variant="dark"
              className="border-dark/20 bg-white text-dark focus:border-primary focus:ring-2 focus:ring-primary/20"
              containerClass="text-dark"
            />
            <TextArea
              label="Message"
              variant="dark"
              className="min-h-36 border-dark/20 bg-white text-dark focus:border-primary focus:ring-2 focus:ring-primary/20"
              containerClass="text-dark"
            />
            <Button text="Submit" className="w-full transition-transform hover:-translate-y-0.5" rounded="full" />
          </form>
        </div>
      </Container>
    </section>
  )
}
