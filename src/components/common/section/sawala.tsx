import Container from '../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import Image from 'next/image'

export const Internship = () => {
  return (
    <section className="py-26 bg-indigo-50">
      <div className="bg-red/15 md:w-sm md:h-sm rounded-full absolute right-0 blur-3xl"></div>

      <Container>
        <GradientText text="Front-end Development" sizes="text-3xl" />
        <p className="text-black/50 text-lg">Internship PT. Sawala Inovasi Indonesia</p>

        <div className="mt-8 md:flex md:space-x-2xl">
          <Image src="/images/front-end.svg" alt="front-end-section" height={500} width={500} />

          <div className="space-y-lg mt-8 md:mt-0">
            <GradientText text="JOBDESK" sizes="text-xl" />
            <ol className="list-disc ml-5 text-black/60">
              <li>analisa rancangan desain project yang akan dibuat</li>
              <li>export assets project</li>
              <li>setup framework dalam git dan github</li>
              <li>develop design project dalam bentuk coding</li>
              <li>mempublikasikan project (hosting)</li>
              <li>mengecek accessibility website</li>
              <li>mengecek fitur dan style yg telah selesai didevelopment</li>
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
