<template>
    <Link :to="'/symbol/' + ticker">
        <MyCard>
            <div style="display: inline-flex">
                <SymbolIcon :ticker="ticker" :name="ticker" style="margin-left: 5px; margin-right: 10px"/>
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
import SymbolIcon from "@/components/SymbolIcon"

export default {
    components: {
        MyCard, Link, SymbolIcon,
    },
    props: {
        ticker: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
}
</script>
