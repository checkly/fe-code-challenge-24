import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useReportingStore } from '@/store/reporting'
import type { TStore, Check } from '@/types'

import Reporting from '../Reporting.vue'
import BaseSpinner from '@/components/library/spinner/Spinner.vue'
import BaseIcon from '@/components/library/icon/Icon.vue'
import { nextTick } from 'vue'
import { router } from '@/router'

describe('Reporting', () => {
  let wrapper: VueWrapper
  let store: TStore<Check[]>

  beforeEach(() => {
    const initialState: TStore<Check[]> = {
      state: [],
      isLoading: false,
      isReady: false,
      error: null
    }
    wrapper = mount(Reporting, {
      global: {
        components: { BaseSpinner, BaseIcon },
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
            initialState
          })
        ]
      }
    })
    store = useReportingStore() // uses the testing pinia
  })

  it('starts loading imediately', () => {
    expect(store.isLoading).toBe(true)
    expect(wrapper.findComponent(BaseSpinner).exists()).toBe(true)
  })

  it('renders error', async () => {
    store.isLoading = false
    store.error = 'Something went wrong'
    await nextTick()
    expect(wrapper.text()).toContain('Something went wrong')
    expect(wrapper.findComponent(BaseSpinner).exists()).toBe(false)
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
    expect(wrapper.findComponent(BaseSpinner).exists()).toBe(false)
  })
})
