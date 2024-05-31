import Button from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="bg-indigo-50" id="home">
      <div className="bg-red/15 w-sm h-sm md:w-xl md:h-md rounded-full absolute z-1 -top-10 -left-30 blur-3xl"></div>
      <div className="bg-red/15 md:w-sm md:h-sm rounded-full absolute z-1 bottom-0 right-0 blur-3xl"></div>
      <section className="flex justify-center items-center h-screen">
        <div className="flex flex-wrap justify-center items-center w-md lg:w-2xl gap-4">
          {/* buat effect typing */}
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-red-400 to-orange-500 inline-block text-transparent bg-clip-text">
            Hello I&apos;m Aisyah Nur Fadilah
          </h1>
          <Button text="Hire Me" rounded="full" />
        </div>
      </section>
    </section>
  )
}
