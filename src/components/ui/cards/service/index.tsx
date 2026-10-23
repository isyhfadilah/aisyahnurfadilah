import Image from 'next/image'

interface CardProps {
  image: string
  title: string
  detail: string
}

export const CardService = ({ image, title, detail }: CardProps) => {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-dark/10 bg-paper p-5 transition-transform hover:-translate-y-1 sm:flex-row sm:items-center sm:p-6">
      <Image
        src={image}
        alt={title}
        height={100}
        width={100}
        className="size-16 rounded-xl bg-secondary object-contain p-2 transition duration-300 group-hover:-rotate-3"
      />
      <div className="flex flex-col">
        <h2 className="font-display text-lg font-bold leading-tight text-dark transition-colors duration-300 group-hover:text-primary">
          {title}
        </h2>
        <p className="mt-1 text-sm leading-6 text-dark-gray">{detail}</p>
      </div>
    </div>
  )
}
