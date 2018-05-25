<template>
    <header>
        <img src="static/img/logo.png" alt="">
        <span v-if="user">{{user.name}}</span>
    </header>
</template>

<script>
export default {
    data() {
        return{
            user: ''
        }
    },
    created() {
        eventBus.$on('user', (val) => {
            this.user = val
        })
    }
}
</script>

