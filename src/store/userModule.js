import api from "@/api"

export default {
    state() {
        return {
            id: 0,
            balance: 0,
            username: "",
            cached: false,
        }
    },
    mutations: {
        setId: (state, id) => { state.id = id },
        setBalance: (state, balance) => { state.balance = balance },
        setUsername: (state, username) => { state.username = username },
        trueCached: (state) => { state.cached = true },
    },
    actions: {
        async fetchUser({ state, commit }) {
            if (state.cached) {
                return
            }
            const resp = await api.get("/users/me")
            commit("setId", resp.data.id)
            commit("setBalance", resp.data.balance)
            commit("setUsername", resp.data.username)
            commit("trueCached")
        }
    },
    namespaced: true
}
