<template>
  <div id='app'>
    <a href="javascript:;" @click='get'>get</a>
    <a href="javascript:;" @click='post'>post</a>
    <a href="javascript:;" @click='jsonp'>jsonp</a>
    <span>{{msg}}</span>
  </div>
</template>
<script>
export default {
  name: 'Resourse',
  data () {
    return {
      msg: ''
    }
  },
  mounted: function () {
    this.$http.interceptors.push(function (request, next) {
      console.log('request init')
      next(function (response) {
        console.log('response init')
        return response
      })
    })
  },
  methods: {
    get: function () {
      this.$http.get('package.json', {
        params: {
          userId: '101'
        },
        headers: {
          token: 'abcd,'
        }
      }).then(res => {
        this.msg = res.data
      }, err => {
        this.msg = err
      })
    },
    post: () => {

    },
    jsonp: () => {

    }
  }
}
</script>
