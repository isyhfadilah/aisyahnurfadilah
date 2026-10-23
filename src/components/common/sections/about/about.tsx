import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { FaMapPin } from 'react-icons/fa'

export const AboutDesk = () => {
  return (
    <section
      className="section-surface relative isolate overflow-hidden py-16 sm:py-24"
      data-scroll-reveal
      suppressHydrationWarning
      id="about">
      <Container className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="neo-panel motion-rise-delay-1 p-6 sm:p-10">
          <div className="mb-5 border-l-4 border-primary pl-5">
            <GradientText text="A LITTLE ABOUT ME" sizes="text-3xl sm:text-4xl" />
          </div>
          <h2 className="display-type text-4xl leading-[0.95] text-dark sm:text-6xl">Designing with clarity and care.</h2>
          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-dark-gray">
            <FaMapPin className="text-primary" />
            <span>West Java, Indonesia</span>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-dark-gray sm:text-lg">
            I&apos;m Aisyah, an Informatics student drawn to the point where user needs meet thoughtful interfaces. My
            front-end background keeps me curious about both how a product feels and how it works.
          </p>
        </div>

        <aside aria-label="Design and development skills" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="neo-panel relative bg-sky p-5 sm:p-6">
            <span
              aria-hidden="true"
              className="absolute -right-2 -top-3 grid size-10 rotate-6 place-items-center border-2 border-dark bg-secondary text-lg shadow-[3px_3px_0_#262321]">
              ✳
            </span>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-dark-gray">01 / Design</p>
            <h3 className="display-type mt-3 text-3xl leading-none text-dark sm:text-4xl">Shape the experience.</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {['User flows', 'Wireframes', 'Prototypes', 'Figma'].map((skill) => (
                <li key={skill} className="border-2 border-dark bg-paper px-2.5 py-1 text-xs font-bold text-dark">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="neo-panel bg-primary p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-dark-gray">02 / Development</p>
            <h3 className="display-type mt-3 text-3xl leading-none text-dark sm:text-4xl">Bring it to life.</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                <li key={skill} className="border-2 border-dark bg-paper px-2.5 py-1 text-xs font-bold text-dark">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>
    </section>
  )
}
