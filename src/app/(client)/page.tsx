import { Hero } from '@/components/common/hero'
import { About } from '@/components/common/section/about'
import { Experience } from '@/components/common/section/experience'
import { Internship } from '@/components/common/section/sawala'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Internship />
    </main>
  )
}
