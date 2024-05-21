import Container from '../layouts/Container'
import { BsFillPatchCheckFill } from 'react-icons/bs'

export const About = () => {
  return (
    <section className="py-26 shadow-2xl shadow-black">
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

      {/* masih statis, nanti rubah ke dinamis di component baru */}
      <Container className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="border border-1 border-red rounded-lg space-y-4 py-6 px-10">
          <h1 className="font-semibold capitalize text-lg text-red">explore my experience</h1>
          <ul className="flex space-x-10">
            <div className="space-y-2">
              <li>
                <div className="flex items-center gap-1">
                  <BsFillPatchCheckFill className="text-red" />
                  <p>HTML 5 </p>
                </div>
                <p className="text-sm text-black/50">experienced</p>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <BsFillPatchCheckFill className="text-red" />
                  <p>CSS</p>
                </div>
                <p className="text-sm text-black/50">experienced</p>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <BsFillPatchCheckFill className="text-red" />
                  <p>TypeScript</p>
                </div>
                <p className="text-sm text-black/50">experienced</p>
              </li>
            </div>
            <div className="space-y-2">
              <li>
                <div className="flex items-center gap-1">
                  <BsFillPatchCheckFill className="text-red" />
                  <p>PHP</p>
                </div>
                <p className="text-sm text-black/50">experienced</p>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <BsFillPatchCheckFill className="text-red" />
                  <p>JavaScript</p>
                </div>
                <p className="text-sm text-black/50">basic</p>
              </li>
            </div>
          </ul>
        </div>

        <div className="border border-1 border-red rounded-lg space-y-4 py-6 px-10">
          <h1 className="font-semibold capitalize text-lg text-red">explore my experience</h1>
          <ul className="flex space-x-10">
            <div className="space-y-2">
              <li>
                <div className="flex items-center gap-1">
                  <BsFillPatchCheckFill className="text-red" />
                  <p>HTML 5 </p>
                </div>
                <p className="text-sm text-black/50">experienced</p>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <BsFillPatchCheckFill className="text-red" />
                  <p>CSS</p>
                </div>
                <p className="text-sm text-black/50">experienced</p>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <BsFillPatchCheckFill className="text-red" />
                  <p>TypeScript</p>
                </div>
                <p className="text-sm text-black/50">experienced</p>
              </li>
            </div>
            <div className="space-y-2">
              <li>
                <div className="flex items-center gap-1">
                  <BsFillPatchCheckFill className="text-red" />
                  <p>PHP</p>
                </div>
                <p className="text-sm text-black/50">experienced</p>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <BsFillPatchCheckFill className="text-red" />
                  <p>JavaScript</p>
                </div>
                <p className="text-sm text-black/50">basic</p>
              </li>
            </div>
          </ul>
        </div>
      </Container>
    </section>
  )
}
