<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p><span>{{num}}</span></p>
  </div>
</template>

<style>

</style>

<script>
export default {
  props: ['num'],
  data () {
    return {
      // num:0,
    }
  },
  methods: {
    increment () {
      this.num++
    },
    decrement () {
      this.num--
    }
  }
}
</script>
