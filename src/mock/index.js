import Mock from 'mockjs'
// 引入homeapi
import homeApi from './home'

// 设置延时200-2000ms
Mock.setup({
    timeout:'200-2000'
})

// 拦截的路径是/home/getHomeData
// 函数的返回值作为该路径的响应数据
Mock.mock(/\/home\/getHomeData/,homeApi.getHomeData())