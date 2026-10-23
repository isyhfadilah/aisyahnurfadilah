import { FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

import { CardContact } from '.'

const contact = [
  {
    title: 'Phone',
    detail: '(+62)82123937972',
    href: 'tel:+6282123937972',
    icon: <FaPhoneAlt className="text-white text-3xl" />
  },
  {
    title: 'Email',
    detail: 'aisyahnfadilah73@gmail.com',
    href: 'mailto:aisyahnfadilah73@gmail.com',
    icon: <SiGmail className="text-white text-3xl" />
  },
  {
    title: 'LinkedIn',
    detail: 'Aisyah Nur Fadilah',
    href: 'https://www.linkedin.com/in/fadilahnur/',
    icon: <FaLinkedinIn className="text-white text-3xl" />
  }
]

export const HomeContact = () => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      {contact.map((item, index) => (
        <CardContact key={index} title={item.title} detail={item.detail} href={item.href} icon={item.icon} />
      ))}
    </div>
  )
}
