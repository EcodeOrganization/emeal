<template>
  <div class="menu-detail">
    <img :src="good.picture" class="cover">
    <div class="good-info">
      <p>{{good.name}}</p>
      <p>
        <span>共销售{{nums}}份&nbsp;&nbsp;&nbsp;好评率{{favoraRate | rateFilter}}%</span>
      </p>
      <p>
        <span>￥{{good.price}}</span>
      </p>
    </div>
    <div class="split"></div>
    <div class="good-introduce">
      <p>商品信息</p>
      <p>{{good.descript}}</p>
    </div>
    <div class="split"></div>
    <div class="good-img">
      <p>商品一览</p>
      <img :src="good.picture">
    </div>
    <div class="split"></div>
    <div class="good-rate">
      <p>商品评价</p>
      <tab v-model="activeName" :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
import tab from 'src/page/tab.vue'
export default {
  filters: {
		rateFilter(value) {
			return value === 'NaN'? 0 : value
		}
  },
  components: {
    tab
  },
  data () {
    return {
      good: {},
      nums: 100,
      favoraRate: 90,
      tabs: [{name: 'all', text: '全部'}, {name: 'great', text: '好评'}, {name: 'good', text: '中评'}, {name: 'bad', text: '差评'}],
      activeName: 'all'
    }
  },
  created() {
    this.findInfo()
  },
  methods: {
    findInfo() {
      this.$http.get(this.resource + '/menu/info', {params: {id: this.$route.query.id}}).then(({ data }) => {
        this.good = data
      })
    }
  }
}
</script>

