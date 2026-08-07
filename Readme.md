# ManazTech Web

## Overview

ManazTech Web is a modern web application built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. The project follows modern software engineering principles with an emphasis on scalability, maintainability, performance, accessibility, and clean architecture.

This repository serves as the primary codebase for the ManazTech website and is maintained using industry-standard development practices.

---

# Tech Stack

| Technology   | Purpose                |
| ------------ | ---------------------- |
| Next.js      | React Framework        |
| React        | User Interface         |
| TypeScript   | Type Safety            |
| Tailwind CSS | Styling                |
| shadcn/ui    | Reusable UI Components |
| ESLint       | Code Quality           |
| Prettier     | Code Formatting        |
| PostCSS      | CSS Processing         |
| PNPM         | Package Manager        |

---

# Project Structure

```
manaztech-web/
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── blocks/
│   │   └── Header.tsx
│   │
│   └── ui/
│       ├── button.tsx
│       ├── dropdown-menu.tsx
│       ├── ModeToggle.tsx
│       └── theme-provider.tsx
│
├── lib/
│   └── utils.ts
│
├── public/
│
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

# Directory Guide

### app/

Contains all application routes, layouts, pages, metadata, and global styles using the Next.js App Router.

---

### components/

Contains reusable React components.

#### blocks/

Contains larger page sections.

Examples:

- Header
- Footer
- Hero
- Services
- Testimonials

#### ui/

Contains reusable UI components used throughout the application.

Examples:

- Buttons
- Dropdowns
- Cards
- Inputs
- Theme Provider

---

### lib/

Contains shared utility functions and helper methods.

---

### public/

Stores static assets including:

- Images
- SVGs
- Icons
- Fonts
- Videos

---

# Prerequisites

Before running the project, ensure the following are installed:

- Node.js 20 or later
- PNPM (Recommended)

---

# Installation

Clone the repository.

```bash
git clone https://github.com/mansir93/manaztech-web-rebrand.git
```

Navigate to the project directory.

```bash
cd manaztech-web
```

Install dependencies.

Using PNPM

```bash
pnpm install
```

Using NPM

```bash
npm install
```

---

# Running the Project

Development

```bash
pnpm dev
```

or

```bash
npm run dev
```

Open your browser.

```
http://localhost:3000
```

---

# Production Build

Build the application.

```bash
pnpm build
```

Start the production server.

```bash
pnpm start
```

---

# Available Scripts

Install dependencies

```bash
pnpm install
```

Run development server

```bash
pnpm dev
```

Create production build

```bash
pnpm build
```

Run production server

```bash
pnpm start
```

Run ESLint

```bash
pnpm lint
```

Automatically fix lint issues

```bash
pnpm lint --fix
```

Format code

```bash
pnpm prettier --write .
```

---

# Development Standards

Every contribution should follow these standards.

## TypeScript

- Use strict typing.
- Avoid using `any`.
- Use interfaces or types for props and API responses.
- Keep components strongly typed.

---

## Components

- Build reusable components.
- Keep components small and focused.
- Separate UI from business logic.
- Avoid duplicated code.

---

## Tailwind CSS

- Keep utility classes organized.
- Avoid unnecessary duplication.
- Extract repeated UI into reusable components.

---

## Code Quality

Before pushing code:

- No TypeScript errors
- No ESLint errors
- No unused imports
- No unused variables
- No console.log statements
- Remove commented-out code
- Ensure the project builds successfully

---

# Naming Conventions

## Components

```
Header.tsx
Footer.tsx
HeroSection.tsx
ContactForm.tsx
```

Use PascalCase.

---

## Hooks

```
useTheme.ts
useWindowSize.ts
```

Use camelCase with the `use` prefix.

---

## Utility Files

```
formatDate.ts
calculatePrice.ts
helpers.ts
```

Use camelCase.

---

## Variables

```ts
const userProfile
const isLoading
const totalPrice
```

Use camelCase.

---

## Constants

```ts
API_URL
DEFAULT_THEME
MAX_FILE_SIZE
```

Use UPPER_SNAKE_CASE.

---

# Git Workflow

Create a new branch before starting work.

Examples

```
feature/header
feature/footer
feature/contact-page

fix/mobile-menu

refactor/navigation

hotfix/login
```

Do not commit directly to the main branch.

---

# Commit Message Convention

Use descriptive commit messages.

Examples

```
feat: add responsive navigation

feat: implement footer section

fix: resolve mobile menu issue

refactor: simplify navigation component

style: format code with Prettier

docs: update README

chore: update dependencies
```

---

# Pull Request Checklist

Before submitting a Pull Request, ensure:

- Project builds successfully
- ESLint passes
- TypeScript passes
- No use of `any`
- Responsive on all screen sizes
- Accessibility considered
- Components are reusable
- No duplicated code
- Code is formatted with Prettier
- All changes are tested

---

# Deployment

Build the application.

```bash
pnpm build
```

Start the production server.

```bash
pnpm start
```

The application is deployment-ready and can be hosted on platforms that support Next.js.

---

# Contributing

Contributions should follow the project's coding standards and development workflow.

Before submitting changes:

- Create a feature branch.
- Write clean and maintainable code.
- Follow TypeScript best practices.
- Keep components reusable.
- Run ESLint.
- Format code using Prettier.
- Verify the project builds successfully.
- Submit a Pull Request for review.
