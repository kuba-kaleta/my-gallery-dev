import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/galleries',
      name: 'galleries',
      component: () => import('../views/GalleriesView.vue')
    },
    {
      path: '/castles',
      name: 'castles',
      component: () => import('../components/Castles.vue')
    },
    {
      path: '/impr',
      name: 'impr',
      component: () => import('../components/Impr.vue')
    },
    {
      path: '/sacral',
      name: 'sacral',
      component: () => import('../components/Sacral.vue')
    },
    {
      path: '/nature',
      name: 'nature',
      component: () => import('../components/Nature.vue')
    },
    {
      path: '/baltic',
      name: 'baltic',
      component: () => import('../components/Baltic.vue')
    }
  ]
})

export default router
