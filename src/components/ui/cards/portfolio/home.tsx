'use client'

import { useState } from 'react'
import Button from '../../button'
import { CardPortfolio } from '.'
import { projects } from '@/data/project'

export const HomePortfolio = () => {
  const [selectType, setSelectType] = useState('all')

  const handleTypeChange = (type: string) => {
    setSelectType(type)
  }

  const filterProjects = selectType === 'all' ? projects : projects.filter((project) => project.type === selectType)

  return (
    <section className="my-8">
      <div className="mb-8 flex flex-wrap gap-2">
        <Button
          onClick={() => handleTypeChange('all')}
          text="all"
          variant="outline"
          size="sm"
          className={`${selectType == 'all' ? 'bg-dark text-white' : 'bg-white/70 text-dark'}`}
        />
        <Button
          onClick={() => handleTypeChange('website')}
          text="website"
          variant="outline"
          size="sm"
          className={`${selectType == 'website' ? 'bg-dark text-white' : 'bg-white/70 text-dark'}`}
        />
        <Button
          onClick={() => handleTypeChange('design')}
          text="design"
          variant="outline"
          size="sm"
          className={`${selectType == 'design' ? 'bg-dark text-white' : 'bg-white/70 text-dark'}`}
        />
      </div>

      <div className="motion-stagger grid grid-cols-1 place-items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filterProjects.map((item, index) => (
          <CardPortfolio
            key={index}
            image={item.image}
            title={item.title}
            detail={item.detail}
            link={item.link}
            type={item.type}
            year={item.year}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  )
}
