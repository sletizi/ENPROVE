// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: 'my_words',
          name: 'Le tue parole',
          component: () => import('@/views/MyWords.vue'),
        },
        {
          path: 'play',
          name: 'Gioca con le parole',
          component: () => import('@/views/Grammar.vue'),
        },
        {
          path: 'stats',
          name: '',
          component: () => import('@/views/users/faq/Index.vue'),
        }
      ],
    },
    {
      path: '/esercenti',
      component: () => import('@/layouts/Index.vue'),
      children: [
        {
          path: '',
          name: 'BusinessHome',
          component: () => import('@/views/business/home/Index.vue'),
        },
        {
          path: 'login',
          name: 'BusinessLogin',
          component: () => import('@/views/business/business_login/Index.vue'),
        },
        {
          path: 'sigunp',
          name: 'BusinessSignUp',
          component: () => import('@/views/business/business_signup/Index.vue'),
        },
        {
          path: 'vouchers',
          name: 'Vouchers',
          component: () => import('@/views/business/vouchers/Index.vue'),
        }
      ]
    }

  ],
})

export default router
