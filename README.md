# Checkly Frontend Challenge

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TypeScript

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Project Setup

```sh
npm install
```

Create `.env` file

```sh
cp .env.example .env
```

### Mock backend API

Run the `backend` script. It randomly generates and then serves the data required by the frontend app.

```bash
$ npm run backend
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Building for Production

Type-check, compile and minify

```sh
npm run build
```

Open the build in the browser

```sh
npm run preview
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### 📦 Components

Reusable components are located on `src/components/library`

Existing components can be imported on the vue application via

```js
import Icon from '@/components/library/icon'
```

#### Storybook

```bash
$ npm run storybook
```
