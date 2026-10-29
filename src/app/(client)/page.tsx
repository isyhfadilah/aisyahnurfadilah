import { Hero } from '@/components/common/hero'
import { AboutDesk } from '@/components/common/sections/about/about'
import { AboutService } from '@/components/common/sections/about/service'
import { HomeContactCta } from '@/components/common/sections/contact/information'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutService />
      <AboutDesk />
      <HomeContactCta />
    </main>
  )
}
