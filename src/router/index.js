import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import KakaoOAuthCallback from '@/views/pages/KakaoLogin.vue'
import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,

    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',

        // webpackChunkName: "dashboard"
        component: () => import('@/views/dashboard/Dashboard.vue'),
      },
      {
        path: '/theme',
        name: 'Theme',
        redirect: '/theme/typography',
      },
      {
        path: '/theme/colors',
        name: 'Colors',
        component: () => import('@/views/theme/Colors.vue'),
      },
      {
        path: '/theme/typography',
        name: 'Typography',
        component: () => import('@/views/theme/Typography.vue'),
      },

      /**
       * 유저 관리
       */
      {
        path: '/member',
        name: 'Member',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/member/blackList',
        children: [
          {
            path: '/member/blackList',
            name: 'BlackList',
            component: () => import('@/views/member/BlackList.vue'),
          },
        ],
      },
      {
        path: '/payment',
        name: 'Payment',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/payment/management',
        children: [
          {
            path: '/payment/management',
            name: 'Payment Management',
            component: () => import('@/views/payment/Management.vue'),
          },
        ],
      },

      /**
       * 이벤트 관리
       */
      {
        path: '/coupon',
        name: 'Coupon',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/coupon/management',
        children: [
          {
            path: '/coupon/management',
            name: 'CouponManagement',
            component: () => import('@/views/coupon/Management.vue'),
          },
          {
            path: '/coupon/create',
            name: 'CouponCreate',
            component: () => import('@/views/coupon/Create.vue'),
          },
        ],
      },

      /**
       * 신고 관리
       */
      {
        path: '/report',
        name: 'Report',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/report/management',
        children: [
          {
            path: '/report/management',
            name: 'Coupon Management',
            component: () => import('@/views/report/Management.vue'),
          },
        ],
      },

      /**
       * 아이템 추가
       */
      {
        path: '/item',
        name: 'Resource',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/item/management',
        children: [
          {
            path: '/item/management',
            name: 'ItemManagement',
            component: () => import('@/views/item/Management.vue'),
          },

          {
            path: '/item/create',
            name: 'ItemCreate',
            component: () => import('@/views/item/Create.vue'),
          },
        ],
      },

      /**
       * 뱃지 관리
       */
      {
        path: '/badge',
        name: 'Badge',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/badge/management',
        children: [
          {
            path: '/badge/management',
            name: 'Badge Management',
            component: () => import('@/views/coupon/Management.vue'),
          },

          {
            path: '/badge/create',
            name: 'Badge Create',
            component: () => import('@/views/coupon/Create.vue'),
          },
        ],
      },
      {
        path: '/error',
        name: 'Pages',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: '404',
            name: 'Page404',
            component: () => import('@/views/pages/Page404'),
          },
          {
            path: '500',
            name: 'Page500',
            component: () => import('@/views/pages/Page500'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',

    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: '/login/register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
    ],
  },
  {
    path: '/login/kakao/oauth',
    name: 'KakaoOAuthCallback',
    component: () => import('@/views/pages/KakaoLogin'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const memberId = localStorage.getItem('memberId')
  console.log('===================')
  console.log(to)
  console.log(from)
  console.log('Path: ' + to.path + ' Full Path: ' + to.fullPath)
  console.log('===================')
  if (!to.path.startsWith('/login') && !memberId) {
    console.log(to.path)
    next('/login')
  } else {
    console.log(to.path)
    next()
  }
})

export default router
