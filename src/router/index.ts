import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../layouts/MainLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: () => import('../views/Home.vue') // ваш компонент для главной страницы
                },
                {
                    path: '/trending',
                    name: 'Trending',
                    component: () => import('../views/Trending.vue')
                },
                {
                    path: '/following',
                    name: 'Following',
                    component: () => import('../views/Following.vue')
                },
                {
                    path: '/videos',
                    name: 'Videos',
                    component: () => import('../views/YourVideos.vue')
                },
                {
                    path: '/playlist',
                    name: 'Playlist',
                    component: () => import('../views/Playlist.vue')
                }
            ],
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: () => import('../views/SignUp.vue')
        }
    ]
})

export default router
