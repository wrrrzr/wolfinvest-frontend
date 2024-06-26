<template>
    <MyButton @click="changeDisplay">{{ $t('language') }}</MyButton>
    <div :class="displayLangs ? 'display-true' : 'display-false'">
        <MyButton @click="setLangEn" class="lang">english</MyButton>
        <MyButton @click="setLangRu" class="lang">русский</MyButton>
    </div>
</template>
<script>
import MyButton from "@/components/UI/MyButton"

export default {
    components: {
        MyButton,
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
