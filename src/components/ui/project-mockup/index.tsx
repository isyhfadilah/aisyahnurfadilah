import Image from 'next/image'

interface ProjectMockupProps {
  image: string
  title: string
  type: string
  full?: boolean
  priority?: boolean
}

export const ProjectMockup = ({ image, title, type, full = false, priority = false }: ProjectMockupProps) => (
  <span
    className={'project-mockup-stage mockup-' + (type === 'design' ? 'tablet' : 'browser')}
    data-artwork={image.split('/').pop()?.replace('.png', '')}>
    <span className="project-mockup-device">
      <span className="project-mockup-chrome" aria-hidden="true">
        {type === 'design' ? (
          <span className="mockup-camera" />
        ) : (
          <>
            <span className="mockup-window-controls">
              <i />
              <i />
              <i />
            </span>
            <span className="mockup-address">{title}</span>
            <span className="mockup-window-menu">
              <i />
              <i />
            </span>
          </>
        )}
      </span>
      <span className="project-mockup-screen">
        <Image
          src={image}
          alt={title + ' project preview'}
          width={1800}
          height={1200}
          loading={priority ? 'eager' : 'lazy'}
          sizes={full ? '(max-width: 999px) 90vw, 1100px' : '(max-width: 999px) 85vw, 620px'}
          className="collection-preview-image"
        />
      </span>
    </span>
  </span>
)
