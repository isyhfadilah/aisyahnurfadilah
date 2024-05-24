import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa'
import { IoMdDocument } from 'react-icons/io'

export const Sidebar = () => {
  return (
    // perbaiki struktur code
    // belum smooth
    <nav className="fixed ml-2 md:ml-10 rounded-full flex justify-center items-center h-full z-2">
      <div className="shadow-2xl px-1 py-6 rounded-full">
        <ul className="space-y-8">
          <li className="flex flex-col justify-center items-center">
            <a href="#home" className="rounded-full p-2 shadow-xl hover:bg-white/50">
              <FaHome className="text-red-400 text-2xl md:text-3xl" />
            </a>
            <span className="text-xs text-red-400 text-center">Home</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <a href="#about" className="rounded-full p-2 shadow-xl hover:bg-white/50">
              <FaUser className="text-red-400 text-2xl md:text-3xl" />
            </a>
            <span className="text-xs text-red-400 text-center">About Me</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <a href="#home" className="rounded-full p-2 shadow-xl hover:bg-white/50">
              <IoMdDocument className="text-red-400 text-2xl md:text-3xl" />
            </a>
            <span className="text-xs text-red-400 text-center">Resume</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <a href="#home" className="rounded-full p-2 shadow-xl hover:bg-white/50">
              <FaEnvelope className="text-red-400 text-2xl md:text-3xl" />
            </a>
            <span className="text-xs text-red-400 text-center">Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}
