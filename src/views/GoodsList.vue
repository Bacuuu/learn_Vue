<template>
  <div>
    this is page for goodslist.
    {{$route.params.GoodsList}}
    <router-link to="title"> title</router-link>
    <router-link to="image"> image</router-link>
    <router-link to="/cart">cart</router-link>
    <!-- name 根据index.js里的name
    name params
    很神奇，如果路由中params参数名称不对,路由不对但是component加载正确-->
    <router-link :to="{ name:'cart', params:{cartID:2323}}">cart</router-link>
    <button @click='tocart'></button>
  </div>
</template>
<style>

</style>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    tocart () {
      // this.$router.push('/cart');
      this.$router.push({path: '/cart'})
    }
  }
}
</script>
