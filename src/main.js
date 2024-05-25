import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"
import VueCookies from 'vue-cookies'
import api from "@/api"

api.init()

/*axios.interceptors.response.use(response => {
    return response;
}, error => {
    const statusCode = error.response ? error.response.status : null;
    if (statusCode === 401) {
        VueCookies.remove("token")
        router.push("/auth")
        return error
    }
    return Promise.reject(error);
});*/


createApp(App).use(VueCookies).use(router).mount("#app")
