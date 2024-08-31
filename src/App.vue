<template>
    <Navbar></Navbar>
    <router-view></router-view>
</template>
<script>
import Navbar from '@/components/navbar/Navbar'

export default {
    components: {
        Navbar,
    },
}
</script>
