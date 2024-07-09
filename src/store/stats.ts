import { defineStore } from 'pinia'
import { useAsyncState } from '@vueuse/core'
import { getStats } from '@/api'

export const useStatsStore = defineStore('stats', () => {
  const api = useAsyncState(getStats, [])
  function statsByCheckId(checkId: string) {
    return api.state.value.filter((stat) => stat.checkId === checkId)
  }
  return { ...api, statsByCheckId }
})
