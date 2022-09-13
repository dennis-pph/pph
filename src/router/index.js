import Vue from 'vue'
import VueRouter from 'vue-router'
// import Hello from '@/views/Hello.vue'
// import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/page/Index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/hello',
        name: 'Hello',
        // components: {
        //   default: Hello,
        //   Home: Home,
        // }
        component: () => import('@/views/Hello.vue'),
      },
      {
        path: '/about',
        name: 'About',
        redirect: '/about/index',
        component: () => import('@/page/MainContent.vue'),
        children: [
          {
            path: '/about/index',
            name: 'AboutIndex',
            component: () => import('@/views/about/Index.vue'),
          },
          {
            path: '/about/test1',
            name: 'AboutTest1',
            component: () => import('@/views/about/Test1.vue'),
          },
          {
            path: '/about/test2',
            name: 'AboutTest2',
            component: () => import('@/views/about/Test2.vue'),
          },
        ]
      },
      {
        path: '/menu2',
        name: 'Menu2',
        redirect: '/menu2/index',
        component: () => import('@/page/MainContent.vue'),
        children: [
          {
            path: '/menu2/index',
            name: 'Menu2Index',
            component: () => import('@/views/menu2/Index.vue'),
          }
        ]
      }
    ]
  },
  { path: '*', component: () => import('@/page/Index.vue') }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
