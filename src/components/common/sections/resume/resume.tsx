import Container from '../../layouts/Container'
import { Timeline } from '../../timeline'
import { GradientText } from '@/components/ui/title/gradient'
import Button from '@/components/ui/button'
import { awards } from '@/data/experience'

export const ResumeTimeline = () => {
  return (
    <section className="bg-dark py-16 text-white sm:py-24" data-scroll-reveal suppressHydrationWarning id="experience">
      <Container className="space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="border-l-4 border-secondary pl-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">Experience</p>
            <GradientText text="Work & Leadership" sizes="text-5xl sm:text-7xl" className="scroll-title text-white" />
          </div>

          <Button
            url="https://drive.google.com/file/d/13mBLNId3XDFgChvwQzpe2ucCyanq6TLj/view"
            text="Download Resume"
            rounded="full"
            size="sm"
            variant="primary"
            external
            className="w-fit transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          />
        </div>

        <Timeline />

        <div className="space-y-6 pt-8">
          <div className="border-l-4 border-secondary pl-5">
            <GradientText
              text="Recognition & Awards"
              sizes="text-3xl sm:text-4xl"
              className="scroll-title-from-right text-white"
            />
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {awards.map((award) => (
              <li key={award.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-secondary">{award.time}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-white">{award.title}</h3>
                <p className="mt-1 text-sm font-semibold text-secondary">{award.organization}</p>
                <p className="mt-3 text-sm leading-6 text-white/65">{award.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
