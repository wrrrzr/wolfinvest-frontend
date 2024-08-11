import api from "@/api"

export default {
    state() {
        return {
            refills: [],
            cached: false,
        }
    },
    mutations: {
        setRefills: (state, refills) => { state.refills = refills },
        trueCached: (state) => { state.cached = true },
    },
    actions: {
        async fetchRefills({ state, commit }) {
            if (state.cached) {
                return
            }
            const resp = await api.get("/refills/get-my-refills")
            commit("setRefills", [].concat(resp.data).reverse())
            commit("trueCached")
        },
        async fetchRefillsWithoutCache({ state, commit }) {
            const resp = await api.get("/refills/get-my-refills")
            commit("setRefills", [].concat(resp.data).reverse())
            commit("trueCached")
        }
    },
    namespaced: true
}
