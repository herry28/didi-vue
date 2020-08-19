<template>
    <el-container>
        <el-aside width="200px" ><side></side></el-aside>
        <el-container>
            <el-header><header-bar></header-bar></el-header>
            <tab>11111</tab>
            <el-main>
                 <router-view />
            </el-main>
           
        </el-container>
    </el-container>
</template>


<script>
    //引入头部导航栏组件 
    import HeaderBar from '../components/common/HeaderBar.vue'
     //引入侧边栏组件 
    import Side from '../components/common/Side.vue'
     //引入tab组件 
    import Tab from '../components/common/Tab.vue'
    
    
    export default {
        components:{
            HeaderBar,
            Side,
            Tab
        }
    }
</script>


<style>
.el-header{
    background-color: #ccc;
}
</style>
