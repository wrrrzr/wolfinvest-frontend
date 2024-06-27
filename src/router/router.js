import Main from "@/pages/Main"
import BuySymbols from "@/pages/BuySymbols"
import Refills from "@/pages/Refills"
import About from "@/pages/About"
import Auth from "@/pages/Auth"
import SymbolPage from "@/pages/SymbolPage"
import SymbolBuy from "@/pages/SymbolBuy"
import SymbolSell from "@/pages/SymbolSell"
import Settings from "@/pages/Settings"
import ChangePassword from "@/pages/ChangePassword"
import Admin from "@/pages/Admin"
import HackUser from "@/pages/HackUser"
import BalanceHistory from "@/pages/BalanceHistory"
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
        path: '/change-password',
        component: ChangePassword,
        meta: { requiresAuth: true },
    },
    {
        path: '/admin',
        component: Admin,
        meta: { requiresAuth: true },
    },
    {
        path: '/symbol/:symbol',
        component: SymbolPage,
    },
    {
        path: '/symbol/:symbol/buy',
        component: SymbolBuy,
        meta: { requiresAuth: true },
    },
    {
        path: '/symbol/:symbol/sell',
        component: SymbolSell,
        meta: { requiresAuth: true },
    },
    {
        path: '/hack-user/:id',
        component: HackUser,
    },
    {
        path: '/balance-history',
        component: BalanceHistory,
        meta: { requiresAuth: true },
    },
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
