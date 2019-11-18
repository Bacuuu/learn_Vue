import Mock from 'mockjs'
import goods from './goods.json'
const url = '/api/goodslist'
const method = 'get'
Mock.mock(url, method, goods)

export default Mock
