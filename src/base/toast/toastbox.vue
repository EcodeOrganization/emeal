<template>
    <transition name="toast-fade">
        <div class="toast" v-show="showFlag">
            {{content}}
        </div>
  </transition>
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: ''
        }
    },
    data() {
        return{
            showFlag: false,
        }
    },
    methods: {
        hide() {
            setTimeout(() => {
                this.showFlag = false
            }, 3000)
        }
    }
}
</script>

<style lang="scss" scoped>
    .toast-fade-enter-active {
        transition: opacity .3s linear;
    }
    .toast-fade-enter {
        opacity: 0;
    }
    .toast{
        position: fixed;
        box-sizing: border-box;
        max-width: 80%;
        padding: 10px;
        border-radius: 0.4rem;
        background-color: rgba(0,0,0,0.7);
        color: #fff;
        text-align: center;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 998;
        font-size: 0.7rem;
    }
</style>

