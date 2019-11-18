<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span slot="first">/Goods</span>
      <span slot="second">/Apple</span>
    </nav-bread>
    <a href='javascript:;' @click='getdata'>getdata</a>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'
import navBread from '@/components/bread'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted: function () {
    this.axios.get('/api/goodslist')
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  },
  methods: {
    getdata: function () {
      this.axios.get('/api/goodslist')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  components: {
    NavHeader,
    NavFooter,
    navBread
  }
}
</script>
