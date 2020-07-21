import Vue from 'vue'
import VueRouter from 'vue-router'
import Open from '../views/Open.vue'
import Client from '../views/Client.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Open',
    component: Open,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunckName: 'Home' */ '../views/Home.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunckName: 'Home' */ '../views/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunckName: 'Home' */ '../views/Register.vue')
      },
      {
        path: '404',
        name: 'NotFound',
        component: () => import(/* webpackChunckName: 'NotFound' */ '../views/NotFound.vue')
      }
    ]
  },
  {
    path: '/client',
    name: 'Client',
    component: Client,
    children: [
      {
        path: '',
        name: 'Store',
        component: () => import('../views/Shop.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  // {
  //   path: '*',
  //   redirect: '/404'
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
