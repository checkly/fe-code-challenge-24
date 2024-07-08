import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useReportingStore } from '@/store/reporting'
import type { ReportingStore } from '@/types'

import Reporting from '../Reporting.vue'
import { nextTick } from 'vue'

describe('Reporting', () => {
  let wrapper: VueWrapper
  let store: ReportingStore

  beforeEach(() => {
    wrapper = mount(Reporting, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              state: [],
              isloading: false,
              isReadt: false,
              error: null
            }
          })
        ]
      }
    })
    store = useReportingStore() // uses the testing pinia
  })

  it('starts loading imediately', () => {
    expect(wrapper.text()).toContain('Loading...')
  })

  it('renders error', async () => {
    store.isLoading = false
    store.error = 'Something went wrong'
    await nextTick()
    expect(wrapper.text()).toContain('Something went wrong')
    expect(wrapper.text()).not.toContain('Loading...')
  })

  it('renders checks', async () => {
    store.isLoading = false
    store.isReady = true
    store.state = [
      {
        id: '7598955d-56dc-4cf9-9c5e-59fd6c70a385',
        name: 'Check 0',
        type: 'BROWSER',
        success: 0.49516666666666664,
        avg: 500.7848333333333,
        p95: 951,
        p99: 989
      },
      {
        id: '9788dbbd-c001-49d6-a748-11b403580391',
        name: 'Check 1',
        type: 'API',
        success: 0.4960333333333333,
        avg: 499.9001333333333,
        p95: 949,
        p99: 990
      }
    ]
    await nextTick()

    expect(wrapper.text()).toContain('Check 0')
    expect(wrapper.text()).toContain('Check 1')
    expect(wrapper.text()).not.toContain('Loading...')
  })
})
