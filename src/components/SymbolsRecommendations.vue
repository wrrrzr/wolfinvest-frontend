<template>
    <ListSymbols :title="$t('vegan_companies')" style="margin-bottom: 15px">
        <SymbolInList :ticker="'BYND'" :name="'beyond meat'"/>
        <SymbolInList :ticker="'OTLY'" :name="'oatly'"/>
        <SymbolInList :ticker="'VEZ.F'" :name="'veganz'"/>
    </ListSymbols>
    <ListSymbols :title="$t('banks')" style="margin-bottom: 15px">
        <SymbolInList :ticker="'SBER'" :name="'sberbank'"/>
        <SymbolInList :ticker="'BAC'" :name="'bank of america'"/>
    </ListSymbols>
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
import SymbolInList from "@/components/SymbolInList"

export default {
    components: {
        ListSymbols, CurrencyInList, SymbolInList,
    },
}
</script>
