<template>
  <div>
    <search-box v-model="searchVal" placeholder="请输入商品名"></search-box>
    <tab v-model="activeName" :tabs="tabs"></tab>
    <p>{{activeName}}</p>
  </div>
</template>

<script>
import searchBox from 'src/page/search.vue'
import tab from 'src/page/tab.vue'
export default {
  components: {
    searchBox,
    tab
  },
  data() {
    return{
      searchVal: '',
      activeName: '',
      tabs: [{name: 'id', text: '默认'}, {name: 'price', text: '价格'}, {name: 'createTime', text: '上架时间'}]
    }
  },
  watch: {
    searchVal(val) {
      console.log('model', val)
    },
    activeName(val) {
      console.log('name', val)
    }
  },
}
</script>

