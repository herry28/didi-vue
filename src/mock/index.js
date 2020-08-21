import Mock from 'mockjs'
// 引入homeapi
import homeApi from './home'
import userApi from './user'
import permissionApi from './permission'

// 设置延时200-2000ms
Mock.setup({
    timeout:'200-2000'
})

// 首页相关
// 拦截的路径是/home/getHomeData
// 函数的返回值作为该路径的响应数据
Mock.mock(/\/home\/getHomeData/,homeApi.getHomeData())

// 用户相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove)
Mock.mock(/\/user\/add/, 'post', userApi.createUser)
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser)
Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData)

// 权限相关
Mock.mock(/\/permission\/getMenu/, 'post', permissionApi.getMenu)
