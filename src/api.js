import axios from "axios";
import router from "@/router/router";
import VueCookies from "vue-cookies";

const api = {
    init() {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "/api";
    },
    async get(url) {
        try {
            return await axios.get(url);
        } catch (e) {
            if (e.response.status === 401) {
                VueCookies.remove("token");
                router.go("/auth");
            } else {
                throw e
            }
        }
    },
    async post(url, params) {
        try {
            return await axios.post(url, params);
        } catch (e) {
            if (e.response.status === 401) {
                VueCookies.remove("token");
                router.go("/auth");
            } else {
                throw e
            }
        }
    },
    async delete(url) {
        try {
            return await axios.delete(url)
        } catch (e) {
            if (e.response.status === 401) {
                VueCookies.remove("token");
                router.go("/auth");
            } else {
                throw e
            }
        }
    }
}

api.init()

export default api;
