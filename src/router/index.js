import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
import Resource from '@/components/Resource'

Vue.use(Router)

export default new Router({
  // 指定为history模式
  // hash模式 /#/
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        title: Title,
        image: Image
      }
    },
    {
      path: '/vue-resource',
      name: 'resource',
      component: Resource
    },
    {
      path: '/goods',
      name: 'GoodsList',
      components: {
        default: GoodsList,
        img: Image
      }
      // children: [
      //   {
      //     path: 'title',
      //     name: 'title',
      //     component: Title
      //   },
      //   {
      //     path: 'image',
      //     name: 'image',
      //     component: Image
      //   }
      // ]
    },
    {
      path: '/goods/apple',
      name: 'goods_apple',
      components: {
        default: Image,
        title: Title
      }
    },
    {
      path: '/cart/:cartID',
      name: 'cart',
      component: Cart
    }
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: Cart
    // }
  ]
})
