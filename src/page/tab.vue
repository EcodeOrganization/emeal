<template>
    <ul class="tab-box">
        <li v-for="item in tabs" @click="updateVal(item.name)">{{item.text}}</li>
    </ul>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array,
            default: []
        }
    },
    methods: {
        updateVal(val) {
            this.$emit('input', val)
        }
    }
}
</script>

<style lang="scss" scoped>
    .tab-box{
        height: 2rem;
        line-height: 2rem;
        font-size: 0.7rem;
        border-bottom: 0.1rem solid #e4e7ed;
        margin-top: 0.5rem;
        li{
            float: left;
            padding: 0 0.5rem;
            &.is-active {

            }
        }
    }
</style>
