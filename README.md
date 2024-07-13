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

## Routing

- `/checks` - list of all the checks, presented as a table
- `/checks/:activeId/stats` - stats related to the given check, presented as charts within an expanded table row
- `/` redirects to `/checks`
- catch everything else 404 page
- page title is added using a combination of vue-router's meta fields, navigation guards and a third-party [useTitle](https://vueuse.org/core/useTitle/) composable

## State management

- App uses [composable](https://vueuse.org/core/useAsyncState/) provided by a third-party
- `checks` store manages latest-checks related state and actions.
- `stats` store manages the state and actions to each particular check.
- Artificial timeouts are added to imitate response delay.

## Project's structure

- `components` - reusable, mostly stateless or with a minimal local state. Fully covered in Storybook.
- `pages` - page-level components (to use in `@/router.ts`)
- `partials` - stateful fragments to be inserted into pages. One partial is coupled with one corresponding store. Potentially testable in Storybook (but I didn't get there), could be tested with unit/feature tests as well, or both.
- `store` - store modules (Pinia)
- `css` - styles (Tailwind)
- `api.ts` - API calls and the `request` function that they use
- `formatters.ts` - reusable util functions
- `globals.ts` - holds plugins to be globally registered (currently just one)
- `router.ts` - router
- `types.ts` - reusable types and interfaces

## Accessibility

The reccomended approach:

- use native HTML5 where possible
- test pages with Firefox's accessibility tool
- test components from the keyboard (`tab`, `space`, `esc` etc.)
