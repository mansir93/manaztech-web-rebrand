# TEAM GUIDELINES

## Project

ManazTech Website Rebuild

---

# Team Overview

This project is being developed by a team of five developers using:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

Our goal is to deliver a scalable, maintainable, responsive, and production-ready website while following modern software engineering best practices.

---

# Team Members

## 1. Team Lead / Code Reviewer

**Responsibilities**

- Lead the frontend development process.
- Review all Pull Requests before merging.
- Ensure coding standards are followed.
- Review TypeScript implementation.
- Ensure no use of `any` unless approved.
- Maintain project architecture and folder structure.
- Configure and maintain ESLint and Prettier.
- Build and maintain the Header and Footer.
- Resolve merge conflicts when necessary.
- Ensure reusable components are used.
- Verify responsive behavior across devices.
- Ensure accessibility best practices are followed.
- Coordinate communication between developers.
- Approve code before merging into the main branch.

**Deliverables**

- Header
- Footer
- Code Reviews
- Project Standards
- Pull Request Approval

---

## 2. Frontend Developer – Home Page

**Responsibilities**

Develop the main landing page.

Assigned sections include:

- Hero Section
- About Section
- Services
- Features
- Call to Action

Requirements

- Responsive layout
- Accessible components
- Clean TypeScript
- Reusable components
- Mobile-first design

---

## 3. Frontend Developer – Website Pages

**Responsibilities**

Develop additional website pages.

Examples include:

- About
- Contact
- Team
- Careers
- FAQ

Requirements

- Responsive layout
- Consistent styling
- Proper routing
- Strong TypeScript typing

---

## 4. UI Components Developer

**Responsibilities**

Build reusable UI components.

Examples

- Buttons
- Cards
- Inputs
- Forms
- Navigation
- Dropdowns
- Dialogs
- Modals

Requirements

- Reusable components
- Accessibility
- Responsive behavior
- Consistent styling
- Follow design system

---

## 5. Integration & Quality Assurance Developer

**Responsibilities**

- Integrate completed sections.
- Test application functionality.
- Fix UI bugs.
- Perform responsive testing.
- Perform browser compatibility testing.
- Verify accessibility.
- Optimize performance.
- Ensure production build succeeds.

Before approving any feature:

- No TypeScript errors
- No ESLint errors
- No console errors
- No broken links
- No layout issues
- Successful production build

---

# Development Standards

Every developer must follow these standards.

## TypeScript

- Use strict typing.
- Avoid using `any`.
- Use interfaces or types.
- Type component props correctly.
- Type API responses.

---

## React

- Build reusable components.
- Keep components focused on a single responsibility.
- Avoid duplicate code.
- Separate business logic from UI.

---

## Tailwind CSS

- Use utility classes consistently.
- Keep layouts responsive.
- Reuse components instead of repeating styles.

---

## Code Quality

Before pushing code:

- No TypeScript errors
- No ESLint errors
- No unused imports
- No unused variables
- No commented-out code
- No console.log statements
- Project builds successfully

---

# Git Workflow

Every developer must create a feature branch.

Examples

```
feature/header
feature/footer
feature/home
feature/about
feature/services
feature/contact
feature/team
feature/ui-components
```

Never commit directly to the `main` branch.

---

# Commit Message Convention

Use meaningful commit messages.

Examples

```
feat: add responsive header

feat: build services section

fix: resolve navigation issue

refactor: simplify Hero component

style: format code with Prettier

docs: update README

chore: update dependencies
```

---

# Pull Request Process

Before opening a Pull Request:

- Ensure the project builds successfully.
- Run ESLint.
- Format code using Prettier.
- Resolve all TypeScript errors.
- Test responsiveness.
- Remove unused code.
- Verify accessibility.

The Team Lead will review all Pull Requests before they are merged.

---

# Communication

All developers are expected to:

- Communicate progress regularly.
- Raise blockers as early as possible.
- Ask questions when requirements are unclear.
- Notify the Team Lead before making significant architectural changes.
- Keep commits focused on a single feature or fix.

---

# Definition of Done

A task is considered complete only when:

- Functionality is implemented.
- Code has been reviewed.
- TypeScript passes without errors.
- ESLint passes.
- Code is formatted with Prettier.
- Responsive design has been verified.
- Accessibility has been considered.
- The project builds successfully.
- The Pull Request has been approved by the Team Lead.
