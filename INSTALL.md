# Development environment setup

## Development tools (pre-requisites)

- [Node.js](https://nodejs.org/en/download/package-manager) with `npm` (latest LTS version recommended).

## First-time setup

1. **Clone the repository**

   If you haven’t already, clone the repository to your local machine:

   ```bash
   git clone git@github.com:Alejandro-FA/Alejandro-FA.github.io.git
   cd Alejandro-FA.github.io
   ```

2. **Install the project dependencies**

   ```bash
   npm ci
   ```

## Setting Up Git Hooks

This project includes custom Git hooks to ensure code quality and consistency. To use these hooks, you’ll need to configure Git to use the provided hooks directory.

### Steps to configure git hooks

1. **Configure `git` to use the custom hooks directory**

   ```bash
   git config core.hooksPath .githooks
   ```

2. **Verify the configuration**

   To ensure that the configuration is set up correctly, you can check your `git` settings:

   ```bash
   git config --get core.hooksPath
   ```

   This should output `.githooks`, confirming that Git is using the correct directory.

### What do the hooks do?

The hooks in this project are designed to run automated checks before certain `git` operations. For example:

- **Pre-commit hook:** Before you commit changes, the pre-commit hook will run a static code analysis with `npm run lint`. If the static analysis fails, the commit will be aborted.

- **Pre-push hook:** Before pushing changes to production, it ensures that the project builds successfully using `npm run build`.

By setting up these hooks, you help maintain code quality and prevent potential issues from being published to production.

# Development dependencies overview

### ESLint and related Packages

- `eslint`: A widely-used tool for identifying and fixing problems in JavaScript code.

- `@eslint/js`: Provides JavaScript-specific configurations and rules for ESLint.

- `@types/eslint__js`: TypeScript type definitions for @eslint/js, enabling type checking and editor warnings in TypeScript projects.

- `typescript-eslint`: Integrates ESLint with TypeScript, allowing ESLint to lint TypeScript code effectively.

These packages collectively enable **linting** support in code editors (e.g. Zed) and through the `eslint` command-line interface, ensuring code quality and consistency.

### Prettier Plugin for Astro

- `prettier-plugin-astro`: A plugin for Prettier that adds formatting support for `.astro` files, ensuring consistent code style in Astro components.

This plugin allows code editors to format `.astro` files automatically, maintaining a uniform code style across your project.

### ESLint Plugin for Astro (EXPERIMENTAL)

- `eslint-plugin-astro`: A plugin for ESLint that adds linting support for `.astro` files, ensuring code quality and consistency in Astro components.

- `@typescript-eslint/parser`: A parser for ESLint that enables linting of TypeScript code inside `.astro` files.
