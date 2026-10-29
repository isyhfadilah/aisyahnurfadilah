'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ProjectMockup } from '@/components/ui/project-mockup'
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiGrid,
  FiMaximize2,
  FiMinimize2,
  FiPenTool,
  FiSearch,
  FiX
} from 'react-icons/fi'
import {
  CatalogProject,
  ProjectCategoryId,
  findProject,
  projectCategories,
  projectsInCategory
} from '@/data/project-catalog'

const ExplorerContext = createContext<{ openCategory: (id: ProjectCategoryId) => void } | null>(null)

export const useProjectExplorer = () => {
  const context = useContext(ExplorerContext)
  if (!context) throw new Error('Project explorer must be inside ProjectExplorerProvider')
  return context
}

export const ProjectPreview = ({ project, full = false }: { project: CatalogProject; full?: boolean }) =>
  project.image ? (
    <ProjectMockup image={project.image} title={project.title} type={project.category} device={project.mockup} full={full} />
  ) : (
    <div className={'concept-brief concept-' + project.slug}>
      <span className="concept-eyebrow">CONCEPT BRIEF / {project.year}</span>
      <strong>
        {project.title}
        <span>.</span>
      </strong>
      <p>{project.summary}</p>
      <div className="concept-focus">
        {project.focus.map((item, index) => (
          <span key={item}>
            <i>{String(index + 1).padStart(2, '0')}</i>
            {item}
          </span>
        ))}
      </div>
      <span className="concept-footnote">UI/UX DESIGN EXPLORATION</span>
    </div>
  )

const ProcessIcons = [FiSearch, FiGrid, FiPenTool, FiCheck]

const ProjectDetails = ({ project }: { project: CatalogProject }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <div className={'project-detail-preview' + (expanded ? ' is-expanded' : '')}>
        <ProjectPreview project={project} full />
        {project.image && (
          <button
            type="button"
            className="preview-size-toggle"
            onClick={() => setExpanded(!expanded)}
            aria-pressed={expanded}>
            {expanded ? <FiMinimize2 aria-hidden="true" /> : <FiMaximize2 aria-hidden="true" />}
            {expanded ? 'Fit preview' : 'Enlarge preview'}
          </button>
        )}
      </div>
      <div className="project-detail-body">
        <div className="project-detail-intro">
          <p className="eyebrow-label">{project.domain}</p>
          <h3>About the project.</h3>
          <p>{project.context}</p>
          <dl className="project-facts">
            <div>
              <dt>Discipline</dt>
              <dd>{project.category === 'design' ? 'UI/UX Design' : 'Front-End Development'}</dd>
            </div>
            <div>
              <dt>Presentation</dt>
              <dd>{project.category === 'design' ? 'Design concept' : 'Website project'}</dd>
            </div>
            {project.year && (
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
            )}
          </dl>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="neo-button">
              {project.action ?? 'Visit website'}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
        <div className="project-detail-notes">
          <h3>Project focus.</h3>
          <ul className="collection-tags">
            {project.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>A closer look.</h3>
          <ul className="detail-note-list">
            {project.notes.map((note) => (
              <li key={note}>
                <FiCheck aria-hidden="true" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export const ProjectExplorerProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState('')
  const categoryDialog = useRef<HTMLDialogElement>(null)
  const projectDialog = useRef<HTMLDialogElement>(null)
  const categoryTitle = useRef<HTMLHeadingElement>(null)
  const projectTitle = useRef<HTMLHeadingElement>(null)
  const activeProject = activeHash.startsWith('project-') ? findProject(activeHash.slice(8)) : undefined
  const category = projectCategories.find((item) => item.hash === activeHash || item.id === activeProject?.category)
  const collection = category ? projectsInCategory(category.id) : []
  const projectIndex = collection.findIndex((item) => item.slug === activeProject?.slug)
  const hasCategory = Boolean(category)

  useEffect(() => {
    const sync = () => setActiveHash(window.location.hash.slice(1))
    sync()
    window.addEventListener('hashchange', sync)
    window.addEventListener('popstate', sync)
    return () => {
      window.removeEventListener('hashchange', sync)
      window.removeEventListener('popstate', sync)
    }
  }, [pathname])

  const navigate = useCallback((hash: string, replace = false, kind?: string) => {
    const state = { ...window.history.state, portfolioExplorer: kind ?? null }
    window.history[replace ? 'replaceState' : 'pushState'](
      state,
      '',
      window.location.pathname + window.location.search + '#' + hash
    )
    setActiveHash(hash)
  }, [])

  const openCategory = useCallback(
    (id: ProjectCategoryId) => {
      const item = projectCategories.find((item) => item.id === id)
      if (item) navigate(item.hash, false, 'category')
    },
    [navigate]
  )

  const closeCategory = () => {
    if (window.history.state?.portfolioExplorer === 'category') window.history.back()
    else navigate('services', true)
  }

  const closeProject = () => {
    if (!category) return
    if (window.history.state?.portfolioExplorer === 'project') window.history.back()
    else navigate(category.hash, true)
  }

  const moveProject = (direction: number) => {
    const next = collection[(projectIndex + direction + collection.length) % collection.length]
    if (next) navigate('project-' + next.slug, true, window.history.state?.portfolioExplorer ?? undefined)
  }

  useEffect(() => {
    const dialog = categoryDialog.current
    if (!dialog) return
    if (hasCategory) {
      if (!dialog.open) {
        dialog.showModal()
        dialog.scrollTop = 0
        categoryTitle.current?.focus({ preventScroll: true })
      }
    } else {
      projectDialog.current?.close()
      dialog.close()
    }
  }, [hasCategory, category?.id])

  useEffect(() => {
    const dialog = projectDialog.current
    if (!dialog) return
    if (activeProject) {
      if (!dialog.open) dialog.showModal()
      dialog.scrollTop = 0
      projectTitle.current?.focus({ preventScroll: true })
    } else dialog.close()
  }, [activeProject?.slug, activeProject])

  useEffect(() => {
    if (!hasCategory) return
    const previous = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = previous
    }
  }, [hasCategory])

  return (
    <ExplorerContext.Provider value={{ openCategory }}>
      {children}
      <dialog
        ref={categoryDialog}
        className="collection-dialog"
        aria-labelledby="collection-title"
        onCancel={(event) => {
          event.preventDefault()
          closeCategory()
        }}>
        {category && (
          <>
            <header className="collection-topbar">
              <button type="button" className="collection-back" onClick={closeCategory}>
                <FiArrowLeft aria-hidden="true" />
                Back
              </button>
              <span className="collection-signature">
                aisyah<span>.</span>
              </span>
              <Link href="/#contact" className="collection-contact" onClick={() => setActiveHash('')}>
                Let’s talk <FiArrowUpRight aria-hidden="true" />
              </Link>
            </header>
            <div className="collection-wrap">
              <div className="collection-hero">
                <div>
                  <p className="eyebrow-label">
                    {category.title} / {collection.length} projects
                  </p>
                  <h2 ref={categoryTitle} id="collection-title" tabIndex={-1}>
                    {category.headline}
                    <br />
                    <span>{category.accent}</span>
                  </h2>
                  <p className="collection-lede">{category.introduction}</p>
                  <ul className="collection-tags">
                    {category.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a
                    href="#collection-projects"
                    className="neo-button"
                    onClick={(event) => {
                      event.preventDefault()
                      categoryDialog.current?.querySelector('#collection-projects')?.scrollIntoView({
                        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
                      })
                    }}>
                    Explore {collection.length} projects <FiArrowRight aria-hidden="true" />
                  </a>
                </div>
                <div className={'collection-stage collection-stage-' + category.id} aria-hidden="true">
                  {category.previewSlugs.map((slug, index) => {
                    const project = findProject(slug)
                    return project?.image ? (
                      <div key={slug} className={'collection-stage-window stage-window-' + index}>
                        <div className="collection-browser-bar">
                          <span>● ● ●</span>
                          <span>{project.title}</span>
                        </div>
                        <Image src={project.image} alt="" width={700} height={480} sizes="(max-width: 999px) 80vw, 500px" />
                      </div>
                    ) : null
                  })}
                  <span className="collection-stage-badge">
                    {category.id === 'design' ? <FiPenTool /> : <FiCode />}
                    <span>Ideas → experiences</span>
                  </span>
                </div>
              </div>
              <section className="collection-section" aria-labelledby="collection-process-title">
                <h3 id="collection-process-title">From context to interface.</h3>
                <ol className="collection-process">
                  {category.steps.map((step, index) => {
                    const Icon = ProcessIcons[index]
                    return (
                      <li key={step.title}>
                        <span className="process-icon">
                          <Icon aria-hidden="true" />
                        </span>
                        <h4>
                          <span>{String(index + 1).padStart(2, '0')}</span>
                          {step.title}
                        </h4>
                        <p>{step.text}</p>
                      </li>
                    )
                  })}
                </ol>
              </section>
              <section className="collection-section" id="collection-projects" aria-labelledby="collection-projects-title">
                <div className="collection-section-heading">
                  <h3 id="collection-projects-title">
                    {category.id === 'design' ? 'Design concepts & case studies.' : 'The websites.'}
                    <span className="collection-count">{collection.length}</span>
                  </h3>
                  <p>Open a board for the preview and project details.</p>
                </div>
                <div className="collection-case-list">
                  {collection.map((project, index) => (
                    <article
                      key={project.slug}
                      className={'collection-case' + (index % 2 ? ' case-reversed' : '')}
                      data-project={project.slug}>
                      <button
                        type="button"
                        className="collection-board"
                        aria-haspopup="dialog"
                        aria-label={'Open ' + project.title + ' project details'}
                        onClick={() => navigate('project-' + project.slug, false, 'project')}>
                        <ProjectPreview project={project} />
                        <span className="board-open">
                          <FiMaximize2 aria-hidden="true" />
                          {project.image ? 'Preview & details' : 'Explore concept'}
                        </span>
                      </button>
                      <div className="collection-case-body">
                        <p className="case-number">
                          {String(index + 1).padStart(2, '0')} ·{' '}
                          {project.category === 'design' ? 'Design concept' : 'Website'}
                        </p>
                        <h3>{project.title}</h3>
                        <p className="case-domain">{project.domain}</p>
                        <p className="case-summary">{project.summary}</p>
                        <p className="case-label">PROJECT FOCUS</p>
                        <ul className="collection-tags">
                          {project.focus.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <div className="case-metadata">
                          <span>
                            {project.year ?? (project.category === 'design' ? 'UI/UX exploration' : 'Front-end project')}
                          </span>
                          {project.link ? (
                            <a href={project.link} target="_blank" rel="noreferrer">
                              {project.action ?? 'Visit website'}
                              <FiArrowUpRight aria-hidden="true" />
                            </a>
                          ) : (
                            <span>Concept brief</span>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
              <section className="collection-ending">
                <p className="eyebrow-label">LET’S CREATE SOMETHING THOUGHTFUL</p>
                <h3>Have a similar idea in mind?</h3>
                <p>Tell me what you’re working on. Let’s explore it together.</p>
                <Link href="/#contact" className="neo-button" onClick={() => setActiveHash('')}>
                  Start a conversation <FiArrowUpRight aria-hidden="true" />
                </Link>
                <button type="button" className="text-button" onClick={closeCategory}>
                  <FiArrowLeft aria-hidden="true" /> Back to all categories
                </button>
              </section>
            </div>
          </>
        )}
      </dialog>
      <dialog
        ref={projectDialog}
        className="project-detail-dialog"
        aria-labelledby="project-detail-title"
        onCancel={(event) => {
          event.preventDefault()
          event.stopPropagation()
          closeProject()
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault()
            moveProject(event.key === 'ArrowRight' ? 1 : -1)
          }
        }}>
        {activeProject && (
          <>
            <header className="project-detail-topbar">
              <div>
                <p className="eyebrow-label">{category?.title} / PROJECT DETAILS</p>
                <h2 ref={projectTitle} id="project-detail-title" tabIndex={-1}>
                  {activeProject.title}
                </h2>
              </div>
              <div className="project-detail-controls">
                <button type="button" onClick={() => moveProject(-1)} aria-label="Previous project">
                  <FiArrowLeft />
                </button>
                <span aria-live="polite">
                  {projectIndex + 1} / {collection.length}
                </span>
                <button type="button" onClick={() => moveProject(1)} aria-label="Next project">
                  <FiArrowRight />
                </button>
                <button type="button" onClick={closeProject} aria-label="Close project details">
                  <FiX />
                </button>
              </div>
            </header>
            <ProjectDetails key={activeProject.slug} project={activeProject} />
          </>
        )}
      </dialog>
    </ExplorerContext.Provider>
  )
}
