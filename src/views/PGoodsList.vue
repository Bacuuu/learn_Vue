<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span slot="first">/Goods</span>
      <span slot="second">/Apple</span>
    </nav-bread>
    <div style='display:flex;flex-direction:row;flex-wrap:wrap;'>
    <nav-goods-card v-for='card in data' :data='card' :key='card.name'></nav-goods-card>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'
import NavBread from '@/components/bread'
import NavGoodsCard from '@/components/goodscard'
export default {
  data () {
    return {
      data: {}
    }
  },
  mounted: function () {
    this.axios.get('/api/goodslist')
      .then(res => {
        this.data = res.data.result
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {

  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    NavGoodsCard
  }
}
</script>
