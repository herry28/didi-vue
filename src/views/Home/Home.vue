<template>
    <el-row class="home" :gutter='20'> 
        <el-col :span='8'>
            <el-card shadow='hover' >
                <div class="user">
                    <img :src="userImg" alt="">
                    <div class="userinfo">
                        <p class='name'>zouhai</p>
                        <p class='access'>超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>20200819</span></p>
                    <p>上次登录地点：<span>深圳</span></p>
                </div>
            </el-card>
            <el-card shadow='hover' style="margin-top:20px">
               <el-table :data='tableData'>
                   <el-table-column 
                   v-for='(val,key) in tableLabel'
                   :key='key'
                   :prop='key'
                   :label='val'></el-table-column>
               </el-table>
            </el-card>
        </el-col>
        <el-col :span='16'>
            <div class="num">
                 <el-card shadow='hover' v-for='(item,index) in countData' :key='index' :body-style="{display:'flex',padding:0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
                    <div class="detail">
                        <p class='num'>￥{{item.value}}</p>
                        <p class='txt'>{{item.name}}</p>
                    </div>
                </el-card>
            </div>
             <el-card shadow='hover'>
                <echart style="height:280px">

                </echart>
            </el-card>
            <div class="graph">
                <!-- 折线图 -->
                <el-card shadow='hover'>
                    <echart 
                    :chartData='echartData.order'
                    style="height:260px">
                    {{echartData.order}}
                    </echart>
                </el-card>
                 <el-card shadow='hover'>
                    <echart style="height:260px">

                    </echart>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>



<script>
import Echart from '../../components/echarts/Echarts'
export default {
   components:{
       Echart
   },
    data(){
        return{
            userImg:require('../../assets/imgs/pic.jpg'),
            countData:[
                {
                    name:'1号支付订单',
                    value:111,
                    icon:'success',
                    color:'#2ec7c9'
                },
                {
                    name:'2号订单',
                    value:222,
                    icon:'warning',
                    color:'#ffb980'
                },
                {
                    name:'3号订单',
                    value:333,
                    icon:'s-goods',
                    color:'#5ba1ef'
                },
                {
                    name:'4号订单',
                    value:444,
                    icon:'success',
                    color:'#2ec7c9'
                },
                {
                    name:'5号支付订单',
                    value:555,
                    icon:'warning',
                    color:'#ffb980'
                },
                {
                    name:'6号支付订单',
                    value:666,
                    icon:'s-goods',
                    color:'#5ba1ef'
                },
               
            ],
            // 表格数据
            tableData:[],
            tableLabel:{
                name:'名字',
                todayBuy:'今日购买',
                monthBuy:'本月购买', 
                totalBuy:'总购买' 
            },
            // 图表数据
            echartData:{
                // 订单数据
                order:{
                    xData:[],
                    series:[]
                },
                user:{
                    xData:[],
                    series:[]
                },
                video:{
                    series:[]
                }
            }
        }
    },
    methods:{
        getHomeData(){
            this.$http.get('/home/getHomeData').then(
                res=>{
                    this.tableData=res.data.data.tableData
                    //  console.log(this.tableData)
                    //  console.log(res.data)
                     //折线图数据
                     const order=res.data.data.orderData
                    //  console.log(order)
                    //  折线图横坐标
                     this.echartData.order.xData=order.date
                    // 取出series中name部分---键名
                     let keyArray=Object.keys(order.data[0])
                    //  console.log(keyArray)
                    keyArray.forEach(key=>{
                        this.echartData.order.series.push({
                            name:key==='wechat'?'小程序':key,
                            data:order.data.map(item=>item[key]),
                            type:'line'
                        })
                    })
                    // 柱状图数据
                    const user=res.data.data.userData
                    // console.log(user)
                    this.echartData.user.xData=user.map(item=>item.date)
                    this.echartData.user.series.push({
                        name:'新增用户',
                        data:user.map(item=>item.new),
                        type:'bar'
                    })
                     this.echartData.user.series.push({
                        name:'活跃用户',
                        data:user.map(item=>item.active),
                        type:'bar'
                    })
                    // 饼图数据
                    const video=res.data.data.videoData
                    // console.log(video)
                    this.echartData.video.series.push({
                        data:video,
                        type:'pie'
                    })


                }
            )
        }
    },
    created(){
        this.getHomeData()
    }
}
</script>



<style >
    .num{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;

    }
    .num .el-card{
        width: 32%;
        margin-bottom: 20px;
    }
    .graph{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .graph .el-card{
        width: 48%;
    }
    .user{
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        margin-bottom: 20px;
       border-bottom: 1px solid #ccc;
    }
    .user img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 40px;
    }
    .userinfo .name{
        font-size: 32px;
        margin-bottom: 20px;
    }
    .userinfo .acess{
        color: #999;
    }
    .login-info p{
        line-height: 28px;
        font-size: 14px;
        color: #999;
    }
    .login-info p span{
        color: #666;
        padding-left: 40px;
    }
    .icon{
        font-size: 30px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 80px;
    }
    .detail{
        padding-left: 20px;
       
    }
    .detail .num{
        font-weight: 700;
        font-size: 20px;
    }
    .detail .txt{
        color: #666;
    }
</style>