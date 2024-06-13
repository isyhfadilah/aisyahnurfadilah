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
      <Image src={image} alt={title} height={80} width={80} className="rounded-full" />
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold group-hover:text-primary">{title}</h1>
        <p className="text-sm text-black/50">{detail}</p>
      </div>
    </div>
  )
}
