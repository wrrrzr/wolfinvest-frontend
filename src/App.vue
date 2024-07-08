<template>
    <Navbar></Navbar>
    <router-view></router-view>
</template>
<script>
import Navbar from '@/components/Navbar'
import { useHead } from '@vueuse/head'

export default {
    components: {
        Navbar,
    },
    mounted() {
        useHead({
            title: this.$t('title.root'),
        })
    }
}
</script>
