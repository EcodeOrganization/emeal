<template>
    <ul class="tab-box">
        <li :class="activeIndex==item.name?'is-active':''" v-for="item in tabs" @click="updateVal(item.name)" :key="item.name">{{item.text}}</li>
    </ul>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        tabs: {
            type: Array,
            default: []
        }
    },
    data() {
        return{
            activeIndex: this.value
        }
    },
    created() {
        console.log(this.value)
    },
    methods: {
        updateVal(val) {
            this.$emit('input', val)
            this.activeIndex = val
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
                color: #409EFF;
                position: relative;
                &:after{
                    content: '';
                    width: 200%;
                    height: 200%;
                    position: absolute;
                    top: 0.1rem;
                    left: 0;
                    box-sizing: border-box;
                    border-bottom: 0.2rem solid #409EFF;
                    -webkit-transform: scale(0.5,0.5);
                    transform: scale(0.5,0.5);
                    transform-origin: top left;
                    -webkit-transform-origin: top left;
                }
            }
        }
    }
</style>
