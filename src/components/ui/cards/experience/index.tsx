import { BsFillPatchCheckFill } from 'react-icons/bs'

interface Skill {
  skill: string
  level?: string
}

interface SkillProps {
  title: string
  skills: Skill[]
}

export const CardExperience = ({ title, skills }: SkillProps) => {
  return (
    <div className="rounded-[1.5rem] border border-dark/10 bg-paper p-5 transition-transform hover:-translate-y-1 sm:p-7">
      <h2 className="mb-4 font-display text-xl font-bold capitalize text-dark">{title}</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((item) => (
          <li
            key={item.skill}
            className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white px-3 py-2 text-sm font-medium text-dark">
            <BsFillPatchCheckFill className="shrink-0 text-primary" />
            {item.skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
