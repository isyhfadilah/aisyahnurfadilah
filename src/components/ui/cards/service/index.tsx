import Image from 'next/image'

interface CardProps {
  image: string
  title: string
  detail: string
}

export const CardService = ({ image, title, detail }: CardProps) => {
  return (
    // ganti elemen yg sesuai
    <div className="md:flex items-center space-x-2 group">
      <Image src={image} alt={title} height={100} width={100} className="rounded-full w-18 h-18" />
      <div className="flex flex-col">
        <h1 className="text-lg text-dark font-semibold group-hover:text-primary">{title}</h1>
        <p className="text-sm text-dark-gray">{detail}</p>
      </div>
    </div>
  )
}
