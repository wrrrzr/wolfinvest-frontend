import Main from "@/pages/Main"
import BuySymbols from "@/pages/BuySymbols"
import Refills from "@/pages/Refills"
import About from "@/pages/About"
import Auth from "@/pages/Auth"
import SymbolPage from "@/pages/SymbolPage"
import Settings from "@/pages/Settings"
import { createRouter, createWebHistory } from "vue-router"
import VueCookies from 'vue-cookies'

const routes = [
    {
        path: '/',
        component: Main,
        meta: { requiresAuth: true },
    },
    {
        path: '/buy-symbols',
        component: BuySymbols,
        meta: { requiresAuth: true },
    },
    {
        path: '/refills',
        component: Refills,
        meta: { requiresAuth: true },
    },
    {
        path: '/about',
        component: About,
        meta: { requiresAuth: false },
    },
    {
        path: '/auth',
        component: Auth,
    },
    {
        path: '/settings',
        component: Settings,
        meta: { requiresAuth: true },
    },
    {
        path: '/symbol/:symbol',
        component: SymbolPage,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


router.beforeEach((to) => {
    if (to.meta.requiresAuth && !VueCookies.isKey("token")) {
        return {
            path: '/auth',
            query: { redirect: to.fullPath },
        }
    }
})

export default router;
