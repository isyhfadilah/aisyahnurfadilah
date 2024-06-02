// import { title } from 'process'
import { BsFillPatchCheckFill } from 'react-icons/bs'

// // buat menjadi dinamis
// interface SkillProps {
//   title: string
//   skill?: string
//   level?: string
// }

const experiences = [
  { skill: 'HTML 5', level: 'experienced' },
  { skill: 'CSS', level: 'experienced' },
  { skill: 'TypeScript', level: 'experienced' },
  { skill: 'PHP', level: 'experienced' },
  { skill: 'JavaScript', level: 'basic' }
]

// pelajari slice ya
const column1 = experiences.slice(0, 3)
const column2 = experiences.slice(3)

export const CardExperience = () => {
  return (
    <div className="border-l-2 border-l-red border-b-2 border-b-orange rounded-lg space-y-4 py-6 px-10 bg-red/5">
      <h1 className="font-semibold capitalize text-lg text-red">explore my skills</h1>
      <div className="flex space-x-10">
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
