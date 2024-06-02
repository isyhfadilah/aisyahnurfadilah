import Container from '../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import Image from 'next/image'

export const AchievementItdri = () => {
  return (
    <section className="my-26">
      <Container>
        <GradientText text="Juara 2 Desain Website" sizes="text-3xl" />
        <p className="text-black/50 text-lg">SMK Pusat Keunggulan Telkom</p>

        <div className="flex justify-center items-center">
          <Image src="/images/itdri.svg" alt="itdri2022" height={800} width={800} className="mt-8" />
        </div>
      </Container>
    </section>
  )
}
