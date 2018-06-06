<template>
  <div class="menu-list">
    <search-box v-model="searchVal" placeholder="请输入商品名" autofocus></search-box>
    <tab v-model="activeName" :tabs="tabs"></tab>
    <ul class="common-table">
      <li v-for="item in listArr" :key="item.id">
        <img :src="item.picture" alt="">
        <div>
          <p>{{item.name}}</p>
          <p class="descript">{{item.descript}}</p>
          <p>共销售{{item.total}}&nbsp;&nbsp;&nbsp;共{{item.rateAllNum}}条评价</p>
          <p>
            <span class="dollar">￥{{item.price}}</span>
            <a href="javascript:;" class="num">
              <i v-show="item.num > 0"></i>
              <span>1</span>
              <i></i>
            </a>
          </p>
        </div>
      </li>
    </ul>
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
      tabs: [{name: 'id', text: '默认'}, {name: 'price', text: '价格'}, {name: 'createTime', text: '上架时间'}],
      listArr: []
    }
  },
  watch: {
    searchVal(val) {
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
        this.listArr = data
      })
    },
    findByName() {
      this.$http.get(`${this.resource}/menu/list/like/${this.activeName}/${this.order}`, {params: {name: this.searchVal}}).then(({ data }) => {
        this.listArr = data
      })
    }
  }
}
</script>

