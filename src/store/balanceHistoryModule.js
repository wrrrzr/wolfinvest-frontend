import api from "@/api"


export default {
    state() {
        return {
            data: [],
            cached: false,
        }
    },
    mutations: {
        setData: (state, data) => {
            const newdata = []
            for (const el of data) {
                if (el.reason === 1) continue;
                if (el.reason === 2) continue;
                newdata.push(el)
            }
            newdata.reverse()
            state.data = newdata
        },
        trueCached: (state) => { state.cached = true },
    },
    actions: {
        async fetchData({ state, commit }) {
            if (state.cached) {
                return
            }
            const resp = await api.get("/currency/get-currencies-history")
            commit("setData", resp.data)
            commit("trueCached")
        },
        async fetchBalanceHistoryWithoutCache({ state, commit }) {
            const resp = await api.get("/currency/get-currencies-history")
            commit("setData", resp.data)
            commit("trueCached")
        },
    },
    namespaced: true
}
