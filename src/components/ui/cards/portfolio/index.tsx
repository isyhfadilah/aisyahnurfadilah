import Link from 'next/link'
import Image from 'next/image'

export interface CardProps {
  image: string
  title: string
  detail?: string
  link: string
}

export const CardPortfolio = ({ image, title, detail, link }: CardProps) => {
  return (
    <Link href={link} className="group relative overflow-hidden rounded-lg border-b-8 border-secondary">
      <Image
        src={image}
        alt={title}
        height={1000}
        width={1000}
        className="w-100 h-50 md:h-80 bg-cover bg-center bg-no-repeat relative  transition-transform duration-300 group-hover:scale-110 object-cover"
      />
      <div className="text-white mt-auto h-40 absolute bottom-0 right-0 left-0 p-4 bg-gradient-to-b from-transparent to-primary">
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h1 className="md:text-xl">{title}</h1>
          <p>{detail}</p>
        </div>
      </div>
    </Link>
  )
}
