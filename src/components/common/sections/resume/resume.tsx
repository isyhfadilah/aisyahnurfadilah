import Container from '../../layouts/Container'
import { Timeline } from '../../timeline'
import { GradientText } from '@/components/ui/title/gradient'
import Button from '@/components/ui/button'

export const ResumeTimeline = () => {
  return (
    <section className="motion-rise bg-dark py-16 text-white sm:py-24" data-scroll-reveal id="experience">
      <Container className="space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="border-l-4 border-secondary pl-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">Resume</p>
            <GradientText text="Explore" sizes="text-xl sm:text-2xl" className="text-white" />
            <GradientText text="My Experiences" sizes="text-5xl sm:text-7xl" className="text-white" />
          </div>

          <Button
            url="https://drive.google.com/file/d/1KoceWGLBzsgTORU9z9y17hKMknvJ0kOc/view"
            text="Download Resume"
            rounded="full"
            size="sm"
            variant="primary"
            external
            className="w-fit transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          />
        </div>

        <Timeline />
      </Container>
    </section>
  )
}
