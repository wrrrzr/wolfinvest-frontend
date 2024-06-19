<template>
    <p>{{ $t('enter_ticker') }}</p>
    <MyInput v-bind:value="symbolName" @input="symbolName = $event.target.value" :placeholder="$t('ticker')"/>
    <MyButton @click="selectSymbol">{{ $t('select') }}</MyButton>
    <p>{{ $t('popular_symbols') }}:</p>
    <ListSymbols/>
</template>
<script>
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import Symbol from "@/components/Symbol"
import ListSymbols from "@/components/ListSymbols"
import api from "@/api"

export default {
    components: {
        MyInput, MyButton, Symbol, ListSymbols,
    },
    data() {
        return {
            symbolName: "",
            amount: 0,
        }
    },
    methods: {
        selectSymbol() {
            this.$router.push(`/symbol/${this.symbolName.toUpperCase()}`)
        }
    },
}
</script>
<style scoped>
p {
    font-size: 1.5em;
    margin: 0;
    margin-left: 5px;
    font-family: "Gill Sans", sans-serif;
}
</style>
