export default {
    state() {
        return {
            state: '',
        }
    },
    mutations: {
        setHelperState(state, helperState) {
            state.state = helperState
            localStorage.setItem('helper', helperState)
        },
    },
    namespaced: true
}
