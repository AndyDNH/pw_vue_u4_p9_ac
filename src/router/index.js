import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConsultaIdView from '@/views/ConsultaIdView.vue'
import GuardarEstudianteView from '@/views/GuardarEstudianteView.vue'
import ActualizarEstudianteView from '@/views/ActualizarEstudianteView.vue'
import ActualizarEstudianteParcialView from '@/views/ActualizarEstudianteParcialView.vue'
import BorrarEstudianteView from '@/views/BorrarEstudianteView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/consid',
    name: 'consid',
    component: ConsultaIdView
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: GuardarEstudianteView
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: ActualizarEstudianteView
  },
  {
    path: '/parcial',
    name: 'parcial',
    component: ActualizarEstudianteParcialView
  },
  {
    path: '/borrar',
    name: 'borrar',
    component: BorrarEstudianteView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
