import { Hero } from '@/components/common/hero'
import { AboutDesk } from '@/components/common/sections/about/about'
import { AboutService } from '@/components/common/sections/about'
import { PortfolioProject } from '@/components/common/sections/portfolio'
import { ResumeEducation, ResumeSkills, ResumeTimeline } from '@/components/common/sections/resume'
import { ContactForm, ContactInfo } from '@/components/common/sections/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutDesk />
      <AboutService />
      <PortfolioProject />
      <ResumeTimeline />
      <ResumeSkills />
      <ResumeEducation />
      <ContactForm />
      <ContactInfo />
    </main>
  )
}
