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
    <section className="my-10">
      <div className="flex gap-2 mb-10">
        {/* perbaiki strukturnya */}
        <Button
          onClick={() => handleTypeChange('all')}
          text="all"
          variant="outline"
          size="xs"
          className={`${selectType == 'all' ? 'bg-red text-white' : ''}`}
        />
        <Button
          onClick={() => handleTypeChange('website')}
          text="website"
          variant="outline"
          size="xs"
          className={`${selectType == 'website' ? 'bg-red text-white' : ''}`}
        />
        <Button
          onClick={() => handleTypeChange('design')}
          text="design"
          variant="outline"
          size="xs"
          className={`${selectType == 'design' ? 'bg-red text-white' : ''}`}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center place-content-center gap-6">
        {filterProjects.map((item, index) => (
          <CardPortfolio key={index} image={item.image} title={item.title} detail={item.detail} link={item.link} />
        ))}
      </div>
    </section>
  )
}
