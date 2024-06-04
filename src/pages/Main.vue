<template>
    <UserInfo/>
    <ListMySymbols/>
</template>
<script>
import UserInfo from "@/components/UserInfo"
import ListMySymbols from "@/components/ListMySymbols"
import api from "@/api"

export default {
    components: {
        UserInfo, ListMySymbols,
    },
}
</script>
