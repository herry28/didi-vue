<template>
     <el-menu
      router='true'
      :collapse='isCollapse'
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#33aef0"
      text-color="#fff"
      active-text-color="#ffd04b">
      <h3>didi后台管理系统</h3>
      <el-menu-item 
      :index="item.path" 
      @click="clickMenu(item)"
      v-for='item in sideMenu' 
      :key='item.path'>
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
    </el-menu>
</template>


<script>
export default {
    data(){
        return{
            sideMenu:[
                {
                    path:'/',
                    name:'home',
                    label:'首页',
                    icon:'home'
                },
                {
                    path:'/video',
                    name:'video',
                    label:'视频管理',
                    icon:'video-play'
                },
                {
                    path:'/user',
                    name:'user',
                    label:'用户管理',
                    icon:'user'
                },
            ]
        }
    },
    computed:{
        // 获取vuex里关于collapse的数据
        isCollapse(){
            return this.$store.state.tab.isCollapse
        }
    },
    methods:{
        clickMenu(item){
            this.$store.commit('selectMenu',item)
        }
    }
}
</script>


<style>
  .el-menu{
    height: 1000px;
    border: none;
  }
  .el-menu h3{
     color: aliceblue;
     text-align: center;
  }
</style>