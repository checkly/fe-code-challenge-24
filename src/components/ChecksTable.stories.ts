import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import ChecksTable from './ChecksTable.vue'
import type { Check } from '@/types'

const meta = {
  title: 'ChecksTable',
  component: ChecksTable,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof ChecksTable>

export default meta
type Story = StoryObj<typeof meta>

const checks: Check[] = [
  {
    id: '599ff38c-35e9-4d9d-b5db-c942b02e1adf',
    name: 'Check 15',
    type: 'BROWSER',
    success: 0.5041666666666667,
    avg: 498.2563,
    p95: 948,
    p99: 990
  },
  {
    id: '0bff72c1-5c9f-47d6-9de7-de2c014d6fb9',
    name: 'Check 16',
    type: 'API',
    success: 0.5038,
    avg: 497.6490333333333,
    p95: 950,
    p99: 990
  },
  {
    id: '5850bd03-243a-49b5-8c67-7ffd0a08fb83',
    name: 'Check 17',
    type: 'BROWSER',
    success: 0.5018,
    avg: 501.08936666666665,
    p95: 949,
    p99: 989
  },
  {
    id: '297d0228-eba6-49ae-bbf3-892e6d87dcc1',
    name: 'Check 18',
    type: 'API',
    success: 0.5011666666666666,
    avg: 505.00946666666664,
    p95: 950,
    p99: 990
  }
]

export const Simple: Story = {
  render: (args: any) => ({
    setup() {
      const localValue = ref('')
      return { args, localValue }
    },
    components: { ChecksTable },
    template:
      '<ChecksTable v-bind="args" :activeId="localValue" @update:activeId="id => localValue = id"><div class="py-3 text-center">Last week\'s stats placeholder.</div></ChecksTable>'
  }),
  args: {
    checks
  }
}

export const Loading: Story = {
  render: (args: any) => ({
    setup() {
      const localValue = ref('')
      return { args, localValue }
    },
    components: { ChecksTable },
    template:
      '<ChecksTable v-bind="args" :activeId="localValue" @update:activeId="id => localValue = id"><div class="py-3 text-center"><BaseSpinner /></div></ChecksTable>'
  }),
  args: {
    checks,
    activeId: '599ff38c-35e9-4d9d-b5db-c942b02e1adf'
  }
}
