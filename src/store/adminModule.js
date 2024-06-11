import api from "@/api"


export default {
    state() {
        return {
            allUsers: [],
            cached: false,
        }
    },
    mutations: {
        setAllUsers: (state, allUsers) => { state.allUsers = allUsers },
        trueCached: (state) => { state.cached = true },
    },
    actions: {
        async fetchAllUsers({ state, commit }) {
            if (state.cached) {
                return
            }
            const resp = await api.get("/admin/get-all-users")
            commit("setAllUsers", resp.data)
            commit("trueCached")
        },
        async fetchAllUsersWithoutCache({ state, commit }) {
            const resp = await api.get("/admin/get-all-users")
            commit("setAllUsers", resp.data)
            commit("trueCached")
        },
    },
    namespaced: true
}
