<template>
  <div>
    <search-box v-model="searchVal" placeholder="请输入商品名" autofocus></search-box>
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
      activeName: 'id',
      order: 'ASC',
      tabs: [{name: 'id', text: '默认'}, {name: 'price', text: '价格'}, {name: 'createTime', text: '上架时间'}]
    }
  },
  watch: {
    searchVal(val) {
      console.log('model', val)
        this.findByName()
    },
    activeName(val) {
      if (val) {
        this.findAll()
      }
    }
  },
  created() {
    this.findAll()
  },
  methods: {
    findAll() {
      this.$http.get(`${this.resource}/menu/list/${this.activeName}/${this.order}`).then(({ data }) => {
        console.log(data)
      })
    },
    findByName() {
      this.$http.get(`${this.resource}/menu/list/like/${this.activeName}/${this.order}`, {params: {name: this.searchVal}}).then(({ data }) => {
        console.log(data)
      })
    }
  }
}
</script>

