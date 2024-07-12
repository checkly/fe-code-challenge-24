import { createWebHistory, createRouter } from 'vue-router'

const Reporting = () => import('@/pages/Reporting.vue')
const ActiveCheckStats = () => import('@/partials/ActiveCheckStats.vue')

const routes = [
  { name: 'home', path: '/', redirect: '/checks' },
  {
    name: 'checks',
    path: '/checks',
    component: Reporting,
    props: true,
    children: [
      {
        path: '/:activeId/stats',
        name: 'check-stats',
        component: ActiveCheckStats,
        props: true
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
