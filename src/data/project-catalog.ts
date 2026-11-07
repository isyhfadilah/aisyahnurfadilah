import { projects } from './project'

export type ProjectCategoryId = 'design' | 'website'

interface ProjectStory {
  slug: string
  domain: string
  summary: string
  focus: string[]
  context: string
  audience: string
  goal: string
  materials: string
  notes: string[]
  contribution?: {
    collaboration: string
    responsibilities: string[]
  }
}

const stories: Record<string, ProjectStory> = {
  'Meal Up': {
    slug: 'meal-up',
    domain: 'Food sharing · Platform concept',
    summary: 'Connecting businesses with surplus food to communities that can use it.',
    focus: ['Surplus food', 'Business participation', 'Community access', 'Food redistribution'],
    context:
      'Meal Up is a food-rescue platform concept connecting businesses with surplus food to communities that can use it. It explores redistribution as a shared activity between the people offering food and the people looking for it.',
    audience: 'Businesses with surplus food and communities looking for access to that food.',
    goal: 'Give food providers and recipients a shared place to discover surplus food and take part in redistribution.',
    materials: 'A project cover and a full case study on Behance.',
    notes: [
      'The platform connects two sides of the same activity: businesses offering surplus food and communities that can use it.',
      'Food discovery and business participation are the central parts of the concept.',
      'The Behance case study provides the project presentation beyond the cover shown here.'
    ]
  },
  Plantify: {
    slug: 'plantify',
    domain: 'Plant care · App concept',
    summary: 'A plant-care companion combining daily challenges, a community, and an AI plant scanner.',
    focus: ['Daily challenges', 'Community', 'Rewards', 'AI plant scanner'],
    context:
      'Plantify is a plant-care app concept that brings daily challenges, a community, rewards, and an AI plant scanner into one experience. It combines the practical side of caring for plants with activities that encourage people to return to the app.',
    audience: 'People caring for plants who want a place for daily activities, learning, and community participation.',
    goal: 'Bring plant-care activities and opportunities to learn from others into a single app concept.',
    materials: 'A project cover and a full case study on Behance.',
    notes: [
      'Daily challenges give plant-care activities a recurring place in the experience, with rewards as part of the concept.',
      'Community features introduce a social side to plant care alongside individual activities.',
      'An AI plant scanner is proposed as an app feature; the project is presented as a design concept.'
    ]
  },
  'Literacy Modern': {
    slug: 'literacy-modern',
    domain: 'Digital library · Platform concept',
    summary: 'A digital library concept that helps students explore books and build a reading habit.',
    focus: ['Curated books', 'Student readers', 'Reading habits', 'Progress goals'],
    context:
      'Literacy Modern, also presented as LiTerm, is a digital library concept for students. It combines book discovery with progress goals so that finding something to read and developing a reading routine belong to the same experience.',
    audience: 'Students exploring books and working toward a regular reading habit.',
    goal: 'Connect curated book discovery with reading goals, giving students a reason to keep reading after finding a book.',
    materials: 'A project cover and a full case study on Behance.',
    notes: [
      'Curated books form the discovery side of the digital library.',
      'Progress goals connect individual reading sessions to a longer-term habit.',
      'The cover introduces the reading theme through book imagery; the linked case study contains the wider presentation.'
    ]
  },
  'Smart Waste': {
    slug: 'smart-waste',
    domain: 'Waste management · Mobile app concept',
    summary: 'A waste-management app concept informed by research with 13 Bandung residents.',
    focus: ['Waste deposit', 'Waste points', 'Bin status', 'Waste challenges'],
    context:
      'Smart Waste is a mobile waste-management app concept informed by research with 13 Bandung residents. The preview connects account entry with a home dashboard containing waste points, bin information, waste deposit, and challenges.',
    audience: 'Residents participating in everyday waste-management activities.',
    goal: 'Make waste information and the next activity accessible from one dashboard, from checking bin status to starting a waste deposit.',
    materials: 'An onboarding and dashboard preview, plus an interactive Figma prototype.',
    notes: [
      'The entry screen separates creating an account from signing into an existing one.',
      'The dashboard groups waste points, weight, temperature, and bin status before the main activities.',
      'Waste Deposit and Waste Challenges appear as separate action cards, with point redemption accessible near the balance.'
    ]
  },
  'Official Website SMKN 2 Sumedang': {
    slug: 'smkn-2-sumedang',
    domain: 'Education · School website',
    summary: 'A school website bringing the profile, study programs, news, and contact information together.',
    focus: ['School profile', 'Study programs', 'Extracurriculars', 'News', 'Contact'],
    context:
      'This website project presents SMKN 2 Sumedang through its school profile, study programs, extracurricular activities, and news. The homepage pairs a school introduction with contact details and program options, giving visitors several ways to explore the school.',
    audience: 'Students, prospective students, families, and people looking for information about SMKN 2 Sumedang.',
    goal: 'Bring school information and contact options together, with clear paths into programs, activities, and news.',
    materials: 'A homepage preview and a link to the website project.',
    notes: [
      'A contact strip places the school address, telephone number, and email above the main navigation.',
      'The hero introduces the school, followed by a row of study programs including accounting and software development.',
      'Profile, extracurricular activities, news, and contact information each have a dedicated navigation entry.'
    ]
  },
  'E-Voting Osis': {
    slug: 'e-voting-osis',
    domain: 'Student elections · Web application',
    summary: 'A focused entry point for student council elections, registration, and election results.',
    focus: ['Election countdown', 'Voting', 'Election results', 'Registration'],
    context:
      'E-Voting Osis is a web application interface for student council elections. Its landing page places the election countdown above three entry points: voting, results, and registration.',
    audience: 'Students looking to participate in a student council election or view its results.',
    goal: 'Make the election timeline and the main participation options easy to identify from the first screen.',
    materials: 'A mobile page preview and a link to the web application project.',
    notes: [
      'The countdown presents days, hours, minutes, and seconds as a distinct block above the actions.',
      'Voting, election results, and registration are separated into labeled cards with supporting illustrations.',
      'The mobile preview keeps the election summary and its three starting actions on one page.'
    ]
  },
  'Instellar dan IKEA Social Entrepreneurship Indonesia Accelerator': {
    slug: 'isea',
    domain: 'Social entrepreneurship · Program website',
    summary: 'A program website for exploring the I-SEA accelerator, its stages, mentors, and changemakers.',
    focus: ['Program stages', 'Mentors', 'Cohorts', 'Changemakers', 'Program stories'],
    context:
      'This program website introduces the Instellar and IKEA Social Entrepreneurship Indonesia Accelerator, or I-SEA. It connects information about program stages and mentors with stories and profiles of participating social enterprises. The supplied preview shows the cohort directory.',
    audience:
      'Social entrepreneurs exploring I-SEA and visitors learning about the program and its participating enterprises.',
    goal: 'Connect the program overview with the people, enterprises, and stories behind each cohort.',
    materials: 'A cohort-directory preview and a link to the I-SEA website.',
    notes: [
      'The cohort directory separates participating enterprises with Cohort 1 and Cohort 2 controls.',
      'Enterprise cards use recognizable brand marks to introduce the participating organizations.',
      'The header connects program stages, mentors, stories, changemakers, and registration alongside a language selector.'
    ]
  },
  'Yayasan Biodiversitas Indonesia (BIONESIA)': {
    slug: 'bionesia',
    domain: 'Conservation · Nonprofit website',
    summary: 'A biodiversity organization’s website connecting its conservation programs, research, and resources.',
    focus: ['Organization profile', 'Programs', 'Research resources', 'Portfolio', 'Contact'],
    context:
      'This website project introduces BIONESIA, a nonprofit focused on Indonesian biodiversity through research and collaboration. Its content brings the organization profile, conservation programs, resources, and project portfolio into one website.',
    audience:
      'People exploring biodiversity conservation, BIONESIA programs, research resources, or potential collaboration.',
    goal: 'Introduce the organization and give visitors clear paths to its conservation work, resources, and contact information.',
    materials: 'A homepage preview and a link to the website project.',
    notes: [
      'The hero pairs marine-life photography with a short explanation of the organization and a Learn More action.',
      'The navigation groups the organization profile and programs separately from blog, portfolio, and resources.',
      'Contact and language options remain available in the main header.'
    ]
  },
  'Ghia Farm': {
    slug: 'ghia-farm',
    domain: 'Horticulture · Business website',
    summary: 'A flower-farm website with a product-led introduction and clear paths to explore or get in touch.',
    focus: ['Farm introduction', 'Flower products', 'About the farm', 'Blog', 'Contact'],
    context:
      'Ghia Farm is a business website project introducing a flower-growing company and its products. The homepage uses a large flower image alongside the farm introduction, with separate actions for exploring products and learning about the business.',
    audience: 'Visitors interested in the farm, its flower products, or contacting the business.',
    goal: 'Present the farm and its products while giving visitors a direct route to learn more or make contact.',
    materials: 'A homepage preview and a link to the website project.',
    notes: [
      'A large orchid image gives the opening screen a direct connection to the product offering.',
      'Buy Now and Learn More separate product interest from the company introduction.',
      'Products, About Us, and Blog have dedicated navigation entries, while Contact Us is emphasized as a button.'
    ]
  },
  Pionicon: {
    slug: 'pionicon',
    domain: 'Creative studio · Company website',
    summary: 'An illustrated studio website presenting its identity, licensing, stories, and creative work.',
    focus: ['Studio profile', 'Licensing', 'Studios', 'Stories', 'Contact'],
    context:
      'This company website project presents Pionicon, its creative work, and its illustrated identity. The supplied preview shows the About page, where a large studio illustration introduces the company before the profile content.',
    audience: 'Visitors exploring the creative studio, its licensing work, stories, or contact options.',
    goal: 'Bring the studio profile and creative offerings into a website that retains the character of its illustrated identity.',
    materials: 'An About-page preview and a link to the company website project.',
    notes: [
      'The About hero uses a full-width illustration with an overlay to separate the page title from the artwork.',
      'A Home / About Us breadcrumb gives the page a visible position within the website.',
      'The header connects the company profile with Licensing, Studios, Stories, and Contact.'
    ]
  },
  'Pionicon Creative Agency': {
    slug: 'pionicon-creative',
    domain: 'Creative agency · Link hub',
    summary: 'A compact branded hub connecting Pionicon’s creative work, stories, social profiles, and stores.',
    focus: ['Creative projects', 'Studio stories', 'Social profiles', 'Store links'],
    context:
      'Pionicon Creative Agency is a compact link-hub project that gathers the agency’s online destinations on one branded page. It separates creative-agency links from store links, rather than presenting the content as a multi-page company website.',
    audience: 'Visitors looking for Pionicon projects, stories, social profiles, or store destinations.',
    goal: 'Help visitors choose the right Pionicon destination from a single page.',
    materials: 'A link-hub preview and a link to the Pionicon destination.',
    notes: [
      'Creative Agency and Store headings divide the links into two recognizable groups.',
      'Large, consistently shaped buttons label project, story, professional-profile, and shopping destinations.',
      'The studio illustration is reused as the page background, with a dark overlay behind the links.'
    ]
  },
  MEVERS: {
    slug: 'mevers',
    domain: 'Education · Metaverse website',
    summary: 'An education website concept introducing the metaverse and virtual learning.',
    focus: ['Metaverse introduction', 'Educational articles', 'Members', 'Presentations', 'Team'],
    context:
      'MEVERS is an education website concept introducing the metaverse and virtual learning. Its opening screen presents the topic through a dark background, gradient typography, and a virtual-reality illustration, with navigation into articles and other supporting content.',
    audience: 'Visitors learning about the metaverse and its connection to education.',
    goal: 'Introduce a technology topic through an educational website with clear paths to supporting information.',
    materials: 'A homepage preview and a link to the website concept.',
    notes: [
      'The hero combines a virtual-reality illustration with a prominent metaverse headline.',
      'A virtual-learning label connects the visual theme to the educational subject.',
      'About, Article, Member, Present, and Our Team entries organize the supporting sections.'
    ]
  },
  'Grow Junior (GROJUNIO)': {
    slug: 'grojunio',
    domain: 'Technology education · Web platform concept',
    summary: 'A learning-platform concept introducing technology skills to students across Indonesia.',
    focus: ['Learning categories', 'Training', 'Events', 'Student learning'],
    context:
      'Grow Junior, also called GROJUNIO, is a web platform concept for technology learning among students in Indonesia. The homepage introduces the program and places learning categories, training, and events alongside account entry points.',
    audience: 'Students in Indonesia looking for technology-learning opportunities.',
    goal: 'Introduce the learning program and organize its categories, training, and events into recognizable starting points.',
    materials: 'A homepage design preview and the design file in Figma.',
    notes: [
      'The opening screen explains the technology-skills focus with a central program introduction.',
      'Categories, Training, and Events separate the different ways to explore learning opportunities.',
      'Sign-in and registration controls sit together in the header, distinct from the learning navigation.'
    ]
  },
  JanGi: {
    slug: 'jangi',
    domain: 'Food discovery · Website concept',
    summary: 'A school-snack discovery concept for exploring familiar canteen favorites.',
    focus: ['Snack discovery', 'Menu', 'School canteen', 'Contact'],
    context:
      'JanGi, short for Jajan Lagi, is a website concept built around discovering familiar school snacks. Food photography and the invitation to revisit school-snack favorites establish the theme, while the navigation offers paths to the menu and background information.',
    audience: 'People interested in discovering or revisiting familiar school-canteen snacks.',
    goal: 'Use a recognizable school-snack theme to introduce the experience and guide visitors toward the menu.',
    materials: 'A homepage design preview and an interactive Figma prototype.',
    notes: [
      'A diagonal collage of snack photography establishes the food theme before visitors explore further.',
      'The main start action sits below the introduction, while Menu remains available in the header.',
      'About, Contact, and Sign In provide secondary entry points alongside the central snack-discovery experience.'
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
