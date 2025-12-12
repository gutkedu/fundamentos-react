# Copilot Instructions for React Fundamentals Project

## Architecture Overview

This is a basic React application built with Vite, TypeScript, and functional components. The app structure follows a simple hierarchy:

- `src/App.tsx`: Main app component that renders the header and posts
- `src/components/`: Directory for reusable UI components (e.g., `header.tsx`)
- `src/post.tsx`: Post component for displaying author and content

Components communicate via props only; no state management libraries are used. Example:

```tsx
<Post author="Eduardo" content="lorem ipsum dolor sit amet" />
```

## Component Patterns

- Use functional components with TypeScript interfaces for props
- Optional props use `??` for defaults (e.g., `author ?? "Unknown Author"`)
- Import components relatively (e.g., `import { Header } from "./components/header"`)

## Styling Conventions

- Global styles in `src/styles.css` (e.g., dark theme with `body { background: #121214; color: #fff }`)
- Component-specific styles use CSS modules (e.g., `header.module.css` for `Header` component)
- CSS classes applied via `className` attribute

## Development Workflow

- Start dev server: `npm run dev` (runs on port 3000)
- Build for production: `npm run build` (includes TypeScript compilation)
- Lint code: `npm run lint` (ESLint with React and TypeScript rules)
- Preview build: `npm run preview`

## TypeScript Configuration

- Strict mode enabled with no unused locals/parameters
- JSX compiled as `react-jsx` (no React import needed)
- Target ES2022 with modern module resolution

## ESLint Rules

- Extends recommended JS, TypeScript, React Hooks, and React Refresh rules
- Ignores `dist` directory
- Browser globals available in component files

## Key Files

- `vite.config.ts`: Vite config with React plugin and dev server port
- `tsconfig.app.json`: App-specific TypeScript config (strict, no emit)
- `eslint.config.js`: Flat config with React-specific plugins</content>
  <parameter name="filePath">/home/gutkedu/Programming/react2022-rocketseat/1-fundamentos/.github/copilot-instructions.md
