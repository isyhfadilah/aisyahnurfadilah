import { Hero } from '@/components/common/hero'
import { About } from '@/components/common/section/about'
import { Experience } from '@/components/common/section/experience'
import { Internship } from '@/components/common/section/sawala'
import { AchievementDifest } from '@/components/common/section/difest'
import { AchievementItdri } from '@/components/common/section/itdri'
import { Projects } from '@/components/common/section/projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Internship />
      <AchievementDifest />
      <AchievementItdri />
      <Projects />
    </main>
  )
}
