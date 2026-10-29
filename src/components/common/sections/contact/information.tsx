import { HomeContact } from '@/components/ui/cards/contact/home'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export const ContactInfo = () => (
  <section className="reference-section contact-information" data-scroll-reveal id="contact-info">
    <div className="site-container">
      <div className="section-heading">
        <h2>
          Say hello.
          <br />
          <span>Let’s connect.</span>
        </h2>
        <p>Have an idea, a question, or an opportunity? Choose the way that works best for you.</p>
      </div>
      <HomeContact />
    </div>
  </section>
)

export const HomeContactCta = () => (
  <section className="reference-section" data-scroll-reveal id="contact">
    <div className="site-container">
      <div className="contact-banner">
        <div>
          <p className="eyebrow-label">GREAT THINGS START WITH A CONVERSATION</p>
          <h2>
            Your next idea.
            <br />
            Let’s make it <span>happen.</span>
          </h2>
          <p>Have a project or opportunity in mind? I’d love to hear about it.</p>
          <div className="contact-actions">
            <a href="mailto:aisyahnfadilah73@gmail.com" className="neo-button">
              Let’s talk <FiArrowUpRight aria-hidden="true" />
            </a>
            <Link href="https://www.linkedin.com/in/fadilahnur/" target="_blank" rel="noreferrer" className="text-button">
              Connect on LinkedIn <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <span className="contact-asterisk" aria-hidden="true">
          ✳
        </span>
      </div>
    </div>
  </section>
)
