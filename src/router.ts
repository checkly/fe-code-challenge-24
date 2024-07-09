import { createWebHistory, createRouter } from 'vue-router'

import Reporting from '@/pages/Reporting.vue'

const routes = [
  {
    name: 'reporting',
    path: '/:activeId?',
    component: Reporting,
    props: true
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
