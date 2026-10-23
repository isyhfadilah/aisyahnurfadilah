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
  const column1 = skills.slice(0, 3)
  const column2 = skills.slice(3)

  return (
    <div className="rounded-[1.5rem] border border-dark/10 bg-paper p-5 transition-transform hover:-translate-y-1 sm:p-7">
      <h2 className="mb-4 font-display text-xl font-bold capitalize text-dark">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        <ul className="space-y-2">
          {column1.map((item, index) => (
            <li key={index}>
              <div className="flex items-center gap-1">
                <BsFillPatchCheckFill className="text-primary" />
                <p>{item.skill}</p>
              </div>
              <p className="text-sm text-dark-gray">{item.level}</p>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {column2.map((item, index) => (
            <li key={index}>
              <div className="flex items-center gap-1">
                <BsFillPatchCheckFill className="text-primary" />
                <p className="text-dark">{item.skill}</p>
              </div>
              <p className="text-sm text-dark-gray">{item.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
