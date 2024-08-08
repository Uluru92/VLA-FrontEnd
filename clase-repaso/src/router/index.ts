import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PantalonetasView from '@/views/PantalonetasView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/holamundo',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/pantalonetas',
    name: 'pantalonetas',
    component: PantalonetasView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
