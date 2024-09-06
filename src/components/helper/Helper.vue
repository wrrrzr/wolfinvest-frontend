<template>
    <div v-if="isNotFinished && message !== ''" style="position: absolute; bottom: 0; display: flex">
        <img src="/helper.png" :alt="$t('helper')" style="width: 16vw; height: 50vh;"/>
        <div>
            <SpeechBubble style="">
                <p>{{ $t(state) }}</p>
            </SpeechBubble>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex"
import { helperState } from "@/helper"
import SpeechBubble from "./SpeechBubble"

export default {
    components: {
        SpeechBubble,
    },
    methods: {
        ...mapMutations({
            setHelperState: "helper/setHelperState",
        }),
    },
    computed: {
        ...mapState({
            state: state => state.helper.state,
        }),
        isNotFinished() {
            return this.state !== helperState.end
        }
    },
    mounted() {
        this.setHelperState(localStorage.getItem('helper'))
    },
}
</script>
