import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from "@/router"
import store from "@/store"
import i18n from "@/i18n"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

ChartJS.defaults.color = () => "#717a7a"
ChartJS.defaults.font.size = 17

const head = createHead()


createApp(App).use(head).use(VueCookies).use(router).use(store).use(i18n).mount("#app")
