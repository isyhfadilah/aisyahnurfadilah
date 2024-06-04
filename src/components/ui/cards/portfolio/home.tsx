import { CardPortfolio } from '.'
import { projects } from '@/data/project'

export const HomePortfolio = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center place-content-center gap-6 py-10">
      {projects.map((item, index) => (
        <CardPortfolio key={index} image={item.image} title={item.title} detail={item.detail} link={item.link} />
      ))}
    </div>
  )
}
