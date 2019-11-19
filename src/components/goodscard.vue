<template>
  <div class="goodsCard">
    <div class='goodsImg' :style='"background:"+data.color'>
    </div>
    <span>{{data.name}}</span>
    <span>{{data.price}}</span>
  </div>
</template>

<script>
import '@/assets/css/goodscard.css'
export default {
  props: ['data'],
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
