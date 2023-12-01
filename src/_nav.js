export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Theme',
  },
  {
    component: 'CNavItem',
    name: 'Colors',
    to: '/theme/colors',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'Typography',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },

  /**
   * 유저 관리
   */
  {
    component: 'CNavTitle',
    name: '회원 관리',
  },
  {
    component: 'CNavGroup',
    name: '결제관리',
    to: '/payment',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: '결제 리스트 관리',
        to: '/payment/management',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: '회원 계정 관리',
    to: '/member',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: ' 블랙리스트 관리',
        to: '/member/blackList',
      },
    ],
  },

  /**
   *  이벤트 관리
   */
  {
    component: 'CNavTitle',
    name: '이벤트 관리',
  },
  {
    component: 'CNavGroup',
    name: '이벤트 쿠폰 관리',
    to: '/coupon',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: '쿠폰 발행 내역 관리',
        to: '/coupon',
      },
      {
        component: 'CNavItem',
        name: '이벤트 쿠폰 생성',
        to: '/coupon/create',
      },
    ],
  },

  /**
   * 신고 관리
   */
  {
    component: 'CNavTitle',
    name: '신고 관리',
  },
  {
    component: 'CNavItem',
    name: '신고 관리',
    to: '/report',
  },

  {
    component: 'CNavTitle',
    name: 'Extras',
  },
  {
    component: 'CNavGroup',
    name: '추가',
    to: '/login',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        component: 'CNavItem',
        name: 'Register',
        to: '/login/register',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: '에러',
    to: '/error',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'Error 404',
        to: '/error/404',
      },
      {
        component: 'CNavItem',
        name: 'Error 500',
        to: '/error/500',
      },
    ],
  },

  /**
   * 아이템 관리
   */
  {
    component: 'CNavTitle',
    name: '아이템 관리',
  },
  {
    component: 'CNavGroup',
    name: '아이템 관리',
    to: '/item',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: '상점 아이템 추가',
        to: '/item/create',
      },
      {
        component: 'CNavItem',
        name: '아이템 관리',
        to: '/item/management',
      },
    ],
  },

  /**
   * 뱃지 관리
   */
  {
    component: 'CNavTitle',
    name: '뱃지 관리',
  },
  {
    component: 'CNavGroup',
    name: '뱃지 관리',
    to: '/badge',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: '뱃지 생성',
        to: '/badge/create',
      },
      {
        component: 'CNavItem',
        name: '뱃지 관리',
        to: '/badge/management',
      },
    ],
  },
]
