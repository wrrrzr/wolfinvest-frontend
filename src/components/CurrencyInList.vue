<template>
    <Link :to="'/currency/' + ticker">
        <MyCard>
            <div style="display: inline-flex">
                <CurrencyIcon :ticker="ticker" :name="name" style="margin-left: 5px; margin-right: 10px"/>
                <div>
                    <p style="user-select: none"><b>{{ name }}</b></p>
                </div>
            </div>
        </MyCard>
    </Link>
</template>
<script>
import MyCard from "@/components/UI/MyCard"
import Link from "@/components/Link"
import CurrencyIcon from "@/components/CurrencyIcon"

export default {
    components: {
        MyCard, Link, CurrencyIcon,
    },
    props: {
        ticker: {
            type: String,
            required: true,
        },
    },
    computed: {
        name() {
            return this.$t('currencies.' + this.ticker)
        }
    }
}
</script>
