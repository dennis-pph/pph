import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: () => import('/src/views/page/index.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('/src/views/Home.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: '/About',
    redirect: '/about/index',
    component: () => import('../views/page/index.vue'),
    children: [
      {
        path: '/about/index',
        name: 'about主页',
        component: () => import('../views/demo1/index.vue'),
      },
      {
        path: '/about/test1',
        name: 'test1',
        component: () => import('../views/demo1/test1.vue'),
      },
      {
        path: '/about/test2',
        name: 'test2',
        component: () => import('../views/demo1/test2.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
