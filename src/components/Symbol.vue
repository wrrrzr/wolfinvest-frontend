<template>
    <Link :to="'/symbol/' + code">
        <MyCard>
            <div style="display: inline-flex">
                <SymbolIcon :ticker="code" :name="symbolName" style="margin-left: 5px; margin-right: 10px"/>
                <div>
                    <p style="user-select: none"><b>{{ symbolName }}</b></p>
                    <p style="user-select: none">{{ $t('amount') }}: {{ amount }}</p>
                    <p style="user-select: none">{{ $t('price') }}: {{ floatToCash(priceOne * amount, currency) }} ({{ floatToCash(priceOne, currency) }})</p>
                    <div style="display: inline-flex; justify-content: space-between; font-size: 0.7em; font-family: sans-serif">
                        <p :class="isEarn ? 'earn' : 'notearn'" style="user-select: none">{{ floatToCash(earn.absolute) }} · {{ earn.precent.toFixed(2) }}%</p>
                    </div>
                </div>
            </div>
        </MyCard>
    </Link>
</template>
<script>
import MyCard from "@/components/UI/MyCard"
import SymbolIcon from "@/components/SymbolIcon"
import Link from "@/components/Link"
import { floatToCash } from "@/funcs"

export default {
    components: {
        MyCard, Link, SymbolIcon,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        priceOne: {
            type: Number,
            required: true,
        },
        earn: {
            type: Object,
            required: true,
        },
        currency: {
            type: String,
            required: true,
        },
    },
    computed: {
        symbolName() {
            if (this.name === "???")
                return this.code
            return this.name
        },
        isEarn() {
            return this.earn.precent >= 0
        }
    },
    methods: {
        floatToCash,
    }
}
</script>
<style scoped>
.notearn {
    display: inline-flex;
    background-color: var(--page-user-notearn);
    border-radius: 17px;
    padding: 3px;
}
.earn {
    display: inline-flex;
    background-color: var(--page-user-earn);
    border-radius: 17px;
    padding: 3px;
}
</style>
