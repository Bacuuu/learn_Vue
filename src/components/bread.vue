<template>
  <div class='bread'>
    <div class='container'>
      <nav class='nav-breadcrumb'>
        <a href="/">Home</a>
        <slot name='first'></slot>
        <slot name='second'></slot>
      </nav>
    </div>
  </div>
</template>

<script>
import '@/assets/css/breadcrumb.css'
export default {

}
</script>

<style>

</style>
