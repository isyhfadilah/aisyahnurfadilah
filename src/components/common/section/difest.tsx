import Container from '../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import Image from 'next/image'

export const AchievementDifest = () => {
  return (
    <section className="my-26">
      <Container>
        <GradientText text="Juara 1 Desain Website" sizes="text-3xl" />
        <p className="text-black/50 text-lg">Digital Festival Nasional 2023</p>

        <Image src="/images/difest.svg" alt="difest-2023" height={1000} width={1000} className="mt-8" />
      </Container>
    </section>
  )
}
