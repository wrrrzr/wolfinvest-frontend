import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"
import VueCookies from 'vue-cookies'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://127.0.0.1:8000"

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        VueCookies.remove("token")
        router.push("/auth")
        return error;
    }
    return Promise.reject(error);
});


createApp(App).use(VueCookies).use(router).mount("#app")
