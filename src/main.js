import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"
import VueCookies from 'vue-cookies'
import api from "@/api"
import store from "@/store"

api.init()

createApp(App).use(VueCookies).use(router).use(store).mount("#app")
