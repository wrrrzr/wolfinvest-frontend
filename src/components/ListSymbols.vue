<template>
    <div style="display: flex; flex-wrap: wrap">
        <Symbol v-for="i in symbols" :code="i.code" :amount="i.amount" :priceOne="i.price"/>
    </div>
</template>
<script>
import Symbol from "@/components/Symbol"
import axios from "axios"

export default {
    components: {
        Symbol
    },
    data() {
        return {
            symbols: []
        }
    },
    methods: {
        async fetchSymbols() {
            const resp = await axios.get("/symbols/get-my-symbols")
            this.symbols = resp.data
        }
    },
    async mounted() {
        this.fetchSymbols()
    }
}
</script>
