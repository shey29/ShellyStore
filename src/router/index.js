import { createRouter, createWebHistory } from 'vue-router'
import TiendaPage from '../views/TiendaPage.vue'

const routes = [
  {
    path: '/',
    name: 'tienda',
    component: TiendaPage
  },
  {
    path: '/car',
    name: 'carrito',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CarritoPage.vue')
  },
  {
    path: '/Home',
    name: 'principal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
