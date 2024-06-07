import { services } from '@/data/service'
import { GradientText } from '../../title/gradient'
import { CardService } from '.'

export const HomeService = () => {
  return (
    <div className="bg-red/8 px-6 md:px-10 py-8 rounded-lg shadow shadow-sm space-y-6 border-l-2 border-l-orange border-b-2 border-b-orange">
      <div className="flex flex-col border-l-2 border-l-orange pl-6">
        <GradientText text="What Actually I Do" sizes="text-xl" />
        <GradientText text="My Service" sizes="text-2xl" />
      </div>

      {services.map((item, index) => (
        <CardService key={index} image={item.image} title={item.title} detail={item.detail} />
      ))}
    </div>
  )
}
