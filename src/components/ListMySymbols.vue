<template>
    <div class="list">
        <Symbol v-for="i in symbols" :code="i.code" :amount="i.amount" :priceOne="i.price"/>
    </div>
</template>
<script>
import { mapActions } from "vuex"
import Symbol from "@/components/Symbol"
import api from "@/api"

export default {
    components: {
        Symbol,
    },
    data() {
        return this.$store.state.mySymbols
    },
    methods: {
        ...mapActions({
            fetchSymbols: "mySymbols/fetchSymbols",
        })
    },
    async mounted() {
        this.fetchSymbols()
    }
}
</script>
<style scoped>
.list {
  display: inline-flex;
  flex-wrap: wrap;
}
</style>
