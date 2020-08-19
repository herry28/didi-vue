<template>
    <div class='header'>
        <div class="l-content">
             <el-button type="primary"
             @click='collapseMenu' 
             icon="el-icon-menu" size="min"></el-button>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item 
                :to="current.path"
                v-if='current'> {{current.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span class="el-dropdown-link">
                    <img :src="userImg" alt="" class="userImg">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>                 
                </el-dropdown-menu>
             </el-dropdown>
        </div>     
    </div>
    
</template>


<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            userImg:require('../../assets/imgs/pic.jpg')
        }
    },
    computed:{
        ...mapState({
            current:state=>state.tab.currentMenu
        })
        
    },
    methods:{
        // 收缩菜单
        collapseMenu(){
            // 触发vuex中的方法
            this.$store.commit('collapseMenu')
    }
    }
    
}
</script>


<style>
    .header{
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .l-content{
        display: flex;
        align-items: center;
       
    }
    .el-button{
        margin-right: 50px;
    }
    .r-content .userImg{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>