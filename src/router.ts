import { createMemoryHistory, createRouter } from 'vue-router'

import Reporting from '@/pages/Reporting.vue'

const routes = [{ path: '/', component: Reporting }]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
