import Main from "@/pages/Main"
import BuySymbols from "@/pages/BuySymbols"
import Refills from "@/pages/Refills"
import About from "@/pages/About"
import Auth from "@/pages/Auth"
import SymbolPage from "@/pages/symbol/Page"
import SymbolBuy from "@/pages/symbol/Buy"
import SymbolSell from "@/pages/symbol/Sell"
import Settings from "@/pages/Settings"
import ChangePassword from "@/pages/ChangePassword"
import Admin from "@/pages/Admin"
import HackUser from "@/pages/HackUser"
import BalanceHistory from "@/pages/BalanceHistory"
import CurrencyPage from "@/pages/currency/Page"
import CurrencyBuy from "@/pages/currency/Buy"
import CurrencySell from "@/pages/currency/Sell"
import { createRouter, createWebHistory } from "vue-router"
import VueCookies from 'vue-cookies'
import { setTitle } from "@/funcs"
import i18n from "@/i18n"

const routes = [
    {
        path: '/',
        component: Main,
        meta: { requiresAuth: true, title: "home" },
    },
    {
        path: '/buy-symbols',
        component: BuySymbols,
        meta: { requiresAuth: false, title: "symbols" },
    },
    {
        path: '/refills',
        component: Refills,
        meta: { requiresAuth: true, title: "refills" },
    },
    {
        path: '/about',
        component: About,
        meta: { requiresAuth: false, title: "about" },
    },
    {
        path: '/auth',
        component: Auth,
    },
    {
        path: '/settings',
        component: Settings,
        meta: { requiresAuth: true, title: "settings" },
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
        meta: { requiresAuth: true },
    },
    {
        path: '/balance-history',
        component: BalanceHistory,
        meta: { requiresAuth: true, title: "history" },
    },
    {
        path: '/currency/:currency',
        component: CurrencyPage,
    },
    {
        path: '/currency/:currency/buy',
        component: CurrencyBuy,
        meta: { requiresAuth: true },
    },
    {
        path: '/currency/:currency/sell',
        component: CurrencySell,
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
    if (to.meta.title != undefined) {
        setTitle(i18n.global.t("title." + to.meta.title))
    } else {
        setTitle(i18n.global.t("title.root"))
    }
})

export default router;
