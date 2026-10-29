'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CardPortfolio } from '.'
import { projects } from '@/data/project'

const projectGridVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.12
    }
  }
}

interface HomePortfolioProps {
  featuredOnly?: boolean
}

type ProjectFilter = 'all' | 'website' | 'design'

export const HomePortfolio = ({ featuredOnly = false }: HomePortfolioProps) => {
  const [selectType, setSelectType] = useState<ProjectFilter>('all')
  const prefersReducedMotion = useReducedMotion()

  const displayedProjects = featuredOnly ? projects.filter((project) => project.featured) : projects
  const filterProjects =
    !featuredOnly && selectType !== 'all'
      ? displayedProjects.filter((project) => project.type === selectType)
      : displayedProjects

  return (
    <section className="my-8">
      {!featuredOnly && (
        <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label="Filter projects">
          {(
            [
              ['all', 'All projects'],
              ['website', 'Websites'],
              ['design', 'Design']
            ] as const
          ).map(([filter, label]) => (
            <button
              key={filter}
              type="button"
              aria-pressed={selectType === filter}
              onClick={() => setSelectType(filter)}
              className={`neo-button min-w-28 px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark ${
                selectType === filter ? 'bg-secondary' : 'bg-paper'
              }`}>
              {label}
            </button>
          ))}
        </div>
      )}

      {!featuredOnly && (
        <p className="sr-only" aria-live="polite">
          Showing {filterProjects.length} {filterProjects.length === 1 ? 'project' : 'projects'}
        </p>
      )}

      <motion.div
        className="project-card-grid grid grid-cols-1 place-items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={projectGridVariants}
        initial={false}
        animate={prefersReducedMotion ? undefined : 'visible'}>
        {filterProjects.map((item, index) => (
          <CardPortfolio
            key={item.title}
            image={item.image}
            title={item.title}
            detail={item.detail}
            link={item.link}
            type={item.type}
            mockup={item.mockup}
            year={item.year}
            action={item.action}
            priority={index === 0}
          />
        ))}
      </motion.div>
    </section>
  )
}
