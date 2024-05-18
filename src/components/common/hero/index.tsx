import Button from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="">
      <div className="bg-red/15 w-xl h-md rounded-full absolute z-1 -top-10 -left-30 blur-3xl"></div>
      <div className="bg-red/15 w-sm h-sm rounded-full absolute z-1 -bottom-10 right-0 blur-3xl"></div>
      <section className="flex justify-center items-center h-screen">
        <div className="flex flex-wrap justify-center items-center w-xl gap-4">
          <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-red-400 to-orange-500 inline-block text-transparent bg-clip-text">
            Aisyah Nur Fadilah
          </h1>
          <Button text="selengkapnya" rounded="full" />
        </div>
      </section>
    </section>
  )
}
