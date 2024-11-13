# Alejandro-FA.github.io

Source code of my personal portfolio. Deployed at [https://alejandrofernandez.pages.dev/](https://alejandrofernandez.pages.dev/).

## Installation instructions

To know how to set up this project for development, check [INSTALL.md](INSTALL.md).

## Usage

Common development tasks have been unified into single interface of npm scripts for convenience. GitHub Actions also use these scripts to automate the deployment process, so be mindful of the changes you make to them. All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                   |
| :------------------------ | :------------------------------------------------------- |
| `npm ci`                  | Installs the whole project following `package-lock.json` |
| `npm install <package>`   | Adds and installs new dependencies                       |
| `npm run dev`             | Starts local dev server at `localhost:4321`              |
| `npm run build`           | Build your production site to `./dist/`                  |
| `npm run preview`         | Preview your build locally, before deploying             |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`         |
| `npm run astro -- --help` | Get help using the Astro CLI                             |

### Upgrading the project dependencies to the latest (non-major) versions

```bash
npm run upgrade-deps
```

### Running a local development server

```bash
npm run serve
```

> Alternatively, you can run the server in release mode with `npm run serve:release`, which will build the project as in a production environment. This also allows to emulate Cloudflare R2 storage by adding files to a local database. For example:
>
> ```bash
> npx wrangler r2 object put cv-documents/alejandro_fernandez_cv-en.pdf --local --file ~/Sync/Personal/CV/alejandro_fernandez_cv-en.pdf
> ```

### Checking for linting errors

```bash
npm run lint
```

> On first execution, the `shellcheck` binary is automatically downloaded.

### Running tests

```bash
npm run test
```

### Auditing the project for performance, accessibility, SEO, and security

To evaluate the performance of this website, crucial for a good user experience, we recommend the [Lighthouse](https://developers.google.com/web/tools/lighthouse) tool. If you want to audit the webpage locally, open the Chrome Developer Tools in a local server:

```bash
npm run serve:release
```

### Building the project

```bash
npm run build:wasm
npm run build:html
```

You can also use the `build` script and change the rendering engine with the `BUILD_RENDERER` environment variable. For example, to build the project with the `html` renderer, run:

```bash
BUILD_RENDERER=html npm run build
```

> By default, the project is built with the `wasm` renderer.

### Deploying the project

To deploy the project to [Cloudflare Pages](https://pages.cloudflare.com/), run:

```bash
npm run deploy
```

By default, the project is deployed to the current `git` branch. If you want to deploy to another branch, use the `DEPLOY_BRANCH` environment variable. For example, to deploy to the `main` branch (production), run:

```bash
DEPLOY_BRANCH=main npm run deploy
```

### Other tasks

To see the full list of tasks, check the `scripts` section in the [package.json](package.json) file.

## Building a Material Theme

This project uses the Material Design system to create a consistent and visually appealing user interface. Follow the instructions in the [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) to build your own Material theme. For more information, check the [Material Design website](https://m3.material.io/blog/material-theme-builder).

## Using personalized fonts

Fonts are a great way to give a personalized look and feel to a webpage. [Google Fonts](https://fonts.google.com/) offers a wide variety of free fonts that can be easily integrated into webpages.

There are two ways to use Google Fonts in a webpage. The first is to download the font files and host them on your server. The second is to use the Google Fonts API to load the fonts from Google's servers dynamically (see the [google_fonts](https://pub.dev/packages/google_fonts) `flutter` package for more information about this). The first method is recommended for privacy and performance reasons (especially if the webpage is served over a CDN).

### How to download Google Fonts and host them on your server

1. **Select the Fonts**. Explore the [Google Fonts website](https://fonts.google.com/) and decide which fonts (and which styles) you want to use.

2. **Download the fonts in woff2 format**. Use the [`Get embed code` option](https://fonts.google.com/selection/embed) to get a download link of the desired styles of the fonts in `.woff2` format, which is web-optimized for performance. To download only a subset of the characters (and have smaller file sizes), check the [Google Fonts API](https://developers.google.com/fonts/docs/getting_started). For example, to download the Silkscreen font in `.woff2` format and only the glyphs required for the text "Loading portfolio...", send a request to [https://fonts.googleapis.com/css2?family=Silkscreen&text=Loading%20portfolio...](https://fonts.googleapis.com/css2?family=Silkscreen&text=Loading%20portfolio...). The link used to download the fonts of this project is [https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Silkscreen:wght@400;700&subset=latin](https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Silkscreen:wght@400;700&subset=latin).

3. **Convert the fonts to woff format**. As of August 2024, the current stable version of Flutter does not support `.woff2` fonts. Therefore, the recommended option is to use the old web-optimized format: `.woff`. It should be noted that `.woff` is only supported on mobile and web platforms (but not on desktop). To convert the files we need to follow these steps:

   1. Install the [woff2 tool](https://github.com/google/woff2) developed by Google (`woff2_decompress path/to/font.woff2`).
   2. Use `woff2_decompress path/to/font.woff2` to decompress the `.woff2` files to `.ttf`.
   3. Use an online tool like [FontSquirrel WebFont Generator](https://www.fontsquirrel.com/tools/webfont-generator) to convert the `.ttf` files to `.woff` (use the `Basic` preset).
   4. Download the converted files.

   > **Note**: FontSquirrel does not support variable fonts. To use variable fonts with Flutter web, you need to stick with `.ttf` files.

### A note about Roboto font in Flutter

The Roboto font is the default font used in Flutter. As of August 2024, it is not possible to prevent Flutter from trying to load the Roboto font. Currently, the best solution is to download the Roboto font and host it on your server.

For more information, check the following GitHub issues:

- [Allow dynamic loading of font assets from pubspec.yaml](https://github.com/flutter/flutter/issues/122282)

- [Proposal to Stop downloading google font roboto when the app uses global custom font](https://github.com/flutter/flutter/issues/136118)

### Icons

Most custom icons have been downloaded from [Streamline](https://www.streamlinehq.com/) or from [Font Awesome](https://fontawesome.com/icons).

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
