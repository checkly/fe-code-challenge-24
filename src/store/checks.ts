import { defineStore } from 'pinia'
import { useAsyncState } from '@vueuse/core'
import { getChecks } from '@/api'

export const useChecksStore = defineStore('checks', () => {
  // https://vueuse.org/core/useAsyncState/#useasyncstate
  const api = useAsyncState(getChecks, [], { immediate: false })
  return { ...api }
})
