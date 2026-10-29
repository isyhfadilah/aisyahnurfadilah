'use client'

import { FiArrowUpRight } from 'react-icons/fi'
import { projectCatalog, projectCategories, projectsInCategory } from '@/data/project-catalog'
import { useProjectExplorer } from '@/components/common/project-explorer'

export const AboutService = () => {
  const { openCategory } = useProjectExplorer()
  return (
    <section id="services" className="reference-section project-category-section" data-scroll-reveal>
      <span id="portfolio" className="portfolio-section-anchor" aria-hidden="true" />
      <div className="site-container">
        <div className="section-heading">
          <h2>
            From a good idea to
            <br />
            <span>an intuitive experience.</span>
          </h2>
          <p>
            All {projectCatalog.length} projects, organized by discipline. Choose a collection to explore the work, the ideas
            behind it, and the details.
          </p>
        </div>
        <div className="service-grid collection-category-grid">
          <div className="service-intro">
            <p>
              Different ideas.
              <br />
              One thoughtful
              <br />
              approach.
            </p>
            <span className="count-pill">
              ••• &nbsp; {projectCatalog.length} projects / {projectCategories.length} collections
            </span>
            <span className="service-intro-star" aria-hidden="true">
              ✳
            </span>
          </div>
          {projectCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={'service-tile ' + (category.id === 'design' ? 'service-ui' : 'service-web')}
              onClick={() => openCategory(category.id)}
              aria-haspopup="dialog"
              aria-label={'Explore ' + category.title + ' — ' + projectsInCategory(category.id).length + ' projects'}>
              <span className="service-arrow">
                <FiArrowUpRight aria-hidden="true" />
              </span>
              <h3>{category.title}</h3>
              <p>{category.short}</p>
              <span className="category-total">
                <strong>{String(projectsInCategory(category.id).length).padStart(2, '0')}</strong> projects
              </span>
              <span className="service-more">Explore the collection ↗</span>
              {category.id === 'design' ? (
                <div className="service-art art-phone" aria-hidden="true">
                  <div className="art-phone">
                    <i />
                    <span className="phone-greeting">Hello, there.</span>
                    <b />
                    <span className="phone-line" />
                    <span className="phone-line short" />
                    <span className="phone-button">Ideas into experiences ↗</span>
                  </div>
                </div>
              ) : (
                <div className="service-art art-code" aria-hidden="true">
                  <div className="art-code">
                    <span>● ● ●</span>
                    <strong>&lt;/&gt;</strong>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
