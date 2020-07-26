import Vue from 'vue'
import VueRouter from 'vue-router'

import Open from '@/views/Open'
import Client from '@/views/client/Client'
import Admin from '@/views/admin/Admin'
import Axios from 'axios'

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
                component: () => import(/* webpackChunckName: 'Home' */ '@/views/Home')
            },
            {
                path: 'login',
                name: 'Login',
                component: () => import(/* webpackChunckName: 'Home' */ '@/views/Login')
            },
            {
              path: 'logout',
              name: 'logout',
              beforeEnter: (to, from, next)=>{
                Axios.post('http://localhost:9000/client/logout', {key: localStorage.getItem('refresh')})
                  .then(()=>{
                    localStorage.removeItem('auth');
                    localStorage.removeItem('refresh');
                    next('/');
                  })
                  .catch(()=>{
                    alert("Could not logout");
                  });
              }
            },
            {
                path: 'register',
                name: 'Register',
                component: () => import(/* webpackChunckName: 'Home' */ '@/views/Register')
            },
            {
                path: '404',
                name: 'NotFound',
                component: () => import(/* webpackChunckName: 'NotFound' */ '@/views/NotFound')
            }
        ]
    },
    {
        path: '/client',
        name: 'Client',
        component: Client,
        children: [
            {
                path: 'profile',
                name: 'ClientProfile',
                component: () => import('@/views/client/Profile')
            },
            {
                path: '',
                name: 'ClientShop',
                component: () => import('@/views/client/Shop')
            },
            {
                path: 'cart',
                name: 'ClientCart',
                component: () => import('@/views/client/Cart')
            },
            {
                path: 'pay',
                name: 'ClientPay',
                component: () => import('@/views/client/Pay')
            },
            {
                path: 'pets',
                name: 'ClientPets',
                component: () => import('@/views/client/Pets')
            },
            {
                path: 'petedit',
                name: 'ClientPetEdit',
                component: () => import('@/views/client/PetEdit')
            },
            {
                path: 'services',
                name: 'ClientServices',
                component: () => import('@/views/client/Services')
            }
        ]
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        children: [
            {
                path: 'profile',
                name: 'AdminProfile',
                component: () => import('@/views/admin/Profile')
            },
            {
                path: 'shop',
                name: 'AdminShop',
                component: () => import('@/views/admin/Shop')
            },
            {
                path: 'productedit',
                name: 'AdminShop',
                component: () => import('@/views/admin/ProductEdit')
            },
            {
                path: 'users',
                name: 'AdminUsers',
                component: () => import('@/views/admin/Users')
            },
            {
                path: 'services',
                name: 'AdminServices',
                component: () => import('@/views/admin/Services')
            },
            {
                path: 'serviceedit',
                name: 'AdminServices',
                component: () => import('@/views/admin/ServiceEdit')
            },
            {
                path: '',
                name: 'AdminFinance',
                component: () => import('@/views/admin/Finance')
            },
            {
                path: 'schedule',
                name: 'AdminSchedule',
                component: () => import('@/views/admin/Schedule')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: 'about' */ '@/views/About')
    },
    {
      path: '*',
      redirect: '/404'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
