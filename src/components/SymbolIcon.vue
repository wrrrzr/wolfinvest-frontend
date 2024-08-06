<template>
    <img :src="'/tickers/' + ticker + '.png'" :alt="$t('company_logo').replace('%name%', name)" class="icon"/>
</template>
<script>
export default {
    props: {
        ticker: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    }
}
</script>
<style scoped>
.icon {
    width: 100px;
    height: 100px;
    border-radius: 64px;
}
</style>
