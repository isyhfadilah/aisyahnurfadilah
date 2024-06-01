import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import Image from 'next/image'

export const AboutService = () => {
  return (
    <section className="mb-26">
      <Container>
        <div className="bg-orange/5 px-6 md:px-10 py-8 rounded-lg shadow shadow-sm space-y-6 border-l-2 border-l-orange border-b-2 border-b-orange">
          <div className="flex flex-col border-l-2 border-l-orange pl-2 md:pl-10">
            <GradientText text="What Actually I Do" sizes="text-xl" />
            <GradientText text="My Service" sizes="text-3xl" />
          </div>

          <div className="md:flex items-center space-x-2 group">
            <Image src="/images/computer.jpg" alt="web development" height={80} width={80} className="rounded-full" />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold group-hover:text-red">Front-End Web Development</h1>
              <p className="text-sm">Build a home page</p>
            </div>
          </div>

          <div className="md:flex items-center space-x-2 group">
            <Image src="/images/computer.jpg" alt="web development" height={80} width={80} className="rounded-full" />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold group-hover:text-red">UI Web Designer</h1>
              <p className="text-sm">Build a home page</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
