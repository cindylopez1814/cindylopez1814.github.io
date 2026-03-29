import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 72 }
    return { top: 0 }
  },
  routes: [
    { path: '/', component: HomeView },
    {
      path: '/case/lirmi',
      component: () => import('../views/CaseLirmiView.vue'),
    },
    {
      path: '/case/cartola',
      component: () => import('../views/CaseCartolaView.vue'),
    },
  ],
})

export default router
