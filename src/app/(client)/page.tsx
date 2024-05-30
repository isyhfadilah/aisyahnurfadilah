import { Hero } from '@/components/common/hero'
import { About } from '@/components/common/section/about'
import { Experience } from '@/components/common/section/experience'
import { Internship } from '@/components/common/section/sawala'
import { Achievement } from '@/components/common/section/difest'
import { AchievementItdri } from '@/components/common/section/itdri'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Internship />
      {/* namanya masih amburadul */}
      {/* achievement belum lengkap */}
      <Achievement />
      <AchievementItdri />
    </main>
  )
}
