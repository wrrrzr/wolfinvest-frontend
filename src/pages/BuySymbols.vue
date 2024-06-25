<template>
    <div class="center">
        <MyInput v-bind:value="symbolName" @input="onInput" :placeholder="$t('symbol')"/>
    </div>
    <div class="center">
        <router-link v-for="i in tickers" :to="'/symbol/' + i.ticker">
            <MyButton>{{ i.name }}</MyButton>
        </router-link>
    </div>
    <div class="center">
        <p>{{ $t('enter_ticker') }}</p>
    </div>
    <div class="center">
        <MyInput v-bind:value="tickerName" @input="tickerName = $event.target.value" :placeholder="$t('ticker')"/>
        <MyButton @click="selectTicker">{{ $t('select') }}</MyButton>
    </div>
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
            tickerName: "",
            amount: 0,
            tickers: [],
            timeoutID: null,
        }
    },
    methods: {
        selectTicker() {
            this.$router.push(`/symbol/${this.tickerName.toUpperCase()}`)
        },
        onInput(event) {
            this.symbolName = event.target.value
            if (this.symbolName === "") {
                return
            }
            this.debounce(this.findTicker, 200)()
        },
        findTicker() {
            api.get(`/symbols/get-symbol-ticker?name=${this.symbolName}`).then(
                resp => this.tickers = resp.data)
        },
        debounce(fn, delay) {
            return () => {
                clearTimeout(this.timeoutID)
                this.timeoutID = setTimeout(() => {
                    fn.apply()
                }, delay)
            }
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

.center {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
