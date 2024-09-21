<template>
    <div v-if="ticker === 'USD'">
        <Card>
            <div style="display: inline-flex">
                <CurrencyIcon :ticker="ticker" :name="name" style="margin-left: 5px; margin-right: 10px"/>
                <div>
                    <p style="user-select: none"><b>{{ name }}</b></p>
                    <p style="user-select: none">{{ $t('amount') }}: {{ floatToCash(amount, ticker) }}</p>
                </div>
            </div>
        </Card>
    </div>
    <div v-else>
    <Link :to="'/currency/' + ticker">
        <Card>
            <div style="display: inline-flex">
                <CurrencyIcon :ticker="ticker" :name="name" style="margin-left: 5px; margin-right: 10px"/>
                <div>
                    <p style="user-select: none"><b>{{ name }}</b></p>
                    <p style="user-select: none">{{ $t('amount') }}: {{ floatToCash(amount, ticker) }}</p>
                </div>
            </div>
        </Card>
    </Link>
    </div>
</template>
<script>
import Card from "@/components/UI/Card"
import Link from "@/components/Link"
import CurrencyIcon from "@/components/CurrencyIcon"
import { floatToCash } from "@/funcs"

export default {
    components: {
        Card, Link, CurrencyIcon,
    },
    props: {
        ticker: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    methods: {
        floatToCash,
    },
    computed: {
        name() {
            return this.$t('currencies.' + this.ticker)
        }
    }
}
</script>
