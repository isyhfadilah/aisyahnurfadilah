import { projects } from './project'

export type ProjectCategoryId = 'design' | 'website'

interface ProjectStory {
  slug: string
  domain: string
  summary: string
  focus: string[]
  context: string
  notes: string[]
}

const stories: Record<string, ProjectStory> = {
  'Meal Up': {
    slug: 'meal-up',
    domain: 'Food sharing · Platform concept',
    summary: 'Connecting businesses with surplus food to communities that can use it.',
    focus: ['Surplus food', 'Business participation', 'Community access', 'Food redistribution'],
    context: 'Meal Up explores how a digital platform could connect surplus food from businesses with communities in need.',
    notes: [
      'The concept brings businesses and communities into one food-sharing experience.',
      'Its central idea is to make surplus food easier to discover and redistribute.'
    ]
  },
  Plantify: {
    slug: 'plantify',
    domain: 'Plant care · App concept',
    summary: 'A plant-care companion combining daily challenges, a community, and an AI plant scanner.',
    focus: ['Daily challenges', 'Community', 'Rewards', 'AI plant scanner'],
    context:
      'Plantify explores a plant-care experience that connects everyday routines with learning and community participation.',
    notes: [
      'Daily challenges and rewards are part of the proposed plant-care experience.',
      'Community features support sharing, while the AI scanner is a feature in the app concept.'
    ]
  },
  'Literacy Modern': {
    slug: 'literacy-modern',
    domain: 'Digital library · Platform concept',
    summary: 'A digital library concept that helps students explore books and build a reading habit.',
    focus: ['Curated books', 'Student readers', 'Reading habits', 'Progress goals'],
    context:
      'Literacy Modern brings curated reading material and progress goals together in a digital library concept for students.',
    notes: [
      'Book discovery and reading progress are the two main parts of the concept.',
      'The experience focuses on supporting a regular reading habit.'
    ]
  },
  'Smart Waste': {
    slug: 'smart-waste',
    domain: 'Waste management · Mobile app concept',
    summary: 'A waste-management app concept informed by research with 13 Bandung residents.',
    focus: ['Waste deposit', 'Waste points', 'Bin status', 'Waste challenges'],
    context:
      'Research with 13 Bandung residents informed this waste-management app concept. The board presents the onboarding and home-screen experience.',
    notes: [
      'The home screen brings waste points and bin information into one view.',
      'Waste deposit and challenge entry points connect the main activities in the preview.'
    ]
  },
  'Official Website SMKN 2 Sumedang': {
    slug: 'smkn-2-sumedang',
    domain: 'Education · School website',
    summary: 'A school website bringing the profile, study programs, news, and contact information together.',
    focus: ['School profile', 'Study programs', 'Extracurriculars', 'News', 'Contact'],
    context:
      'The SMKN 2 Sumedang website presents school information for students, families, and the wider school community.',
    notes: [
      'The homepage introduces the school and its study programs.',
      'The main navigation groups the profile, extracurricular activities, news, and contact information.'
    ]
  },
  'E-Voting Osis': {
    slug: 'e-voting-osis',
    domain: 'Student elections · Web application',
    summary: 'A focused entry point for student council elections, registration, and election results.',
    focus: ['Election countdown', 'Voting', 'Election results', 'Registration'],
    context: 'E-Voting Osis presents a digital student council election experience with a clear set of starting actions.',
    notes: [
      'The preview places the election countdown above the main actions.',
      'Voting, results, and registration each have a separate entry point.'
    ]
  },
  'Instellar dan IKEA Social Entrepreneurship Indonesia Accelerator': {
    slug: 'isea',
    domain: 'Social entrepreneurship · Program website',
    summary: 'A program website for exploring the I-SEA accelerator, its stages, mentors, and changemakers.',
    focus: ['Program stages', 'Mentors', 'Cohorts', 'Changemakers', 'Program stories'],
    context:
      'The I-SEA website introduces the Instellar and IKEA Social Entrepreneurship Indonesia Accelerator and its participating enterprises.',
    notes: [
      'The preview organizes participating enterprises by cohort.',
      'The navigation connects program information, mentors, stories, and changemaker profiles.'
    ]
  },
  'Yayasan Biodiversitas Indonesia (BIONESIA)': {
    slug: 'bionesia',
    domain: 'Conservation · Nonprofit website',
    summary: 'A biodiversity organization’s website connecting its conservation programs, research, and resources.',
    focus: ['Organization profile', 'Programs', 'Research resources', 'Portfolio', 'Contact'],
    context: 'BIONESIA presents Indonesian biodiversity conservation through research and collaboration.',
    notes: [
      'The homepage preview introduces the organization through marine-life imagery and a concise mission.',
      'Programs, resources, blog content, and the portfolio have clear navigation entry points.'
    ]
  },
  'Ghia Farm': {
    slug: 'ghia-farm',
    domain: 'Horticulture · Business website',
    summary: 'A flower-farm website with a product-led introduction and clear paths to explore or get in touch.',
    focus: ['Farm introduction', 'Flower products', 'About the farm', 'Blog', 'Contact'],
    context: 'Ghia Farm introduces a flower-growing business through its farm profile and product offering.',
    notes: [
      'The homepage pairs a flower visual with the farm introduction.',
      'Product, company, blog, and contact sections are available from the main navigation.'
    ]
  },
  Pionicon: {
    slug: 'pionicon',
    domain: 'Creative studio · Company website',
    summary: 'An illustrated studio website presenting its identity, licensing, stories, and creative work.',
    focus: ['Studio profile', 'Licensing', 'Studios', 'Stories', 'Contact'],
    context: 'The Pionicon website presents the creative studio and its illustrated identity.',
    notes: [
      'The About page uses a large illustration to introduce the studio.',
      'The navigation connects the company profile, licensing, studios, stories, and contact information.'
    ]
  },
  'Pionicon Creative Agency': {
    slug: 'pionicon-creative',
    domain: 'Creative agency · Link hub',
    summary: 'A compact branded hub connecting Pionicon’s creative work, stories, social profiles, and stores.',
    focus: ['Creative projects', 'Studio stories', 'Social profiles', 'Store links'],
    context: 'This Pionicon Creative Agency page brings the agency’s online destinations into a single branded hub.',
    notes: [
      'The preview separates creative-agency links from store destinations.',
      'Large link buttons sit over the studio’s illustrated visual identity.'
    ]
  },
  MEVERS: {
    slug: 'mevers',
    domain: 'Education · Metaverse website',
    summary: 'An education website concept introducing the metaverse and virtual learning.',
    focus: ['Metaverse introduction', 'Educational articles', 'Members', 'Presentations', 'Team'],
    context: 'MEVERS introduces metaverse-inspired virtual learning through an education website.',
    notes: [
      'The homepage uses a dark canvas and a vivid metaverse illustration.',
      'The navigation groups the introduction, articles, members, presentations, and team.'
    ]
  },
  'Grow Junior (GROJUNIO)': {
    slug: 'grojunio',
    domain: 'Technology education · Web platform concept',
    summary: 'A learning-platform concept introducing technology skills to students across Indonesia.',
    focus: ['Learning categories', 'Training', 'Events', 'Student learning'],
    context:
      'Grow Junior explores technology learning for students across Indonesia through a dedicated education platform.',
    notes: [
      'The homepage introduces the learning program and its purpose.',
      'Categories, training, and events form the main navigation of the concept.'
    ]
  },
  JanGi: {
    slug: 'jangi',
    domain: 'Food discovery · Website concept',
    summary: 'A school-snack discovery concept for exploring familiar canteen favorites.',
    focus: ['Snack discovery', 'Menu', 'School canteen', 'Contact'],
    context: 'JanGi explores a website experience built around discovering school snacks and canteen favorites.',
    notes: [
      'The homepage uses a collage of snack photography to introduce the concept.',
      'A direct menu entry point supports the central discovery experience.'
    ]
  }
}

export const projectCatalog = projects.map((project) => {
  const story = stories[project.title]
  if (!story) throw new Error('Missing project details: ' + project.title)
  return { ...project, ...story, category: project.type as ProjectCategoryId }
})

export type CatalogProject = (typeof projectCatalog)[number]

export const projectCategories = [
  {
    id: 'design' as const,
    hash: 'uiux',
    title: 'UI/UX Design',
    short: 'Mobile apps · Web experiences · Prototypes',
    headline: 'Ideas shaped around',
    accent: 'the people using them.',
    introduction:
      'Six concepts across food sharing, plant care, reading, waste management, learning, and snack discovery. Explore each project’s purpose, preview, and design focus.',
    tags: ['User flows', 'Interface design', 'Figma', 'Prototypes'],
    previewSlugs: ['smart-waste', 'grojunio', 'jangi'],
    steps: [
      { title: 'Understand', text: 'Start with the audience, the context, and the problem the experience should address.' },
      { title: 'Structure', text: 'Connect information and user flows before refining the interface.' },
      { title: 'Design', text: 'Shape the visual hierarchy and interactions around the project’s focus.' },
      { title: 'Explore', text: 'Use the available boards and prototypes to examine the experience in more detail.' }
    ]
  },
  {
    id: 'website' as const,
    hash: 'web',
    title: 'Front-End Development',
    short: 'School websites · Businesses · Creative studios',
    headline: 'Digital places with',
    accent: 'a purpose of their own.',
    introduction:
      'Eight website projects across education, student elections, social enterprise, conservation, horticulture, and creative studios. Explore the previews and open the original websites.',
    tags: ['Website interfaces', 'Content structure', 'Navigation', 'Front-end'],
    previewSlugs: ['smkn-2-sumedang', 'ghia-farm', 'bionesia'],
    steps: [
      { title: 'Organize', text: 'Identify the information visitors need and give each page a clear purpose.' },
      { title: 'Translate', text: 'Turn the visual direction into a readable interface and a clear content hierarchy.' },
      { title: 'Connect', text: 'Bring pages, navigation, and the website’s key actions together.' },
      { title: 'Review', text: 'Explore the supplied website preview and follow the original project link.' }
    ]
  }
]

export const findProject = (slug: string) => projectCatalog.find((project) => project.slug === slug)
export const projectsInCategory = (id: ProjectCategoryId) => projectCatalog.filter((project) => project.category === id)
