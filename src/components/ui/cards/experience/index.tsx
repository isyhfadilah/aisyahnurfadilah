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
    <div className="border-l-2 border-l-red border-b-2 border-b-orange rounded-lg space-y-4 py-6 px-5 md:px-10 bg-red/5">
      <h1 className="font-semibold capitalize text-lg text-red">{title}</h1>
      <div className="flex space-x-5 md:space-x-10">
        <ul className="space-y-2">
          {column1.map((item, index) => (
            <li key={index}>
              <div className="flex items-center gap-1">
                <BsFillPatchCheckFill className="text-red" />
                <p>{item.skill}</p>
              </div>
              <p className="text-sm text-black/50">{item.level}</p>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {column2.map((item, index) => (
            <li key={index}>
              <div className="flex items-center gap-1">
                <BsFillPatchCheckFill className="text-red" />
                <p>{item.skill}</p>
              </div>
              <p className="text-sm text-black/50">{item.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
