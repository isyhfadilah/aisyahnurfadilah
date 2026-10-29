'use client'

import { Input, TextArea } from '@/components/ui/forms'
import { FiArrowUpRight } from 'react-icons/fi'

export const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:aisyahnfadilah73@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="reference-section" data-scroll-reveal id="contact">
      <div className="site-container contact-form-layout">
        <div className="contact-form-copy">
          <p className="eyebrow-label">LET’S START A CONVERSATION</p>
          <h1>
            Good things
            <br />
            start with
            <br />
            <span>a hello.</span>
          </h1>
          <p>Have a project, a question, or an opportunity in mind? I’d love to hear what you’re working on.</p>
          <span className="live-status">
            <i /> Open to projects &amp; opportunities
          </span>
          <a href="mailto:aisyahnfadilah73@gmail.com" className="text-button">
            aisyahnfadilah73@gmail.com <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <form onSubmit={handleSubmit} className="contact-form space-y-5 bg-white p-6 sm:p-8">
          <Input
            id="contact-name"
            name="name"
            label="Your name"
            type="text"
            autoComplete="name"
            placeholder="What should I call you?"
            required
            variant="default"
            className="border-dark/15 bg-white text-dark focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <Input
            id="contact-email"
            name="email"
            label="Email address"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            variant="default"
            className="border-dark/15 bg-white text-dark focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <TextArea
            id="contact-message"
            name="message"
            label="What do you have in mind?"
            placeholder="Tell me a little about your idea…"
            required
            variant="default"
            className="min-h-40 border-dark/15 bg-white text-dark focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <button type="submit" className="neo-button w-full">
            Let’s talk <FiArrowUpRight aria-hidden="true" />
          </button>
          <p className="text-center text-xs leading-5 text-dark-gray">
            Your email app will open with the message ready to send.
          </p>
        </form>
      </div>
    </section>
  )
}
