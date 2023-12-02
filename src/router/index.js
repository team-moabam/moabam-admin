import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

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
            path: 'blackList',
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
            path: 'management',
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
            path: 'management',
            name: 'CouponManagement',
            component: () => import('@/views/coupon/Management.vue'),
          },
          {
            path: 'create',
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
            path: 'management',
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
            path: 'management',
            name: 'ItemManagement',
            component: () => import('@/views/item/Management.vue'),
          },

          {
            path: 'create',
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
            path: 'management',
            name: 'Badge Management',
            component: () => import('@/views/coupon/Management.vue'),
          },

          {
            path: 'create',
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
            component: () => import('@/views/pages/Page404.vue'),
          },
          {
            path: '500',
            name: 'Page500',
            component: () => import('@/views/pages/Page500.vue'),
          },
        ],
      },

      /**
       * 추가 라우팅이 필요하다면 여기에 추가하시면 됩니다.
       */
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
        component: () => import('@/views/pages/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register.vue'),
      },
    ],
  },
  {
    path: '/login/kakao/oauth',
    name: 'KakaoOAuthCallback',
    component: () => import('@/views/pages/KakaoLogin.vue'),
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
  console.log(to)
  if (!to.path.startsWith('/login') && !memberId) {
    next('/login')
  } else {
    next()
  }
})

export default router
