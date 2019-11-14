<template>
  <div id='app'>
    <a href="javascript:;" @click='get'>get</a>
    <a href="javascript:;" @click='post'>post</a>
    <a href="javascript:;" @click='http'>http</a>
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
    this.axios.interceptors.request.use(function (config) {
      console.log('request init')
      return config
    })
    this.axios.interceptors.response.use(function (res) {
      console.log('response init')
      return res
    })
  },
  // 配置共同路径
  // http: {

  // },
  methods: {
    get: function () {
      this.axios.get('/', {
        params: {
          userId: '101'
        },
        headers: {
          token: 'abcd,'
        }
      }).then(res => {
        this.msg = res.data
      }).catch((err) => {
        console.log(err)
      })
    },
    post: function () {
      this.axios.post('/', {
        UserId: '343'
      }, {
        headers: {
          token: '666'
        }
      }).then(res => {
        this.msg = res.data
      }).catch(err => {
        this.msg = err
      })
    },
    // jsonp: () => {

    // }
    http: function () {
      this.axios({
        url: '/',
        method: 'get',
        // get传参,附在链接
        params: {
          UserId: 'get'
        },
        // post传参
        // data: {
        //   UserId: '123321'
        // },
        headers: {
          token: 'session'
        }
      }).then(res => {
        this.msg = res
      })
    }
  }
}
</script>
