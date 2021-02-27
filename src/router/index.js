import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true,
      layout: 'main'
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta: {
      auth: true,
      layout: 'main'
    }
  },
  {
    path: '/request/:id',
    name: 'Request',
    component: () => import('../views/Request.vue'),
    meta: {
      auth: true,
      layout: 'main'
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      auth: false,
      layout: 'auth'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})
router.beforeEach((to, from, next) => {
  const requiredAuth = to.meta.auth
  if(requiredAuth && store.getters['auth/isAuthenticated']){
    next()
  } else if(requiredAuth && !store.getters['auth/isAuthenticated']){
    next('/auth?message=auth')
  } else {
    next()  
  }
})
export default router
