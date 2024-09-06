<template>
    <UserInfo/>
    <ListMySymbols/>
</template>
<script>
import { mapState, mapMutations } from "vuex"
import UserInfo from "@/components/UserInfo"
import ListMySymbols from "@/components/ListMySymbols"
import { helperState } from "@/helper"
import api from "@/api"

export default {
    components: {
        UserInfo, ListMySymbols,
    },
    computed: {
        ...mapState({
            state: state => state.helper.state,
        }),
    },
    methods: {
        ...mapMutations({
            setHelperState: "helper/setHelperState",
        }),
    },
    mounted() {
        if (this.state === helperState.auth) {
            this.setHelperState(helperState.gotoRefills)
        }
    }
}
</script>
