import Container from '../layouts/Container'

export const About = () => {
  return (
    <section className="py-26">
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
    </section>
  )
}
