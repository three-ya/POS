import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '三葉餐廳 ｜ 2025年 過年訂單查詢系統'
    }
  },
  {
    path: '/:cellphone(\\d+)',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '三葉餐廳 ｜ 2025年 過年訂單查詢系統'
    }
  },
  { 
    path: '/print-orders/new-year',
    name: 'New-Year-PrintOrders',
    component: () => import('../views/new-year/PrintOrders.vue'),
    meta: {
      title: '過年列印列表'
    }
  },
  { 
    path: '/print-orders/mothersday',
    name: 'Mothersday-PrintOrders',
    component: () => import('../views/mothersday/PrintOrders.vue'),
    meta: {
      title: '母親節列印列表'
    }
  },
  {
    path: '/print/new-year/empty',
    name: 'New-Year-PrintEmpty',
    component: () => import('../views/new-year/Print_empty.vue'),
    meta: {
      title: '列印過年空白單'
    }
  },
  {
    path: '/print/mothersday/empty',
    name: 'Mothersday-PrintEmpty',
    component: () => import('../views/mothersday/Print_empty.vue'),
    meta: {
      title: '列印母親節空白單'
    }
  },
  {
    path: '/print/new-year/:date',
    name: 'New-Year-Print',
    component: () => import('../views/Print.vue'),
    meta: {
      title: '過年列印清單'
    },
    children: [
      {
        path: 'customer',
        component: () => import('../views/new-year/Print_Customer.vue')
      },
      {
        path: 'threeya',
        component: () => import('../views/new-year/Print_Threeya.vue')
      },
      {
        path: 'inside-up',
        component: () => import('../views/new-year/Print_insideUp.vue')
      },
      {
        path: 'inside-down',
        component: () => import('../views/new-year/Print_insideDown.vue')
      }
    ]
  },
  {
    path: '/print/mothersday/:date',
    name: 'Mothersday-Print',
    component: () => import('../views/Print.vue'),
    meta: {
      title: '母親節列印清單'
    },
    children: [
      {
        path: 'customer',
        component: () => import('../views/mothersday/Print_Customer.vue')
      },
      {
        path: 'threeya',
        component: () => import('../views/mothersday/Print_Threeya.vue')
      },
      {
        path: 'inside-up',
        component: () => import('../views/mothersday/Print_insideUp.vue')
      },
      {
        path: 'inside-down',
        component: () => import('../views/mothersday/Print_insideDown.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  next();
})

export default router
