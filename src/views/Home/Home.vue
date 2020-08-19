<template>
    <el-row class="home" :gutter='20'> 
        <el-col :span='8'>
            <el-card shadow='hover' >
                <div class="user">
                    <img :src="userImg" alt="">
                    <div class="userinfo">
                        <p class='name'>herry</p>
                        <p class='access'>超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>20200819</span></p>
                    <p>上次登录地点：<span>深圳</span></p>
                </div>
            </el-card>
            <el-card shadow='hover' style="height:522px;margin-top:20px">
                鼠标悬浮式显示
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
                <div style="height:280px">

                </div>
            </el-card>
            <div class="graph">
                <el-card shadow='hover'>
                    <div style="height:260px">

                    </div>
                </el-card>
                 <el-card shadow='hover'>
                    <div style="height:260px">

                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>



<script>
export default {
    mounted(){
        this.$http.get('/home/getHomeData').then(
            res=>{
                console.log(res.data)
            }
        )
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
               
            ]
        }
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