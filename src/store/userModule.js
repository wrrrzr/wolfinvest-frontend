import api from "@/api"

const Role = {
    USER: 1,
    OWNER: 2,
}

export default {
    state() {
        return {
            id: 0,
            balance: 0,
            username: "",
            role: Role.USER,
            cached: false,
        }
    },
    getters: {
        isAdmin: (state) => state.role === Role.OWNER,
    },
    mutations: {
        setId: (state, id) => { state.id = id },
        setBalance: (state, balance) => { state.balance = balance },
        setUsername: (state, username) => { state.username = username },
        setRole: (state, role) => { state.role = role },
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
            commit("setRole", resp.data.role)
            commit("trueCached")
        },
        async fetchUserWithoutCache({ state, commit }) {
            const resp = await api.get("/users/me")
            commit("setId", resp.data.id)
            commit("setBalance", resp.data.balance)
            commit("setUsername", resp.data.username)
            commit("setRole", resp.data.role)
            commit("trueCached")
        }
    },
    namespaced: true
}
