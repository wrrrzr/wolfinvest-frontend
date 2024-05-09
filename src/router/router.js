import Main from "@/pages/Main"
import BuySymbols from "@/pages/BuySymbols"
import Refills from "@/pages/Refills"
import News from "@/pages/News"
import About from "@/pages/About"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/buy-symbols',
        component: BuySymbols,
    },
    {
        path: '/refills',
        component: Refills,
    },
    {
        path: '/news',
        component: News,
    },
    {
        path: '/about',
        component: About,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
