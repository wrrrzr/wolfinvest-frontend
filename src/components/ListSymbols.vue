<template>
    <div class="list">
        <SymbolInList v-for="i in symbols" :name="i.name" :code="i.code" :price="i.price"/>
    </div>
</template>
<script>
import { mapActions } from "vuex"
import SymbolInList from "@/components/SymbolInList"
import api from "@/api"

export default {
    components: {
        SymbolInList,
    },
    data() {
        return this.$store.state.symbolsList
    },
    methods: {
        ...mapActions({
            fetchSymbols: "symbolsList/fetchSymbols",
        })
    },
    async mounted() {
        await this.fetchSymbols()
    }
}
</script>
<style scoped>
.list {
    display: inline-flex;
    flex-wrap: wrap;
}
</style>
