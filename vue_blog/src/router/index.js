import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import('../pages/mainPage/Home.vue'),
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router