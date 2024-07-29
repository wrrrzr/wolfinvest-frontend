import api from "@/api"

export default {
    state() {
        return {
            currencies: [],
            cached: false,
        }
    },
    mutations: {
        setCurrencies: (state, currencies) => { state.currencies = currencies },
        trueCached: (state) => { state.cached = true },
    },
    actions: {
        async fetchCurrencies({ state, commit }) {
            if (state.cached) {
                return
            }
            const resp = await api.get("/currency/get-my-currencies")
            commit("setCurrencies", resp.data)
            commit("trueCached")
        },
        async fetchCurrenciesWithoutCache({ state, commit }) {
            const resp = await api.get("/currency/get-my-currencies")
            commit("setCurrencies", resp.data)
            commit("trueCached")
        }
    },
    namespaced: true
}
