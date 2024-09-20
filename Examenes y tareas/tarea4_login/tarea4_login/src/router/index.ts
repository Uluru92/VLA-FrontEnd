import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import FormulariosView from '../views/FormulariosView.vue'
import DirectivasView from '../views/DirectivasView.vue'
import EmitsView from '../views/EmitsView.vue'
import LoginView from '../views/LoginView.vue'
import AlmacenamientoView from '../views/AlmacenamientoView.vue'
import GeneralView from '../views/GeneralView.vue'

const routes: Array<RouteRecordRaw> = [  
  {
    path: '/formularios',
    name: 'formularios',
    component: FormulariosView
  },
  {
    path: '/directivas',
    name: 'directivas',
    component: DirectivasView
  },
  {
    path: '/emits',
    name: 'emits',
    component: EmitsView
  },
  {
    path: '/almacenamiento',
    name: 'almacenamiento',
    component: AlmacenamientoView
  },
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
