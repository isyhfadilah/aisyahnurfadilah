import Container from '../layouts/Container'
import { CardExperience } from '@/components/ui/cards/experience'

export const About = () => {
  return (
    <section className="pt-26 shadow-2xl shadow-black" id="about">
      <Container className="grid gap-10 md:grid-cols-3 place-content-between justify-between items-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-500 inline-block text-transparent bg-clip-text">
          I wanna be a progressional person
        </h1>
        <div className="md:col-span-2">
          <p className="text-justify">
            Posisiku sekarang sebagai lulusan SMK Negeri 2 Sumedang Jurusan Rekayasa Perangkat Lunak. Aktif di dalam
            ekstrakurikuler sekolah sebagai Wakil Ketua ekstrakurikuler Gridas Coding. Memiliki pengalaman dan basic yang
            kuat dalam Perangkat Lunak, terutama di bidang Front-End. Memiliki minat berkarir sebagai Front-End Development.
          </p>
        </div>
      </Container>

      {/* alihkan ke section baru dan perbaiki struktur code supaya best practice */}
      <Container className="grid md:grid-cols-2 gap-8 mt-10">
        <CardExperience />
        <CardExperience />
      </Container>
    </section>
  )
}
