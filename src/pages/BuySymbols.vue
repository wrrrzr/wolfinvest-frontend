<template>
    <div class="center" style="margin-bottom: 5px">
        <MyInput v-bind:value="symbolName" @input="onInput" :placeholder="$t('symbol')"/>
    </div>
    <div class="center">
        <div style="display: grid">
            <Link v-for="i in tickers" :to="'/symbol/' + i.ticker">
                <MyCard style="display: flex">
                    <SymbolIcon :ticker="i.ticker" :name="i.name"/>
                    <p style="font-size: 1.5em; margin: 10px">{{ i.name }}</p>
                </MyCard>
            </Link>
        </div>
    </div>
    <SymbolsRecommendations/>
    <div v-if="symbolNotFound">
    <div class="center">
        <p>{{ $t('enter_ticker') }}</p>
    </div>
    <div class="center">
        <MyInput v-bind:value="tickerName" @input="tickerName = $event.target.value" :placeholder="$t('ticker')"/>
        <MyButton @click="selectTicker">{{ $t('select') }}</MyButton>
    </div>
    </div>
</template>
<script>
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import MyCard from "@/components/UI/MyCard"
import Symbol from "@/components/Symbol"
import Link from "@/components/Link"
import SymbolIcon from "@/components/SymbolIcon"
import SymbolsRecommendations from "@/components/SymbolsRecommendations"
import api from "@/api"

export default {
    components: {
        MyInput, MyButton, MyCard, Symbol, Link, SymbolIcon, SymbolsRecommendations,
    },
    data() {
        return {
            symbolName: "",
            tickerName: "",
            amount: 0,
            tickers: [],
            timeoutID: null,
            symbolNotFound: false,
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
                resp => this.tickers = resp.data
            )
        },
        debounce(fn, delay) {
            return () => {
                clearTimeout(this.timeoutID)
                this.timeoutID = setTimeout(() => {
                    fn.apply()
                }, delay)
            }
        },
    },
    watch: {
        tickers(newVal) {
            if (newVal.length === 0) {
                this.symbolNotFound = true
            } else {
                this.symbolNotFound = false
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
