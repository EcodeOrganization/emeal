<template>
    <div class="search-box">
        <div class="search-content">
            <span class="icon-search"></span>
            <input type="text" v-model="currentValue" :placeholder="placeholder"  :autofocus="autofocus" @click="isShow = true">
        </div>
        <a href="javascript:;" @click="isShow = false, currentValue = ''" v-show="isShow">取消</a>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: '请输入'
        },
        autofocus: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return{
            currentValue: this.value,
            isShow: this.value ? true : false
        }
    },
    watch: {
        currentValue(val) {
            this.$emit('input', val)
            this.isShow = val
        },
        value(val) {
            this.currentValue = val
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
                font-size: 0.7rem;
            }
        }
        a{
            padding: 0 0 0 0.4rem;
            color: #26a2ff;
            font-size: 0.9rem;
        }
    }
</style>

