<template>
    <div class="search-box">
        <div class="search-content">
            <span class="icon-search"></span>
            <input ref="input" type="text" @input="updateVal" :placeholder="placeholder">
        </div>
        <a href="javascript:;" @click="cacel" v-show="isShow">取消</a>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: '请输入'
        }
    },
    data() {
        return{
            isShow: false
        }
    },
    methods: {
        updateVal(e) {
            this.$emit('input', e.target.value)
            this.isShow = e.target.value
        },
        cacel() {
            this.$refs.input.value = ''
            this.$emit('input', '')
            this.isShow = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .search-box{
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        padding: 0.4rem 0.5rem;
        background: #d9d9d9;
        .search-content{
            flex: 1;
            -webkit-flex: 1;
            display: flex;
            align-items: center;
            -webkit-align-items: center;
            padding: 0.2rem 0.3rem;
            background: #fff;
            border-radius: 0.1rem;
            span{
                font-size: 0.6rem;
                color: #d9d9d9;
            }
            input{
                flex: 1;
                -webkit-flex: 1;
                margin-left: 0.3rem;
                height: 1.2rem;
            }
        }
        a{
            padding: 0 0 0 0.4rem;
            color: #26a2ff;
            font-size: 0.9rem;
        }
    }
</style>

