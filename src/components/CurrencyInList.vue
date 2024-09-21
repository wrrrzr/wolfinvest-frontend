<template>
    <Link :to="'/currency/' + ticker">
        <Card>
            <div style="display: inline-flex">
                <CurrencyIcon :ticker="ticker" :name="name" style="margin-left: 5px; margin-right: 10px"/>
                <div>
                    <p style="user-select: none"><b>{{ name }}</b></p>
                </div>
            </div>
        </Card>
    </Link>
</template>
<script>
import Card from "@/components/UI/Card"
import Link from "@/components/Link"
import CurrencyIcon from "@/components/CurrencyIcon"

export default {
    components: {
        Card, Link, CurrencyIcon,
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
