'use client'

import Link from 'next/link'
import { FiArrowUpRight, FiArrowRight, FiCode, FiLayers, FiCheck, FiPenTool } from 'react-icons/fi'
import { SiFigma, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { projects } from '@/data/project'

export const Hero = () => (
  <section id="home" className="reference-hero">
    <div className="hero-grid">
      <div className="hero-copy">
        <p className="availability">
          <span className="signal-bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>{' '}
          Design thoughtfully. Build beautifully.
        </p>
        <h1 className="hero-wordmark">
          aisyah<span>.</span>
        </h1>
        <h2 className="hero-tagline">
          Thoughtful interfaces.
          <br />
          Meaningful experiences.
        </h2>
        <p className="hero-pitch">
          Hi, I’m Aisyah Nur Fadilah. I bring ideas to life through user-centered design and front-end development.
        </p>
        <div className="hero-note">
          <span className="initial-avatar" aria-hidden="true">
            a.
          </span>
          <div>
            <p>“Good design starts with understanding people.”</p>
            <span className="live-status">
              <i /> Open to projects &amp; opportunities
            </span>
          </div>
        </div>
        <div className="hero-actions">
          <Link href="/#portfolio" className="neo-button">
            Explore my work <FiArrowUpRight aria-hidden="true" />
          </Link>
          <Link href="/#about" className="text-button">
            A little about me <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
        <dl className="hero-stats">
          <div>
            <dt>Portfolio projects</dt>
            <dd>{String(projects.length).padStart(2, '0')}</dd>
          </div>
          <div>
            <dt>Design &amp; development</dt>
            <dd>2 disciplines</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>Indonesia</dd>
          </div>
        </dl>
      </div>
      <div className="design-stage" aria-label="An original composition of interface designs, without portraits">
        <div className="stage-orange" />
        <div className="design-window" aria-hidden="true">
          <div className="window-toolbar">
            <span>
              <i />
              <i />
              <i />
            </span>
            <span>ideas → experiences</span>
            <FiLayers />
          </div>
          <div className="window-content">
            <span className="window-label">DESIGNED WITH PURPOSE</span>
            <div className="window-monogram">
              a<span>.</span>
              <span className="monogram-orbit" />
            </div>
            <div className="window-bottom">
              <span>
                A little clarity.
                <br />A lot of possibility.
              </span>
              <span className="window-arrow">
                <FiArrowUpRight />
              </span>
            </div>
          </div>
        </div>
        <Link href="/#portfolio" className="stage-float stage-projects">
          <FiLayers aria-hidden="true" />
          <span className="float-arrow">
            <FiArrowUpRight />
          </span>
          <strong>{String(projects.length).padStart(2, '0')}</strong>
          <span>Portfolio projects</span>
        </Link>
        <div className="stage-bubbles">
          <span>
            <FiPenTool aria-hidden="true" /> Made for real people.
          </span>
          <span>
            <FiCode aria-hidden="true" /> Built with care.
          </span>
          <span className="typing-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>
        <span className="stage-hand hand-left" aria-hidden="true">
          from the first sketch
          <br />
          <span>to the final pixel ↗</span>
        </span>
        <div className="stage-profile">
          <div className="mini-interface" aria-hidden="true">
            <div className="mini-interface-head">
              <span />
              <i />
            </div>
            <div className="mini-interface-art">
              <span />
              <span />
              <span />
            </div>
            <div className="mini-interface-lines">
              <i />
              <i />
            </div>
            <span className="mini-check">
              <FiCheck />
            </span>
          </div>
          <p>Clarity in every detail.</p>
          <span>UI/UX meets front-end.</span>
          <Link href="/#contact">
            Let’s collaborate <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <span className="stage-hand hand-right" aria-hidden="true">
          a little design magic ✧
        </span>
      </div>
    </div>
    <div className="hero-tools">
      <p className="tools-label">
        THE TOOLS
        <br />
        BEHIND THE WORK
      </p>
      <ul aria-label="Design and development tools">
        <li>
          <SiFigma className="tool-figma" aria-hidden="true" /> Figma
        </li>
        <li>
          <SiReact className="tool-react" aria-hidden="true" /> React
        </li>
        <li>
          <SiNextdotjs aria-hidden="true" /> Next.js
        </li>
        <li>
          <SiTypescript className="tool-typescript" aria-hidden="true" /> TypeScript
        </li>
        <li>
          <SiTailwindcss className="tool-tailwind" aria-hidden="true" /> Tailwind CSS
        </li>
      </ul>
      <Link href="/#contact" className="tools-end">
        <span>
          Your next idea.
          <br />
          Let’s make it happen.
        </span>
        <span className="round-button">
          <FiArrowUpRight aria-hidden="true" />
        </span>
      </Link>
    </div>
  </section>
)
