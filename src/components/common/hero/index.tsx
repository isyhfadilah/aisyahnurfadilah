'use client'

import Link from 'next/link'
import {
  FiArrowUpRight,
  FiArrowRight,
  FiCode,
  FiLayers,
  FiCheck,
  FiPenTool,
  FiGitBranch,
  FiLayout,
  FiMousePointer
} from 'react-icons/fi'
import { SiFigma } from 'react-icons/si'
import { projects } from '@/data/project'
import { useProjectExplorer } from '@/components/common/project-explorer'

export const Hero = () => {
  const { openCategory } = useProjectExplorer()
  return (
    <section id="home" className="reference-hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="availability">
            <span className="signal-bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>{' '}
            UI/UX Designer
          </p>
          <h1 className="hero-wordmark" aria-label="Aisyah Nur Fadilah — UI/UX Designer">
            aisyah<span>.</span>
          </h1>
          <h2 className="hero-tagline">
            I design apps that
            <br />
            make sense to people.
          </h2>
          <p className="hero-pitch">
            I’m Aisyah Nur Fadilah, a UI/UX designer. I turn user needs into flows, wireframes, and clickable prototypes.
          </p>
          <div className="hero-note">
            <span className="initial-avatar" aria-hidden="true">
              a.
            </span>
            <div>
              <p>My front-end background helps me design with development in mind.</p>
              <span className="live-status">
                <i /> Open to UI/UX projects
              </span>
            </div>
          </div>
          <div className="hero-actions">
            <Link
              href="/#uiux"
              className="neo-button"
              aria-haspopup="dialog"
              onClick={(event) => {
                if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                  event.preventDefault()
                  openCategory('design')
                }
              }}>
              View UI/UX work <FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/#about" className="text-button">
              More about me <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>UI/UX projects</dt>
              <dd>{String(projects.filter((project) => project.type === 'design').length).padStart(2, '0')}</dd>
            </div>
            <div>
              <dt>Additional experience</dt>
              <dd>Front-end</dd>
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
              <span>flows → screens</span>
              <FiLayers />
            </div>
            <div className="window-content">
              <span className="window-label">UI/UX DESIGN</span>
              <div className="window-monogram">
                a<span>.</span>
                <span className="monogram-orbit" />
              </div>
              <div className="window-bottom">
                <span>
                  From a user flow
                  <br />
                  to a clickable prototype.
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
            <span>All projects</span>
          </Link>
          <div className="stage-bubbles">
            <span>
              <FiPenTool aria-hidden="true" /> User flows &amp; wireframes
            </span>
            <span>
              <FiMousePointer aria-hidden="true" /> Clickable prototypes
            </span>
            <span className="typing-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>
          <span className="stage-hand hand-left" aria-hidden="true">
            start with the problem
            <br />
            <span>then sketch it out ↗</span>
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
            <p>A flow you can follow.</p>
            <span>Flows. Screens. Prototypes.</span>
            <Link href="/#contact">
              Let’s talk design <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <span className="stage-hand hand-right" aria-hidden="true">
            what happens next? ↗
          </span>
        </div>
      </div>
      <div className="hero-tools">
        <p className="tools-label">
          MY DESIGN
          <br />
          TOOLKIT
        </p>
        <ul aria-label="UI/UX design skills and supporting front-end experience">
          <li>
            <SiFigma className="tool-figma" aria-hidden="true" /> Figma
          </li>
          <li>
            <FiGitBranch aria-hidden="true" /> User flows
          </li>
          <li>
            <FiLayout aria-hidden="true" /> Wireframes
          </li>
          <li>
            <FiMousePointer aria-hidden="true" /> Prototypes
          </li>
          <li>
            <FiCode aria-hidden="true" /> Front-end experience
          </li>
        </ul>
        <Link href="/#contact" className="tools-end">
          <span>
            Have a design in mind?
            <br />
            Let’s talk.
          </span>
          <span className="round-button">
            <FiArrowUpRight aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  )
}
