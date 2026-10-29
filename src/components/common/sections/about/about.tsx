'use client'

import { useState } from 'react'
import { FiArrowLeft, FiArrowRight, FiCode, FiCompass, FiGrid, FiHeart } from 'react-icons/fi'

const principles = [
  {
    title: 'People come first',
    label: 'UNDERSTAND',
    icon: FiHeart,
    quote:
      'I start with the people behind the screen. Understanding their needs helps me turn the right problems into useful, intuitive experiences.',
    tag: 'User-centered design'
  },
  {
    title: 'Clarity in every detail',
    label: 'SIMPLIFY',
    icon: FiCompass,
    quote:
      'I connect user needs with clear interfaces. From the first user flow to the final interaction, every decision should make the experience easier to use.',
    tag: 'UI/UX design'
  },
  {
    title: 'A consistent experience',
    label: 'CONNECT',
    icon: FiGrid,
    quote:
      'Thoughtful components, typography, and visual patterns help a product feel familiar and coherent from one screen to the next.',
    tag: 'Design systems'
  },
  {
    title: 'Built with care',
    label: 'CREATE',
    icon: FiCode,
    quote:
      'My front-end background helps me bridge the gap between a design and a working product, with responsive interfaces that feel good to use.',
    tag: 'Front-end development'
  }
]

export const AboutDesk = () => {
  const [active, setActive] = useState(0)
  const current = principles[active]
  const Icon = current.icon
  return (
    <section id="about" className="reference-section" data-scroll-reveal>
      <div className="site-container">
        <div className="section-heading">
          <h2>
            A little about me.
            <br />
            <span>A lot about the details.</span>
          </h2>
          <p>
            I’m Aisyah, an Informatics student at SATU University based in West Java, Indonesia. Here’s what guides my work.
          </p>
        </div>
        <div className="principle-tabs" role="group" aria-label="My design principles">
          {principles.map((principle, index) => {
            const TabIcon = principle.icon
            return (
              <button
                key={principle.title}
                type="button"
                className={'principle-tab principle-' + index}
                onClick={() => setActive(index)}
                aria-pressed={active === index}>
                <span className="principle-icon">
                  <TabIcon aria-hidden="true" />
                  <small>{principle.label}</small>
                </span>
                <span>{principle.title}</span>
              </button>
            )
          })}
        </div>
        <div className="principle-card" aria-live="polite" aria-atomic="true">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <p className="eyebrow-label">{current.title}</p>
          <p className="principle-quote">{current.quote}</p>
          <div className="principle-meta">
            <div>
              <span className="principle-mini">
                <Icon aria-hidden="true" />
              </span>
              <span className="signature">aisyah.</span>
              <span className="principle-tag">{current.tag}</span>
            </div>
            <div className="principle-navigation">
              <button
                type="button"
                onClick={() => setActive((active + principles.length - 1) % principles.length)}
                aria-label="Previous principle">
                <FiArrowLeft />
              </button>
              <button type="button" onClick={() => setActive((active + 1) % principles.length)} aria-label="Next principle">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
