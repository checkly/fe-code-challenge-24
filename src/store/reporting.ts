import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Check {
  id: string
  name: string
  type: 'BROWSER' | 'API'
  success: number
  avg: number
  p95: number
  p99: number
}

export const useReportingStore = defineStore('reporting', () => {
  const checks = ref<Check[]>([])

  return { checks }
})
