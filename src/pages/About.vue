<template>
    <p>{{ $t('text_about') }}</p>
</template>
<script>
import { useHead } from '@vueuse/head'

export default {
    mounted() {
        useHead({
            title: this.$t('title.about'),
        })
    }
}
</script>
<style scoped>
p {
  font-family: 'Helvetica';
  font-size: 1.5em;
  margin: 0;
  margin-left: 10px;
}
</style>
