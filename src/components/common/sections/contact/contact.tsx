import Image from 'next/image'
import Container from '../../layouts/Container'
import { GradientText } from '@/components/ui/title/gradient'
import { Input, TextArea } from '@/components/ui/forms'
import Button from '@/components/ui/button'

export const ContactForm = () => {
  return (
    <section className="py-16">
      <div className="flex justify-center mb-6">
        <GradientText text="CONTACT" sizes="text-3xl" />
      </div>
      <Container className="flex justify-between items-center gap-6">
        <Image src="/images/bust.png" alt="contact me" height={500} width={500} className="hidden md:block" />
        <form action="" className="w-full space-y-4">
          <Input label="email" />
          <Input label="email" />
          <TextArea label="message" />
          <Button text="submit" className="w-full" rounded="full" />
        </form>
      </Container>
    </section>
  )
}
