import { createWebHistory, createRouter } from 'vue-router'

const Checks = () => import('@/pages/Checks.vue')
const NotFound = () => import('@/pages/NotFound.vue')
const ActiveCheckStats = () => import('@/partials/ActiveCheckStats.vue')

const routes = [
  { name: 'home', path: '/', redirect: '/checks' },
  {
    name: 'checks',
    path: '/checks',
    component: Checks,
    props: true,
    children: [
      {
        path: '/:activeId/stats',
        name: 'check-stats',
        component: ActiveCheckStats,
        props: true
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
