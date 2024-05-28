<template>
    <MyUser></MyUser>
    <ListMySymbols/>
</template>
<script>
import MyUser from "@/components/MyUser"
import ListMySymbols from "@/components/ListMySymbols"
import api from "@/api"

export default {
    components: {
        MyUser, ListMySymbols,
    },
}
</script>
