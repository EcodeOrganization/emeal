<template>
    <footer v-show="isShow">
        <router-link to="/menulist">
            <span class="icon-menu"></span>
            菜单
        </router-link>
        <router-link to="/shop">
            <span class="icon-cart"></span>
            购物车
            <i>{{num}}</i>
        </router-link>
        <router-link to="/mine">
            <span class="icon-home"></span>
            我的
        </router-link>
    </footer>
</template>

<script>
export default {
    computed: {
        isShow() {
            if (this.$route.path === '/login' || this.$route.path === '/registered') {
                return false
            } else {
                return true
            }
        }
    },
    data() {
        return{
            num: 20
        }
    }
}
</script>

