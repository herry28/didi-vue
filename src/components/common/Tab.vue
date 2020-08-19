<template>
    <div>
         <el-tag
            :key="tag.name"
            v-for="tag in tags"
            closable
            :disable-transitions="false"
            :effect="$route.name===tag.name?'dark':''"
            @click='clickChangeTabMenu(tag)'
            @close="handleClose(tag)">
            {{tag.label}}
            </el-tag>
            <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            >
            </el-input>
            
    </div>
   
</template>



<script>
import {mapState,mapMutations} from 'vuex'
  export default {
      computed:{
          ...mapState({
              tags:state=>state.tab.tabList
          })
      },
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
        ...mapMutations({
            close:'closeTab'
        }),
      handleClose(tag) {
          this.close(tag)
      },
      clickChangeTabMenu(item){
          this.$router.push({name:item.name})
          this.$store.selectMenu(item)
      }
    }
  }
</script>



<style>
    .el-tag{
       margin: 10px 10px 0;
       cursor: pointer;
    }
</style>