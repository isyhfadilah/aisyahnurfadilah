'use client'

import { useState } from 'react'
import {
  FiArrowLeft,
  FiArrowRight,
  FiGitBranch,
  FiLayers,
  FiLayout,
  FiMousePointer,
  FiPenTool,
  FiRefreshCw,
  FiSearch,
  FiTarget
} from 'react-icons/fi'
import '@/shared/styles/workflow.css'

const steps = [
  {
    id: 'understand',
    title: 'Understand the problem',
    label: 'RESEARCH',
    icon: FiSearch,
    output: 'Problem notes',
    description:
      'I start by asking who will use the product and what they need to do. That gives the design a clear starting point.'
  },
  {
    id: 'define',
    title: 'Decide what matters',
    label: 'DEFINE',
    icon: FiTarget,
    output: 'Design priorities',
    description: 'I sort what I’ve learned into the problems worth solving, then decide what the design needs to cover.'
  },
  {
    id: 'flow',
    title: 'Map the user flow',
    label: 'USER FLOW',
    icon: FiGitBranch,
    output: 'User flows',
    description:
      'I map the steps someone takes to finish a task, including where they might get stuck or need another way forward.'
  },
  {
    id: 'wireframe',
    title: 'Sketch the structure',
    label: 'WIREFRAME',
    icon: FiLayout,
    output: 'Wireframes',
    description: 'I use wireframes to try layouts and content order before spending time on the visual details.'
  },
  {
    id: 'design',
    title: 'Design the screens',
    label: 'UI DESIGN',
    icon: FiPenTool,
    output: 'Interface screens',
    description:
      'I work on type, spacing, and components so each screen is readable and feels like part of the same product.'
  },
  {
    id: 'prototype',
    title: 'Connect the prototype',
    label: 'PROTOTYPE',
    icon: FiMousePointer,
    output: 'Clickable prototype',
    description: 'I link the screens in Figma to walk through the main tasks and spot gaps in the flow.'
  },
  {
    id: 'refine',
    title: 'Review and refine',
    label: 'REFINE',
    icon: FiRefreshCw,
    output: 'Design revisions',
    description: 'I review the flow and interactions, then revise the parts that feel unclear or take too many steps.'
  },
  {
    id: 'handoff',
    title: 'Prepare for handoff',
    label: 'HANDOFF',
    icon: FiLayers,
    output: 'Screens & interaction notes',
    description:
      'I organize the screens, components, and interaction notes for development. My front-end background helps me explain how the design should behave.'
  }
]

export const AboutDesk = () => {
  const [active, setActive] = useState(0)
  const current = steps[active]
  const Icon = current.icon

  const showStep = (index: number) => {
    setActive((index + steps.length) % steps.length)
  }

  return (
    <section id="about" className="reference-section workflow-section" data-scroll-reveal aria-labelledby="workflow-heading">
      <div className="site-container">
        <div className="section-heading">
          <h2 id="workflow-heading">
            How I work.
            <br />
            <span>From questions to screens.</span>
          </h2>
          <p>Here’s how I work through a UI/UX project. Choose a step to see what happens along the way.</p>
        </div>
        <div className="workflow-strip-header">
          <p>8 STEPS / UI/UX DESIGN</p>
        </div>
        <div className="workflow-row" role="group" aria-label="Choose a UI/UX workflow step">
          <ol className="workflow-track">
            {[...steps, ...steps].map((step, index) => {
              const stepIndex = index % steps.length
              const duplicate = index >= steps.length
              const StepIcon = step.icon
              return (
                <li
                  key={index}
                  className={duplicate ? 'workflow-clone' : undefined}
                  aria-hidden={duplicate ? true : undefined}>
                  <button
                    type="button"
                    className={'workflow-step workflow-tone-' + stepIndex}
                    data-workflow-step={stepIndex}
                    aria-hidden={duplicate ? true : undefined}
                    tabIndex={duplicate ? -1 : 0}
                    aria-pressed={active === stepIndex}
                    aria-controls="workflow-detail"
                    onClick={() => showStep(stepIndex)}
                    onFocus={(event) => {
                      if (event.currentTarget.matches(':focus-visible')) {
                        const button = event.currentTarget
                        window.requestAnimationFrame(() =>
                          button.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' })
                        )
                      }
                    }}>
                    <span className="workflow-art">
                      <StepIcon aria-hidden="true" />
                      <small>{step.label}</small>
                      <span className="workflow-step-number">{String(stepIndex + 1).padStart(2, '0')}</span>
                    </span>
                    <span className="workflow-step-name">{step.title}</span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
        <article id="workflow-detail" className="workflow-detail" aria-labelledby="workflow-step-title">
          <span className="workflow-watermark" aria-hidden="true">
            {String(active + 1).padStart(2, '0')}
          </span>
          <div className="workflow-description" aria-live="polite" aria-atomic="true">
            <div key={current.id} className="workflow-copy">
              <p className="eyebrow-label">
                STEP {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
              </p>
              <h3 id="workflow-step-title">{current.title}</h3>
              <p>{current.description}</p>
            </div>
          </div>
          <div className="workflow-detail-footer">
            <div className="workflow-output">
              <span className={'workflow-mini workflow-tone-' + active}>
                <Icon aria-hidden="true" />
              </span>
              <span className="signature">aisyah.</span>
              <span className="workflow-output-tag">{current.output}</span>
            </div>
            <div className="workflow-navigation">
              <button type="button" onClick={() => showStep(active - 1)} aria-label="Previous workflow step">
                <FiArrowLeft aria-hidden="true" />
              </button>
              <span aria-label={'Step ' + (active + 1) + ' of ' + steps.length}>
                {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
              </span>
              <button type="button" onClick={() => showStep(active + 1)} aria-label="Next workflow step">
                <FiArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
