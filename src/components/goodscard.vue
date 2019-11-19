<template>
  <div class="goodsCard">
    <!-- <div class='goodsImg' :style='"background:"+data.color'> -->
      <img :src='imgSrc' alt="">
    <!-- </div> -->
    <span>商品名称:{{data.name}}</span>
    <span>价格:{{data.price}}</span>
  </div>
</template>

<script>
import '@/assets/css/goodscard.css'
import Mock from 'mockjs'
export default {
  props: ['data'],
  data () {
    return {
      imgSrc: ''
    }
  },
  mounted: function () {
    this.imgSrc = Mock.Random.dataImage('300x350', this.data.name)
  }
}
</script>

<style>

</style>
