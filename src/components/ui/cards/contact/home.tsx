import { FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

import { CardContact } from '.'

const contact = [
  {
    title: 'phone',
    detail: '(+62)853434343',
    icon: <FaPhoneAlt className="text-white text-3xl" />
  },
  {
    title: 'email',
    detail: 'aisyahnfadilah73@gmail.com',
    icon: <SiGmail className="text-white text-3xl" />
  },
  {
    title: 'linkedin',
    detail: 'Aisyah Nur Fadilah',
    icon: <FaLinkedinIn className="text-white text-3xl" />
  }
]

export const HomeContact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-black/50 mt-6 space-y-4 md:space-y-0">
      {contact.map((item, index) => (
        <CardContact key={index} title={item.title} detail={item.detail} icon={item.icon} />
      ))}
    </div>
  )
}
