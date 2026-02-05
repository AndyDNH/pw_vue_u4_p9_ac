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
    component: HomeView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  },
  {
    path: '/consid',
    name: 'consid',
    component: ConsultaIdView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: GuardarEstudianteView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: ActualizarEstudianteView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/parcial',
    name: 'parcial',
    component: ActualizarEstudianteParcialView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/borrar',
    name: 'borrar',
    component: BorrarEstudianteView,
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//configuracion del guardian
//to a la pagina que se quiere acceder
//fron de donde vengo en la navegacion previa
//next es un variable, es algo que me dice si me dirjo a oño a la pagina
//n_n
router.beforeEach((to, from, next) => {
  if (to.meta.requiereAutorizacion) {
    // le envio a una pagina de login si requiere autorizacion
    console.log("redirigiendo a login");

  } else {
    //le dejo que pase sin validaciones
    console.log("pase libre");
    next();

  }
})

export default router
