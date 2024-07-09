<template>
    <div v-if="!loaded" style="display: flex; justify-content: center">
        <p style="font-size: 3em">{{ $t('symbols_loading') }}</p>
    </div>
    <div v-else class="list">
        <Symbol v-for="i in symbols" :name="i.name" :code="i.code" :amount="i.amount" :priceOne="i.price.buy"/>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex"
import Symbol from "@/components/Symbol"
import api from "@/api"

export default {
    components: {
        Symbol,
    },
    data() {
        return {
            loaded: false,
        }
    },
    computed: {
        ...mapState({
            symbols: state => state.mySymbols.symbols
        }),
    },
    methods: {
        ...mapActions({
            fetchSymbols: "mySymbols/fetchSymbols",
        })
    },
    mounted() {
        this.fetchSymbols().then(resp => {
            this.loaded = true;
        })
    }
}
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #2d3137;
  border-radius: 17px;
}
</style>
