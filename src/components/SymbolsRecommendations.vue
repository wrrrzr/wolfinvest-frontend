<template>
    <ListSymbols :title="$t('currencies_list')">
        <CurrencyInList :ticker="'EUR'"/>
        <CurrencyInList :ticker="'UAH'"/>
        <CurrencyInList :ticker="'RUB'"/>
        <CurrencyInList :ticker="'HKD'"/>
        <CurrencyInList :ticker="'CNY'"/>
        <CurrencyInList :ticker="'JPY'"/>
        <CurrencyInList :ticker="'GBP'"/>
    </ListSymbols>
</template>
<script>
import ListSymbols from "@/components/ListSymbols"
import CurrencyInList from "@/components/CurrencyInList"

export default {
    components: {
        ListSymbols, CurrencyInList,
    },
}
</script>
