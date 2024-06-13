import Container from '../../layouts/Container'
import { Timeline } from '../../timeline'
import { GradientText } from '@/components/ui/title/gradient'
import Button from '@/components/ui/button'

export const ResumeTimeline = () => {
  return (
    <section className="py-16 bg-white">
      <div className="flex justify-center">
        <GradientText text="RESUME" sizes="text-3xl" />
      </div>

      <Container className="space-y-6 mt-6">
        <div className="md:flex space-y-6 md:space-y-0 justify-between items-center">
          <div className="flex flex-col border-l-2 border-l-secondary pl-6">
            <GradientText text="Explore" sizes="text-xl" />
            <GradientText text="My Experiences" sizes="text-2xl" />
          </div>

          <Button
            url="https://drive.google.com/file/d/1KoceWGLBzsgTORU9z9y17hKMknvJ0kOc/view"
            text="Download Resume"
            rounded="full"
            size="sm"
            variant="outline"
            className="transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"
          />
        </div>

        <Timeline />
      </Container>
    </section>
  )
}
