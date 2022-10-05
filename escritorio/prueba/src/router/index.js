import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/clientes',
    name: 'cliente',
    component: () => import('../views/cliente.vue')
  },
  {
    path: '/usuarios',
    name: 'usuario',
    component: () => import('../views/Usuario.vue')
  },
  {
    path: '/productos',
    name: 'Producto',
    component: () => import('../views/Producto.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
