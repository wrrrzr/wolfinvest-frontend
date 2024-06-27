import api from "@/api"


export default {
    state() {
        return {
            data: [],
            cached: false,
        }
    },
    mutations: {
        setData: (state, data) => { state.data = [].concat(data).reverse() },
        trueCached: (state) => { state.cached = true },
    },
    actions: {
        async fetchData({ state, commit }) {
            if (state.cached) {
                return
            }
            const resp = await api.get("/balance_history/get-my-balance-history")
            commit("setData", resp.data)
            commit("trueCached")
        },
        async fetchBalanceHistoryWithoutCache({ state, commit }) {
            const resp = await api.get("/balance_history/get-my-balance-history")
            commit("setData", resp.data)
            commit("trueCached")
        },
    },
    namespaced: true
}
