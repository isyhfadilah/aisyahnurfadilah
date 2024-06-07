import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import Image from 'next/image'

export const AboutService = () => {
  return (
    <section className="mb-26">
      <Container>
        <div className="bg-red/8 px-6 md:px-10 py-8 rounded-lg shadow shadow-sm space-y-6 border-l-2 border-l-orange border-b-2 border-b-orange">
          <div className="flex flex-col border-l-2 border-l-orange pl-6">
            <GradientText text="What Actually I Do" sizes="text-xl" />
            <GradientText text="My Service" sizes="text-2xl" />
          </div>

          {/* perbaiki struktur dan datanya*/}
          <div className="md:flex items-center space-x-2 group">
            <Image src="/icons/web.svg" alt="web development" height={80} width={80} className="rounded-full" />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold group-hover:text-red">Front-End Web Development</h1>
              <p className="text-sm text-black/50">
                Build an interactive and responsive website for various device sizes using various frameworks such as
                Next.js, React.js, Tailwind CSS, Uno CSS, or natively without using frameworks.
              </p>
            </div>
          </div>

          <div className="md:flex items-center space-x-2 group">
            <Image src="/icons/web.svg" alt="web development" height={80} width={80} className="rounded-full" />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold group-hover:text-red">UI Web Designer</h1>
              <p className="text-sm text-black/50">
                Build a website design with a good layout for various device sizes using the Figma tool.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
