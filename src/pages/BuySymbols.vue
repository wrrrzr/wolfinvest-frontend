<template>
    <p>Введите тикер, его можно найти в поисковике</p>
    <MyInput v-bind:value="symbolName" @input="symbolName = $event.target.value" placeholder="тикер"/>
    <MyButton @click="selectSymbol">Выбрать</MyButton>
    <p>Популярные акции:</p>
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
            this.$router.push(`/symbol/${this.symbolName}`)
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
