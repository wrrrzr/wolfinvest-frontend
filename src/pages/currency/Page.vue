<template>
    <div style="display: flex; justify-content: center; align-items: center">
    <Card style="display: inline-grid">
        <div style="display: flex">
            <CurrencyIcon :ticker="currency" :name="currencyName" style="margin-left: 5px; margin-right: 10px"/>
            <div>
                <p style="margin-bottom: 0; font-size: 1.5em">{{ currencyName }}</p>
                <p style="margin-top: 0; font-size: 1.5em">{{ $t('price') }} {{ floatToCash(price) }}</p>
            </div>
        </div>
    </Card>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
        <div style="display: grid; width: 100%">
            <div style="display: flex">
                <Button class="buy-button" @click="buySymbol">{{ $t('buy') }}</Button>
                <Button class="sell-button" @click="sellSymbol">{{ $t('sell') }}</Button>
            </div>
        </div>
    </div>
</template>
<script>
import Input from "@/components/UI/Input"
import Card from "@/components/UI/Card"
import Button from "@/components/UI/Button"
import CurrencyIcon from "@/components/CurrencyIcon"
import api from "@/api"
import { floatToCash, setTitle } from "@/funcs"

export default {
    components: {
        Input, Card, Button, CurrencyIcon
    },
    data() {
        return {
            currency: this.$route.params.currency,
            price: 0.0,
        }
    },
    computed: {
        currencyName() {
            return this.$t('currencies.' + this.currency)
        }
    },
    methods: {
        buySymbol() {
            this.$router.push(`/currency/${this.currency}/buy`)
        },
        sellSymbol() {
            this.$router.push(`/currency/${this.currency}/sell`)
        },
        floatToCash,
    },
    mounted() {
        api.get(`currency/get-price?currency=${this.currency}`).then(resp => {
            this.price = resp.data
        })
        setTitle(this.currencyName)
    }
}
</script>
<style scoped>
.buy-button {
    margin-top: 0;
    margin-right: 0;
    width: 50%;
    background-color: #215f3d;
    color: white;
}
.buy-button:hover {
    background-color: #1c5833;
}
.sell-button {
    margin-top: 0;
    margin-left: 0;
    width: 50%;
    background-color: #512f6d;
    color: white;
}
.sell-button:hover {
    background-color: #4c2863;
}
</style>
