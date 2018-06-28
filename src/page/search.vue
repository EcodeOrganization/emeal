<template>
    <div class="search-box">
        <div class="search-content">
            <span></span>
            <input type="text" v-model="currentValue" :placeholder="placeholder" :autofocus="autofocus" @click="isShow = true" @blur="outBlur">
            <a href="javascript:;" @click="isShow = false, currentValue = ''" v-show="isShow">取消</a>
        </div>
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
    },
    methods: {
        outBlur() {
            if (!this.currentValue) {
                this.isShow = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .search-box{
    padding: 0.5rem 0.7rem 0.5rem 0.4rem;
    background: #F9F9F9;
    .search-content{
        display: flex;
        align-items: center;
        padding: 0.3rem;
        background: #FFFFFF;
        border-radius: 0.1rem;
        position: relative;
        span{
            width: 1.1rem;
            height: 1.1rem;
            background: url('../../static/img/search-w.png');
            background-size: 100% 100%;
        }
        input{
            flex: 1;
            margin-left: 0.2rem;
            font-size: 0.7rem;
            border: 0;
            background: #fff;
            color: #282828;
            box-sizing: border-box;
            padding-right: 2rem;
        }
        a{
            color: #3074C2;
            font-size: 0.7rem;
            position: absolute;
            right: 0.6rem;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
        }
    }
}
</style>

