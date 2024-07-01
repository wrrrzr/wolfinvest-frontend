<template>
    <div class="list">
        <Symbol v-for="i in symbols" :name="i.name" :code="i.code" :amount="i.amount" :priceOne="i.price.buy"/>
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
    mounted() {
        this.fetchSymbols()
    }
}
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  background-color: #2d3137;
  border-radius: 17px;
}
</style>
