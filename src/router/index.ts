import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/display/components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hashTag/:id',
      name: 'HashTag',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/hashtag/components/HashTag.vue')
    }
  ]
})

export default router
