import Image from 'next/image'

const SplashScreen: React.FC = () => {
  return (
    // over simple
    <div className="fixed inset-0 flex items-center justify-center text-red md:text-4xl z-50">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-26 w-26 border-t-4 border-red-500"></div>
        </div>
        <Image src="/icons/logo.svg" alt="aisyah nur fadilah" height={100} width={100} />
      </div>
    </div>
  )
}

export default SplashScreen
