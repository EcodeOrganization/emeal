<template>
  <div>
    <head-page></head-page>
    <section>
      <router-view/>
    </section>
    <foot-page></foot-page>
  </div>
</template>

<script>
import headPage from 'src/common/header'
import footPage from 'src/common/footer'
export default {
  components: {
    headPage,
    footPage
  },
  created() {
    // setTimeout(() => {
    //   eventBus.$emit('user', {name: 'Ecode'})
    // }, 500)
  }
}
</script>

