import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa'
import { IoMdDocument } from 'react-icons/io'

export const Sidebar = () => {
  return (
    <nav className="fixed shadow-2xl px-1 h-1/2 ml-2 md:ml-10 my-30 rounded-full flex justify-center items-center">
      <ul className="space-y-8">
        <li className="rounded-full p-2 shadow-xl">
          <FaHome className="text-red-400 text-2xl md:text-3xl" />
        </li>
        <li className="rounded-full p-2 shadow-xl">
          <FaUser className="text-red-400 text-2xl md:text-3xl" />
        </li>
        <li className="rounded-full p-2 shadow-xl">
          <IoMdDocument className="text-red-400 text-2xl md:text-3xl" />
        </li>
        <li className="rounded-full p-2 shadow-xl">
          <FaEnvelope className="text-red-400 text-2xl md:text-3xl" />
        </li>
      </ul>
    </nav>
  )
}
