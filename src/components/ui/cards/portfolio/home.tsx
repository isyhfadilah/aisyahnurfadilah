'use client'

import { useState } from 'react'
import Button from '../../button'
import { CardPortfolio } from '.'
import { projects } from '@/data/project'

interface HomePortfolioProps {
  featuredOnly?: boolean
}

export const HomePortfolio = ({ featuredOnly = false }: HomePortfolioProps) => {
  const [selectType, setSelectType] = useState('all')

  const handleTypeChange = (type: string) => {
    setSelectType(type)
  }

  const displayedProjects = featuredOnly ? projects.filter((project) => project.featured) : projects
  const filterProjects =
    !featuredOnly && selectType !== 'all'
      ? displayedProjects.filter((project) => project.type === selectType)
      : displayedProjects

  return (
    <section className="my-8">
      {!featuredOnly && (
        <div className="mb-8 flex flex-wrap gap-2">
          <Button
            onClick={() => handleTypeChange('all')}
            text="All projects"
            variant="outline"
            size="sm"
            aria-pressed={selectType === 'all'}
            className={`${selectType == 'all' ? 'bg-dark text-white' : 'bg-white/70 text-dark'}`}
          />
          <Button
            onClick={() => handleTypeChange('website')}
            text="Websites"
            variant="outline"
            size="sm"
            aria-pressed={selectType === 'website'}
            className={`${selectType == 'website' ? 'bg-dark text-white' : 'bg-white/70 text-dark'}`}
          />
          <Button
            onClick={() => handleTypeChange('design')}
            text="Design"
            variant="outline"
            size="sm"
            aria-pressed={selectType === 'design'}
            className={`${selectType == 'design' ? 'bg-dark text-white' : 'bg-white/70 text-dark'}`}
          />
        </div>
      )}

      <div className="motion-stagger grid grid-cols-1 place-items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filterProjects.map((item, index) => (
          <CardPortfolio
            key={item.title}
            image={item.image}
            title={item.title}
            detail={item.detail}
            link={item.link}
            type={item.type}
            year={item.year}
            action={item.action}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  )
}
