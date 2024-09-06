<template>
    <Navbar></Navbar>
    <Helper/>
    <router-view></router-view>
</template>
<script>
import Navbar from '@/components/navbar/Navbar'
import Helper from "@/components/helper/Helper"

export default {
    components: {
        Navbar, Helper,
    },
}
</script>
