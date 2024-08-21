import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
]
//process.env.BASE_URL
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router