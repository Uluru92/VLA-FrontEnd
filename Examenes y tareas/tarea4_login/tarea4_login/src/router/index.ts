import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import GeneralView from '../views/GeneralView.vue'

const routes: Array<RouteRecordRaw> = [  
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'general',
    component: GeneralView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
