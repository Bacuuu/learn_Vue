<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span slot="first">/Goods</span>
      <span slot="second">/Apple</span>
    </nav-bread>
    <div class="cardList">
      <div class='priceFilter'>
        <a href="javascript:;" v-for='(price, index) in priceFilter' :key=price.id  :class='{"priceChoose":priceChecked == index}' @click='priceCheck(index)'>{{price.startPrice}}--{{price.endPrice}}</a>
      </div>
      <nav-goods-card v-for='card in data' :data='card' :key='card.name'></nav-goods-card>
    </div>
    <nav-footer></nav-footer>
    <div style="margin-bottom:70px"></div>
  </div>
</template>

<script>
import '@/assets/css/index.css'
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'
import NavBread from '@/components/bread'
import NavGoodsCard from '@/components/goodscard'
export default {
  data () {
    return {
      data: {},
      priceChecked: 0,
      priceFilter: [
        {
          startPrice: 1499,
          endPrice: 2499
        },
        {
          startPrice: 2499,
          endPrice: 3499
        },
        {
          startPrice: 3499,
          endPrice: 4499
        },
        {
          startPrice: 4499,
          endPrice: 4999
        }
      ]
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
    priceCheck: function (index) {
      this.priceChecked = index
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    NavGoodsCard
  }
}
</script>
