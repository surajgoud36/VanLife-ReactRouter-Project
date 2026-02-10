# VanLife — React Router Project

Minimal rental vans demo using React + Vite with a focus on React Router patterns.

## Overview

VanLife is a small demo app that lists rental vans and provides host pages, protected routes, and nested layouts. It was built during a React Router-focused tutorial and demonstrates common React concepts and routing patterns used in real apps.

## Features

- Browse a list of vans and view van details
- Host dashboard with authenticated-only routes
- Nested routes and layout components for host pages
- Mock API powered by MirageJS for local development
- Optional integration with Firebase Firestore for real data

## Technologies

- React 19 (via Vite)
- Vite (dev server, build)
- React Router DOM v7 (nested routes, layouts, route params)
- MirageJS (mock API - `src/server.js`)
- Firebase (Firestore client used in `src/api.js`)
- ESLint + related plugins
- React Icons for iconography

## React / Architecture Concepts Demonstrated

- Component-based structure (reusable UI components in `src/components`)
- Pages and route-based code organization (`src/pages`)
- Layouts and nested routes (`Layout.jsx`, `HostLayout.jsx`, `HostDetailLayout.jsx`)
- Protected routes via an auth wrapper (`AuthRequiredLayout.jsx`)
- Props and composition (passing data to `CardButton`, `MiniCard`, etc.)
- State and effects using hooks like `useState` and `useEffect`
- React Router patterns: route params (`useParams`), navigation (`useNavigate`), and nested route outlets
- Data fetching approaches: using `fetch` against the Mirage API and Firestore access in `src/api.js`
- Simple client-side authentication mock (login flow backed by MirageJS)

## Project Structure (high level)

src/
- api.js                # Firebase + fetch helpers
- server.js             # MirageJS mock API server (dev)
- main.jsx              # React app entry
- App.jsx               # Router setup and top-level app
- components/           # Reusable UI components and layouts
- pages/                # Route pages (Home, About, Vans, Host, etc.)
- styles/               # CSS files per page/component

## Getting Started

Requirements: Node.js (16+ recommended)

Install and run locally:

```bash
npm install
npm run dev
```

Available scripts (from `package.json`):

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — serve production build locally
- `npm run lint` — run ESLint

## Mock API and Data

During development the app uses MirageJS (see `src/server.js`) to provide `/api` endpoints for vans and login. Mirage seeds example vans and a test user so you can explore the app without a backend.

`src/api.js` also includes Firestore setup (Firebase config + helper functions). You can switch to real Firestore data by configuring your Firebase project and calling the exported helpers.

## Notes & Conventions

- Styling: simple CSS files are located in `src/styles/` and imported where needed.
- Routing: host-related pages are organized under `pages/Host/` and use nested layouts to keep the UI consistent between the host dashboard and host van sub-pages.
- Authentication: the demo uses a naive mock login (do not use for production). See `src/server.js` and `src/api.js` for the flow.

## Where to Look

- App entry & router setup: `src/main.jsx` and `src/App.jsx`
- Mock server: `src/server.js`
- API + Firebase helpers: `src/api.js`
- Components: `src/components/`
- Pages and route files: `src/pages/`


