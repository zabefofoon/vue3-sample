import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/display/components/HomeView.vue'
import { useAuthStore } from '@/auth/store/auth.store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/auth/components/Login.vue')
    },
    {
      path: '/hashTag/:id',
      name: 'HashTag',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/hashtag/components/HashTag.vue'),
      beforeEnter: async (to, from, next) => {
        const authStore = useAuthStore()
        const res = await authStore.refreshToken().catch((error) => {
          console.error(error)
          next('/login')
        })
        res?.error ? next('/login') : next()
      }
    }
  ]
})

export default router
