import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import { GlobalComponents } from '../src/globals'
import '../src/css/style.css'

setup((app) => {
  app.use(GlobalComponents)
})
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
