import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DashboardComponent',
      component: () => import('../views/backend/dashboard/DashboardComponent.vue')
    }
  ]
})

export default router
