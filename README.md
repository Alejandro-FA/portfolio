# Portfolio website

Source code for my personal portfolio website, hosted at [https://alejandrofernandez.dev/](https://alejandrofernandez.dev/).

## Installation

For setup instructions, refer to [INSTALL.md](INSTALL.md).

## 🚀 Project Structure

This project includes the following primary folders and files:

```plaintext
/
├── public
│   ├── assets
│   ├── favicon.svg
│   └── _headers
├── src
│   ├── components
│   ├── content
│   ├── content.config.ts
│   ├── i18n
│   ├── layouts
│   ├── pages
│   └── styles
└── package.json
```

- Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

- Components, regardless of framework (Astro/React/Vue/Svelte/Preact), go in `src/components/`.

- Static assets, like images, should be placed in `public/`.

## 🧞 Usage

Common development tasks are unified into npm scripts. All commands are executed from the project root.

| Command                 | Action                                                 |
| :---------------------- | :----------------------------------------------------- |
| `npm ci`                | Installs dependencies as per `package-lock.json`       |
| `npm install <package>` | Adds and installs a new dependency                     |
| `npm run upgrade-deps`  | Upgrades dependencies to the latest non-major versions |
| `npm run dev`           | Starts a local dev server at localhost:4321            |
| `npm run build`         | Builds the production site to `./dist/`                |
| `npm run preview`       | Previews the production build locally                  |
| `npm run astro ...`     | Executes Astro CLI commands (e.g., `astro add`)        |
| `npm run lint`          | Runs static code analysis                              |
| `npm run deploy`        | Deploys the site to Cloudflare Pages                   |

> **Note**: The `shellcheck` binary is downloaded automatically on the first execution of `npm run lint`.

## Deployment to Cloudflare Pages

This project is designed to be deployed to [Cloudflare Pages](https://pages.cloudflare.com/). You can use its Git integration to make a new deployment for each commit to the `main` branch. Additionally, you can make a deployment with the following command:

```bash
npm run deploy
```

Cloudflare Pages creates a new deployment branch for each of the git branches that you deploy from. The `main` branch corresponds to the **Production** environment, and any other branch is a **Preview** environment. If you want to deploy the `main` branch to a Preview environment (or viceversa), specify the target branch with the `DEPLOY_BRANCH` environment variable (by default it deploys to the current branch).

```bash
DEPLOY_BRANCH=test npm run deploy
```

## Testing a production build

To test the website in a production-like environment, run:

```bash
npm run preview
```

The previous command deploys the project to a local server using [Wrangler](https://developers.cloudflare.com/workers/wrangler/), a CLI tool by Cloudflare. [Wrangler](https://developers.cloudflare.com/workers/wrangler/) also allows to emulate [Cloudflare R2](https://www.cloudflare.com/developer-platform/products/r2/) buckets, and you can add objects to the emulated local storage as follows:

```bash
npx wrangler r2 object put <bucket-name>/<object-name> --local --file /path/to/file
```

Auditing the production build with [Lighthouse](https://developers.google.com/web/tools/lighthouse) is also recommended.

## Creating and customizing a theme

This project uses the Material Design system for defining a color theme. Follow the instructions in the [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) to build your own Material theme. For more information, check the [Material Design website](https://m3.material.io/blog/material-theme-builder).

## Using custom fonts

For a personalized typography, you can integrate open-source fonts from [Fontsource](https://fontsource.org/). Fontsource packages multiple fonts into individual NPM packages for easy self-hosting.

### Icons

Project icons have been sourced from [Phosphor Icons](https://phosphoricons.com/) and [Font Awesome](https://fontawesome.com/icons).
