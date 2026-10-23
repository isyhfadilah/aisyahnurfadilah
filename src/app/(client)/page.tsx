import { Hero } from '@/components/common/hero'
import { AboutDesk } from '@/components/common/sections/about/about'
import { PortfolioProject } from '@/components/common/sections/portfolio'
import { HomeContactCta } from '@/components/common/sections/contact/information'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutDesk />
      <PortfolioProject featuredOnly />
      <HomeContactCta />
    </main>
  )
}
