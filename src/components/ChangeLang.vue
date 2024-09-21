<template>
    <Button @click="changeDisplay">{{ $t('language') }}</Button>
    <div :class="displayLangs ? 'display-true' : 'display-false'">
        <Button @click="setLangEn" class="lang">english</Button>
        <Button @click="setLangRu" class="lang">русский</Button>
    </div>
</template>
<script>
import Button from "@/components/UI/Button"

export default {
    components: {
        Button,
    },
    data() {
        return {
            displayLangs: false,
        }
    },
    methods: {
        setLangEn() {
            localStorage.setItem('lang', 'en')
            this.$router.go("/")
        },
        setLangRu() {
            localStorage.setItem('lang', 'ru')
            this.$router.go("/")
        },
        changeDisplay() {
            this.displayLangs = !this.displayLangs
        },
    },
}
</script>
<style scoped>
.display-false {
    display: none;
}

.display-true {
    display: grid;
}

.lang {
    margin-top: 0;
    margin-bottom: 0;
}
</style>
