<template>
    <img :src="'/tickers/' + ticker + '.png'" :alt="$t('company_logo').replace('%name%', name)" style="width: 100px; height: 100px; border-radius: 64px"/>
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
