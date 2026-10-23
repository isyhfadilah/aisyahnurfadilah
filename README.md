# Aisyah Nur Fadilah — Portfolio

Personal portfolio website showcasing UI/UX design and front-end development work. The site includes a selected-work homepage, a filterable project archive, and dedicated About, Resume, and Contact pages.

## Features

- Responsive portfolio pages built with the Next.js App Router.
- Project archive with filters for all projects, websites, and design work.
- Neo-Brutalist visual style with motion effects and reduced-motion support.
- Contact form that opens the visitor's email application with a prefilled message.
- Resume link to Google Drive.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Bun

## Getting started

### Requirements

- [Bun](https://bun.sh/) installed on your machine.
- Git, if you are cloning the repository.

Check that Bun is installed:

```bash
bun --version
```

### Install and run locally

```bash
git clone https://github.com/isyhfadilah/aisyahnurfadilah.git
cd aisyahnurfadilah
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the development server. |
| `bun run build` | Create a production build. |
| `bun run start` | Run the production build locally. |
| `bun run lint` | Run ESLint across the project. |
| `bun run test:tsc` | Check TypeScript types without emitting files. |

## Project structure

```text
src/
├── app/
│   ├── (client)/          # Homepage and About, Contact, Portfolio, Resume routes
│   └── api/auth/          # NextAuth credentials endpoint
├── components/
│   ├── common/            # Shared layout, navigation, and page sections
│   └── ui/                # Reusable UI components
├── data/
│   └── project.ts         # Portfolio project content
├── services/              # API client and authentication configuration
└── shared/styles/         # Global and component styles
```

## Environment variables

The portfolio pages can be run without environment variables. The credentials authentication endpoint requires the following values if you use it:

| Variable | Description |
| --- | --- |
| `API_URL` | Base URL of the API that provides the `/users/login` endpoint. |
| `NEXTAUTH_SECRET` | Secret used by NextAuth to sign and encrypt session tokens. |

Create a `.env.local` file in the project root for local values. Do not commit secrets or private credentials.

## Updating portfolio content

Edit the project entries in `src/data/project.ts`. Each entry can include a title, project type (`website` or `design`), description, year, image, external link, and featured status.

## Deployment

Deploy as a Next.js application on a platform that supports the Next.js App Router. Configure the environment variables above in the deployment environment if the authentication endpoint is required.
