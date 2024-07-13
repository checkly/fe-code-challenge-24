import { defineStore } from 'pinia'
import { useAsyncState } from '@vueuse/core'
import { getStats } from '@/api'
import { ref, computed } from 'vue'

export const useStatsStore = defineStore('stats', () => {
  // https://vueuse.org/core/useAsyncState/#useasyncstate
  const api = useAsyncState(getStats, [])
  const activeId = ref('')

  async function load(id: string) {
    if (!id) {
      return
    }
    activeId.value = id
    await api.execute()
  }

  const statsByCheckId = computed(() => {
    return api.state.value.filter((stat) => stat.checkId === activeId.value)
  })

  return { ...api, statsByCheckId, load }
})
