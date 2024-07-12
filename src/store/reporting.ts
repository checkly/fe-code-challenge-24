import { defineStore } from 'pinia'
import { useAsyncState } from '@vueuse/core'
import { getChecks } from '@/api'

export const useReportingStore = defineStore('reporting', () => {
  // https://vueuse.org/core/useAsyncState/#useasyncstate
  const api = useAsyncState(getChecks, [])
  return { ...api }
})
