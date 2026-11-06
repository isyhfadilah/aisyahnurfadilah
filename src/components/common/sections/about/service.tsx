'use client'

import { FiArrowUpRight } from 'react-icons/fi'
import { projectCatalog, projectCategories, projectsInCategory } from '@/data/project-catalog'
import { ProjectPreview, useProjectExplorer } from '@/components/common/project-explorer'

export const AboutService = () => {
  const { openCategory, openProject } = useProjectExplorer()
  return (
    <section id="services" className="reference-section project-category-section" data-scroll-reveal>
      <span id="portfolio" className="portfolio-section-anchor" aria-hidden="true" />
      <div className="site-container">
        <div className="section-heading">
          <h2>
            Explore my
            <br />
            <span>projects.</span>
          </h2>
          <p>
            Start with a selected project, or browse all {projectCatalog.length} UI/UX concepts and front-end projects by
            discipline.
          </p>
        </div>
        <div className="selected-project-grid" aria-label="Selected projects">
          {projectCatalog
            .filter((project) => project.featured)
            .map((project) => (
              <button
                key={project.slug}
                type="button"
                className="project-card selected-project-card"
                onClick={() => openProject(project.slug)}
                aria-haspopup="dialog"
                aria-label={'View ' + project.title + ' project details'}>
                <div className="selected-project-preview">
                  <ProjectPreview project={project} />
                </div>
                <div className="project-details">
                  <p className="eyebrow-label">{project.category === 'design' ? 'UI/UX concept' : 'Front-end project'}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <span className="selected-project-action">
                    View project details <FiArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              </button>
            ))}
        </div>
        <h3 className="browse-project-heading">Browse all projects by discipline</h3>
        <div className="service-grid collection-category-grid">
          <div className="service-intro">
            <p>
              UI/UX concepts.
              <br />
              Front-end
              <br />
              projects.
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
