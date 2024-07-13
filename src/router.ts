import { createWebHistory, createRouter } from 'vue-router'
import { useTitle } from '@vueuse/core'

const Checks = () => import('@/pages/Checks.vue')
const NotFound = () => import('@/pages/NotFound.vue')
const CheckStats = () => import('@/pages/CheckStats.vue')

const routes = [
  { name: 'home', path: '/', redirect: '/checks' },
  {
    name: 'checks',
    path: '/checks',
    component: Checks,
    props: true,
    meta: { title: 'Reporting' },
    children: [
      {
        path: ':activeId/stats',
        name: 'check-stats',
        component: CheckStats,
        meta: { title: "Last Week's Stats" },
        props: true
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: { title: 'Page Not Found' },
    component: NotFound
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (typeof to.meta.title === 'string') {
    useTitle(to.meta.title, { titleTemplate: '%s | Checkly' })
  }
})
