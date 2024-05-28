import api from "@/api"

export default {
    state() {
        return {
            refills: [],
            cached: false,
        }
    },
    getters: {
        getReverse: (state) => state.refills.reverse()
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
            commit("setRefills", resp.data)
            commit("trueCached")
        },
        async fetchRefillsWithoutCache({ state, commit }) {
            const resp = await api.get("/refills/get-my-refills")
            commit("setRefills", resp.data)
            commit("trueCached")
        }
    },
    namespaced: true
}
