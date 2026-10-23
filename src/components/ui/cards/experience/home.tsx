import { CardExperience } from '.'
import { language, skills } from '@/data/skills'

export const HomeExperience = () => {
  return (
    <div className="motion-stagger grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
      <CardExperience title={skills.title} skills={skills.skills} />
      <CardExperience title={language.title} skills={language.skills} />
    </div>
  )
}
