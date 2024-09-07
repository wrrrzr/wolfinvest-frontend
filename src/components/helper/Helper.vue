<template>
    <div v-if="isNotFinished && message !== ''" style="position: fixed; bottom: 0; display: flex; align-items: end; justify-content: end; pointer-events:none;">
        <img src="/helper.png" :alt="$t('helper')" class="helper"/>
        <div>
            <SpeechBubble class="bubble">
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
<style scoped>
@media (orientation: portrait) {
    .helper {
        width: 50vw;
        height: 25vh;
    }
    .bubble {
        font-size: 0.9em;
    }
}
@media (orientation: landscape) {
    .helper {
        width: 25vw;
        height: 50vh;
    }
    .bubble {
        font-size: 1.5em;
        margin-bottom: 20vh;
    }
}
</style>
