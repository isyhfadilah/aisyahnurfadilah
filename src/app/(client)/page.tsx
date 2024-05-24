import { Hero } from '@/components/common/hero'
import { About } from '@/components/common/section/about'
import { Experience } from '@/components/common/section/experience'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
    </main>
  )
}
