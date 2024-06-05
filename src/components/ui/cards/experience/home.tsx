import { CardExperience } from '.'
import { language, skills } from '@/data/skills'

export const HomeExperience = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <CardExperience title={skills.title} skills={skills.skills} />
      <CardExperience title={language.title} skills={language.skills} />
    </div>
  )
}
