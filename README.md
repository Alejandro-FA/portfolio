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

## Using personalized fonts

For a personalized typography, you can integrate free fonts from [Google Fonts](https://fonts.google.com/). There are two ways to use Google Fonts in a website:

- **Self-hosting** fonts (recommended for privacy and performance).

- Using the **Google Fonts API** to dynamicall load fonts.

### Downloading Google Fonts for self-hosting

1. **Select the Fonts**. Explore the [Google Fonts website](https://fonts.google.com/) and decide which fonts (and which styles) you want to use.

2. **Download the fonts in woff2 format**. Use the [`Get embed code` option](https://fonts.google.com/selection/embed) to get a download link of the desired styles of the fonts in `.woff2` format, which is web-optimized for performance. To download only a subset of the characters (and have smaller file sizes), check the [Google Fonts API](https://developers.google.com/fonts/docs/getting_started). For example, to download the Silkscreen font in `.woff2` format and only the glyphs required for the text "Loading portfolio...", send a request to [https://fonts.googleapis.com/css2?family=Silkscreen&text=Loading%20portfolio...](https://fonts.googleapis.com/css2?family=Silkscreen&text=Loading%20portfolio...). The link used to download the fonts of this project is [https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Silkscreen:wght@400;700&subset=latin](https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Silkscreen:wght@400;700&subset=latin).

### Icons

Project icons have been sourced from [Phosphor Icons](https://phosphoricons.com/) and [Font Awesome](https://fontawesome.com/icons).
