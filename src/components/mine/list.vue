<template>
  <div class="list">
    <div class="split"></div>
    <router-link to="/mine/mineinfo">
      个人信息
      <i></i>
    </router-link>
    <div class="split"></div>
    <router-link to="/mine/mineinfo">
      我的收藏
      <i></i>
    </router-link>
    <div class="split"></div>
    <router-link to="/mine/mineinfo">
      我的订单
      <i></i>
    </router-link>
    <div class="split"></div>
    <router-link to="/mine/mineinfo">
      我的评价
      <i></i>
    </router-link>
    <div class="split"></div>
    <p @click="signout">
      退出
      <i></i>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'list'
    }
  },
  methods: {
    signout() {
      this.$MsgBox({
        content: '确定要退出账号吗？',
        onOk: () => {
          console.log('ok')
        },
      })
    }
  }
}
</script>

