import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/authentication/Login.vue'
import Dashboard from '@/components/dashboard/dashaboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
})

export default router
