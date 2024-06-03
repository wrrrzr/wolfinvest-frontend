import api from "@/api"

export default {
    state() {
        return {
            symbols: [],
            cached: false,
        }
    },
    mutations: {
        setSymbols: (state, symbols) => { state.symbols = symbols },
        trueCached: (state) => { state.cached = true },
    },
    actions: {
        async fetchSymbols({ state, commit }) {
            if (state.cached) {
                return
            }
            const resp = await api.get("/symbols/get-my-symbols")
            commit("setSymbols", resp.data)
            commit("trueCached")
        },
        async fetchSymbolsWithoutCache({ state, commit }) {
            const resp = await api.get("/symbols/get-my-symbols")
            commit("setSymbols", resp.data)
            commit("trueCached")
        }
    },
    namespaced: true
}
