# MSU WiCS Frontend

React frontend for the Morgan State University Women in Computer Science website. This app is a redesign of the organization’s previous Wix site, with shared layout (navbar and footer), home slideshow, executive board roster, and founder story.

## Tech stack

- **React 19** with Vite 7
- **React Router 7** for client-side routing
- **styled-components** for component styles
- **react-icons** for social and LinkedIn icons
- Global tokens and resets in `src/index.css`

There is no backend in this folder. Pages load static JSON and images from `public/`.

## Getting started

Prerequisites: Node.js 18+ (or current LTS).

```bash
cd frontend
npm install
npm run dev
```

Vite serves the app at `http://localhost:5173`.

| Script | Description |
| --- | --- |
| `npm run dev` | Local development with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | ESLint |

## Project structure

```
frontend/
├── public/                 # Static assets (logo, eboard photos, slideshow images)
│   └── images/
│       ├── wics-logo.png
│       ├── eboard/
│       └── slideshow/
├── src/
│   ├── App.jsx             # Router, Navbar, Footer
│   ├── main.jsx
│   ├── index.css           # Color tokens, typography, reset
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Slideshow.jsx   # Home carousel (reads slideshow.json)
│   │   └── FounderStory.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Eboard.jsx      # Reads eboard.json
│   │   └── WicsNews.jsx    # Stub; not routed yet
│   └── data/
│       ├── eboard.json
│       └── slideshow.json
├── index.html
├── vite.config.js
└── package.json
```

## Routes

Wired in `src/App.jsx`:

| Path | Page | Status |
| --- | --- | --- |
| `/` | Home — slideshow, intro, action tiles | Implemented |
| `/about` | About — organization story and founders | Implemented |
| `/eboard` | Executive board for 2025–2026 | Implemented |

Navbar and home tiles also link to pages that are **not implemented yet**:

- `/news` — WiCS News (`WicsNews.jsx` exists as a stub and is not registered in the router)
- `/sponsors` — Our Sponsors
- `/resource` — Resource Hub
- `/gallery` — Gallery
- `/interest-form` — Interest Form (home tile)

## Layout and pages

- **Navbar:** Logo (home), About, Eboard, WiCS News, Our Sponsors, Resource Hub, Gallery.
- **Footer:** MSU WiCS name, Instagram, LinkedIn, and email (`morganstatewics@gmail.com`).
- **Home:** Image slideshow, mission copy, and tiles for Interest Form, Get to Know WiCS, and Call to Sponsors.
- **About:** Founder story (Chelsea Amihere and Abigail Dina) plus org history copy.
- **Eboard:** Card grid from JSON — photo, name, role, LinkedIn.

## Updating content

**Executive board** — edit `src/data/eboard.json`. Each member needs `id`, `name`, `image`, `position`, and `linkedin`. Put photos in `public/images/eboard/` and use paths like `/images/eboard/Name.jpg`.

**Home slideshow** — edit `src/data/slideshow.json`. Each slide needs `id`, `image`, and `caption`. Put images in `public/images/slideshow/` and use paths like `/images/slideshow/photo.jpg`.

**Founders** — currently hardcoded in `src/components/FounderStory.jsx` (`FounderData`). Photos live under `public/images/eboard/`.

After JSON or `public/` image changes, refresh the dev server; Vite picks up JSON imports on save.

## Styling notes

Primary blues (`#1976d2`, `#e3f2fd`) are used in styled-components and in CSS variables in `src/index.css`. Page-level layout and cards are mostly styled-components. `src/App.css` is leftover Vite template CSS and is not the source of truth for the current UI.
