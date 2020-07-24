import Vue from 'vue'
import VueRouter from 'vue-router'

import Open from '@/views/Open'
import Client from '@/views/client/Client'
import Admin from '@/views/admin/Admin'

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
                path: '',
                name: 'Shop',
                component: () => import('@/views/client/Shop')
            },
            {
                path: 'profile',
                name: 'Profile',
                component: () => import('@/views/client/Profile')
            },
            {
                path: 'edit',
                name: 'EditProfile',
                component: () => import('@/views/ProfileEdit')
            },
            {
                path: 'cart',
                name: 'Cart',
                component: () => import('@/views/client/Cart')
            },
            {
                path: 'pay',
                name: 'Pay',
                component: () => import('@/views/client/Pay')
            },
            {
                path: 'pets',
                name: 'Pets',
                component: () => import('@/views/client/Pets')
            },
            {
                path: 'petedit',
                name: 'PetEdit',
                component: () => import('@/views/client/PetEdit')
            },
            {
                path: 'services',
                name: 'Services',
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
                path: '',
                name: 'Finance',
                component: () => import('@/views/admin/Finance')
            },
            {
                path: 'profile',
                name: 'Profile',
                component: () => import('@/views/admin/Profile')
            },
            {
                path: 'edit',
                name: 'EditProfile',
                component: () => import('@/views/ProfileEdit')
            },
            {
                path: 'shop',
                name: 'Shop',
                component: () => import('@/views/admin/Shop')
            },
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
