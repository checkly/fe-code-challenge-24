export interface Check {
  id: string
  name: string
  type: 'BROWSER' | 'API'
  success: number
  avg: number
  p95: number
  p99: number
}

export interface TStore<T> {
  state: T
  error: unknown
  isLoading: boolean
  isReady: boolean
}
