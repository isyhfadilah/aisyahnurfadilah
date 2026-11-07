interface ProjectActivity {
  title: string
  actor: string
  description: string
}

interface ProjectDocumentation {
  basis: 'Concept outline' | 'Interface walkthrough'
  scope: string
  activities: ProjectActivity[]
  interfaceReading?: string
}

// Describe the supplied concept or visible interface. These records do not
// establish the author's historical process, operational rules, or user-test results.
export const projectDocumentation: Record<string, ProjectDocumentation> = {
  'meal-up': {
    basis: 'Concept outline',
    scope:
      'The concept connects food supply and community need. Its documented scope is the relationship between providers, recipients, and food discovery.',
    activities: [
      {
        title: 'Make surplus food discoverable',
        actor: 'Food provider',
        description: 'Businesses are the supply side of the concept, making their surplus food available for redistribution.'
      },
      {
        title: 'Find food that can be redistributed',
        actor: 'Community recipient',
        description:
          'Communities are the recipient side, connecting with the surplus food offered through the platform concept.'
      }
    ]
  },
  plantify: {
    basis: 'Concept outline',
    scope:
      'The app concept combines recurring plant-care activities, community participation, rewards, and a proposed scanner. These are product activities rather than a verified sequence of screens.',
    activities: [
      {
        title: 'Take part in daily care activities',
        actor: 'Plant owner',
        description: 'Daily challenges and rewards form the recurring activity loop described in the concept.'
      },
      {
        title: 'Explore plant care with other people',
        actor: 'Community participant',
        description: 'Community features add a shared learning space alongside personal plant-care activities.'
      },
      {
        title: 'Explore the scanner feature',
        actor: 'Plant owner',
        description:
          'The proposed AI scanner is part of the design concept. Its presence describes the intended feature, rather than a measured identification result.'
      }
    ]
  },
  'literacy-modern': {
    basis: 'Concept outline',
    scope:
      'The library concept connects two activities: discovering curated books and working toward reading goals. Its focus is the relationship between discovery and a continuing reading habit.',
    activities: [
      {
        title: 'Discover reading material',
        actor: 'Student reader',
        description: 'Curated books provide the starting point for exploring the digital library concept.'
      },
      {
        title: 'Work toward a reading goal',
        actor: 'Student reader',
        description: 'Progress goals extend the concept beyond discovery by giving reading activity a longer-term focus.'
      }
    ]
  },
  'smart-waste': {
    basis: 'Interface walkthrough',
    scope:
      'The preview covers account entry and a home dashboard. It shows where waste deposit, challenges, and point redemption begin.',
    activities: [
      {
        title: 'Choose an account entry path',
        actor: 'New or returning resident',
        description:
          'The welcome screen separates Get Started from Login into Existing Account, giving each account state its own starting action.'
      },
      {
        title: 'Review waste information',
        actor: 'Resident',
        description: 'The dashboard brings the point balance, weight, temperature, and bin status into one overview.'
      },
      {
        title: 'Choose the next waste activity',
        actor: 'Resident',
        description:
          'Waste Deposit and Waste Challenges are separate cards. Redeem Points is positioned beside the balance as another entry point.'
      }
    ],
    interfaceReading:
      'The screen separates an information overview from action cards. This makes checking the current situation and choosing an activity distinct parts of the interface.'
  },
  'smkn-2-sumedang': {
    basis: 'Interface walkthrough',
    scope:
      'The homepage introduces the school, displays study programs, and offers paths into school information and contact details.',
    activities: [
      {
        title: 'Understand the school offering',
        actor: 'Prospective student or family',
        description:
          'The school introduction is followed by a row of study programs, connecting the institution with the areas students can explore.'
      },
      {
        title: 'Find information or make contact',
        actor: 'School visitor',
        description:
          'Profile, Extracurriculars, News, and Contact are separate navigation entries. The contact strip also exposes the address, telephone number, and email.'
      }
    ],
    interfaceReading:
      'The program row supports comparing study areas, while the contact strip gives visitors a direct option without first navigating through the school profile.'
  },
  'e-voting-osis': {
    basis: 'Interface walkthrough',
    scope:
      'The supplied page covers election information and the starting points for participation. The countdown and three action cards define this entry screen.',
    activities: [
      {
        title: 'Check the election timeline',
        actor: 'Student',
        description:
          'A countdown presents the remaining days, hours, minutes, and seconds before the visitor chooses an action.'
      },
      {
        title: 'Choose an election activity',
        actor: 'Student',
        description:
          'Voting, Election Results, and Registration each have a labeled card. The preview establishes their entry points, rather than the complete ballot or registration flow.'
      }
    ],
    interfaceReading:
      'The countdown provides timing context, while separate cards distinguish participating in the election from viewing information about it.'
  },
  isea: {
    basis: 'Interface walkthrough',
    scope:
      'The supplied screen is a cohort directory within the accelerator website. It connects program information with participating enterprises.',
    activities: [
      {
        title: 'Choose a cohort to explore',
        actor: 'Program visitor',
        description:
          'Cohort 1 and Cohort 2 controls appear above enterprise cards, presenting the grouping used to browse participants.'
      },
      {
        title: 'Find program information',
        actor: 'Prospective participant',
        description:
          'The header provides entries for program stages, mentors, stories, and changemakers, alongside sign-in and registration.'
      }
    ],
    interfaceReading:
      'Cohort grouping gives the enterprise directory a clear browsing structure. Program navigation and account actions have separate positions in the header.'
  },
  bionesia: {
    basis: 'Interface walkthrough',
    scope:
      'The homepage introduces the conservation organization and its information architecture, including programs, resources, portfolio, and contact.',
    activities: [
      {
        title: 'Learn about the organization',
        actor: 'First-time visitor',
        description:
          'The hero introduces biodiversity conservation through a short mission statement and a Learn More action.'
      },
      {
        title: 'Explore conservation work',
        actor: 'Visitor interested in programs or collaboration',
        description:
          'Program, Blog, Portfolio, Resources, and Contact entries provide different routes into the organization’s work.'
      }
    ],
    interfaceReading:
      'The opening statement establishes the subject of the website before visitors choose between organizational information, work examples, and resources.'
  },
  'ghia-farm': {
    basis: 'Interface walkthrough',
    scope: 'The homepage presents the farm and its flower offering, with product, company, and contact entry points.',
    activities: [
      {
        title: 'Explore the farm and products',
        actor: 'Prospective customer',
        description:
          'The introduction and flower image establish the offering. Buy Now, Learn More, and Products provide different starting actions.'
      },
      {
        title: 'Find a contact route',
        actor: 'Visitor with an enquiry',
        description:
          'Contact Us is emphasized in the main navigation so an interested visitor can identify where to make an enquiry.'
      }
    ],
    interfaceReading:
      'Product interest, company information, and contact are presented as distinct choices. The preview establishes these entry points without specifying an order or checkout process.'
  },
  pionicon: {
    basis: 'Interface walkthrough',
    scope:
      'The About-page preview shows the studio introduction and navigation into company, licensing, studio, story, and contact content.',
    activities: [
      {
        title: 'Orient within the company website',
        actor: 'Studio visitor',
        description:
          'The About Us title and Home / About Us breadcrumb identify the current page before the profile content.'
      },
      {
        title: 'Choose a studio information path',
        actor: 'Visitor exploring creative work or licensing',
        description:
          'Licensing, Studios, Stories, and Contact remain available from the header while the visitor reads the company introduction.'
      }
    ],
    interfaceReading:
      'The breadcrumb supports orientation, while an overlay separates the title from the detailed illustration behind it.'
  },
  'pionicon-creative': {
    basis: 'Interface walkthrough',
    scope: 'This project is a branded directory of external destinations. Its main task is choosing where to continue.',
    activities: [
      {
        title: 'Choose a creative-agency destination',
        actor: 'Visitor exploring the agency',
        description: 'The Creative Agency group presents project, LinkedIn, and story links as individual destinations.'
      },
      {
        title: 'Choose a store destination',
        actor: 'Visitor interested in shopping',
        description: 'The Store group separates Instagram, Web, and Tokopedia links from the agency-content links.'
      }
    ],
    interfaceReading:
      'The two groups distinguish agency information from shopping destinations. Consistent button shapes give the links a common visual treatment.'
  },
  mevers: {
    basis: 'Interface walkthrough',
    scope: 'The website concept introduces metaverse-related education and provides navigation to supporting content.',
    activities: [
      {
        title: 'Identify the learning topic',
        actor: 'Visitor new to the subject',
        description:
          'The metaverse headline, virtual-learning label, and headset illustration introduce the topic on the opening screen.'
      },
      {
        title: 'Explore supporting content',
        actor: 'Visitor seeking more information',
        description:
          'About, Article, Member, Present, and Our Team entries form the visible navigation. The preview documents a website interface, rather than a working virtual classroom.'
      }
    ],
    interfaceReading:
      'A recognizable virtual-reality visual establishes the theme, while the navigation provides text-based paths beyond the opening illustration.'
  },
  grojunio: {
    basis: 'Interface walkthrough',
    scope:
      'The design introduces a technology-learning program for students and the entry points into its learning offering.',
    activities: [
      {
        title: 'Explore learning opportunities',
        actor: 'Student',
        description: 'Categories, Training, and Events divide the learning offering into separate navigation choices.'
      },
      {
        title: 'Choose an account entry point',
        actor: 'New or returning learner',
        description:
          'Sign In and Register are grouped in the header, alongside the content navigation. The supplied design establishes where account entry begins.'
      }
    ],
    interfaceReading:
      'The central introduction explains who the program is for. Learning-navigation labels and account actions are presented as separate types of choice.'
  },
  jangi: {
    basis: 'Interface walkthrough',
    scope:
      'The homepage introduces school-snack discovery and provides starting actions for exploring the menu and other site information.',
    activities: [
      {
        title: 'Begin snack discovery',
        actor: 'Visitor interested in school snacks',
        description:
          'The food collage and introduction establish the theme, followed by a prominent Mulai action. Menu is also accessible in the header.'
      },
      {
        title: 'Find supporting information',
        actor: 'Visitor exploring the concept',
        description:
          'About, Contact, and Sign In are secondary entry points. The homepage preview establishes these choices without specifying an ordering process.'
      }
    ],
    interfaceReading:
      'The main start action supports the central discovery task. Supporting information stays in the header so it can be found separately from the introduction.'
  }
}
