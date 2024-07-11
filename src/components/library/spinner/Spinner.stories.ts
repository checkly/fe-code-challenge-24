import type { Meta, StoryObj } from '@storybook/vue3'
import Spinner from './Spinner.vue'

const meta = {
  title: 'Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  }
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
