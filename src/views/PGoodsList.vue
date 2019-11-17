<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span slot="first">/Goods</span>
      <span slot="second">/Apple</span>
    </nav-bread>
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
  components: {
    NavHeader,
    NavFooter,
    navBread
  }
}
</script>
