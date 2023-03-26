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
      path: '/lowerSilesia',
      name: 'lowerSilesia',
      component: () => import('../components/LowerSilesia.vue')
    },
    {
      path: '/silesia',
      name: 'silesia',
      component: () => import('../components/Silesia.vue')
    },
    {
      path: '/lesserPoland',
      name: 'lesserPoland',
      component: () => import('../components/LesserPoland.vue')
    },
    {
      path: '/pomeranian',
      name: 'pomeranian',
      component: () => import('../components/Pomeranian.vue')
    }
  ]
})

export default router
