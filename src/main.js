import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"
import VueCookies from 'vue-cookies'
import api from "@/api"
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

api.init()

createApp(App).use(VueCookies).use(router).use(store).use(i18n).mount("#app")
