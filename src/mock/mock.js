import Mock from 'mockjs'
// import goods from './goods.json'
const url = '/api/goodslist'
const method = 'post'
const data = {
  'id': '@guid',
  'name': '@cname'
}
Mock.mock(url, method, data)

export default Mock
